<?php

namespace Tests\Feature;

use App\Mail\ContactMessage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Tests\TestCase;

class ContactTest extends TestCase
{
    private array $message = [
        'name' => 'Test Visitor',
        'email' => 'visitor@example.com',
        'service' => 'Microsoft 365',
        'message' => 'I would like to discuss a project.',
    ];

    protected function setUp(): void
    {
        parent::setUp();
        RateLimiter::clear('contact:127.0.0.1');
    }

    public function test_a_valid_message_is_emailed_to_the_site_owner(): void
    {
        Mail::fake();

        $this->from('/')->post('/contact', $this->message)->assertRedirect('/')->assertSessionHasNoErrors();

        Mail::assertSent(ContactMessage::class, fn (ContactMessage $mail) => $mail->hasTo(config('mail.contact_to'))
            && $mail->hasReplyTo('visitor@example.com', 'Test Visitor')
            && $mail->service === 'Microsoft 365'
            && $mail->body === 'I would like to discuss a project.');
    }

    public function test_invalid_messages_are_rejected(): void
    {
        Mail::fake();

        $this->from('/')->post('/contact', ['name' => '', 'email' => 'not-an-email', 'service' => 'Plumbing', 'message' => 'short'])
            ->assertSessionHasErrors(['name', 'email', 'service', 'message']);

        Mail::assertNothingSent();
    }

    public function test_other_is_accepted_as_a_service(): void
    {
        Mail::fake();

        $this->from('/')->post('/contact', [...$this->message, 'service' => 'Other'])->assertSessionHasNoErrors();

        Mail::assertSent(ContactMessage::class, fn (ContactMessage $mail) => $mail->service === 'Other');
    }

    public function test_the_honeypot_silently_drops_bot_submissions(): void
    {
        Mail::fake();

        $this->from('/')->post('/contact', [...$this->message, 'website' => 'https://spam.example'])
            ->assertRedirect('/')
            ->assertSessionHasNoErrors();

        Mail::assertNothingSent();
    }

    public function test_senders_are_limited_to_five_messages_an_hour(): void
    {
        Mail::fake();

        for ($i = 0; $i < 5; $i++) {
            $this->from('/')->post('/contact', $this->message)->assertSessionHasNoErrors();
        }
        $this->from('/')->post('/contact', $this->message)->assertSessionHasErrors('form');

        Mail::assertSentCount(5);
    }
}
