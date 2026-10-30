<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $name,
        public string $email,
        public string $service,
        public string $body,
    ) {}

    /**
     * Sent from the site's own address; replying goes to the visitor.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            replyTo: [new Address($this->email, $this->name)],
            subject: "Portfolio enquiry: {$this->service} — {$this->name}",
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.contact-message',
            text: 'mail.contact-message-text',
        );
    }
}
