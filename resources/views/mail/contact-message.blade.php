<!doctype html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f4f2ec;font-family:Arial,Helvetica,sans-serif;color:#0c0c0c;">
    <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;padding:24px;">
      <tr>
        <td>
          <h1 style="margin:0 0 16px;font-size:20px;">New message from your website</h1>
          <p style="margin:0 0 4px;"><strong>Name:</strong> {{ $name }}</p>
          <p style="margin:0 0 4px;"><strong>Email:</strong> <a href="mailto:{{ $email }}">{{ $email }}</a></p>
          <p style="margin:0 0 16px;"><strong>Service:</strong> {{ $service }}</p>
          <div style="padding:16px;border-left:4px solid #d4ff3a;background:#f7f7f5;line-height:1.6;">{!! nl2br(e($body)) !!}</div>
          <p style="margin:16px 0 0;font-size:13px;color:#666;">Reply to this email to answer {{ $name }} directly.</p>
        </td>
      </tr>
    </table>
  </body>
</html>
