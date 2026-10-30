<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessage;
use App\Support\Portfolio;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Throwable;

class ContactController extends Controller
{
    /**
     * Email a message from the website's contact form to the site owner.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:150'],
            // The services listed on the site, plus the form's catch-all option.
            'service' => ['required', Rule::in([...Portfolio::serviceTitles(), 'Other'])],
            'message' => ['required', 'string', 'min:10', 'max:5000'],
            'website' => ['nullable', 'string'],
        ]);

        // The hidden `website` field is a honeypot: only bots fill it in. Act as if
        // the message was sent so they don't retry.
        if (filled($data['website'] ?? null)) {
            return back();
        }

        $key = 'contact:'.$request->ip();
        if (RateLimiter::tooManyAttempts($key, 5)) {
            $minutes = (int) ceil(RateLimiter::availableIn($key) / 60);

            throw ValidationException::withMessages([
                'form' => "Too many messages. Please try again in {$minutes} minute(s), or email me directly.",
            ]);
        }
        RateLimiter::hit($key, 60 * 60);

        try {
            Mail::to(config('mail.contact_to'))->send(new ContactMessage(
                name: $data['name'],
                email: $data['email'],
                service: $data['service'],
                body: $data['message'],
            ));
        } catch (Throwable $e) {
            Log::error('Contact form email failed to send.', ['exception' => $e]);

            throw ValidationException::withMessages([
                'form' => 'Sorry, your message could not be sent right now. Please email me directly.',
            ]);
        }

        return back();
    }
}
