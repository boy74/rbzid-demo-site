import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  const ip = request.ip || 'unknown';
  
  console.log(`[WAF] BLOCKED request from IP: ${ip}, UA: ${ua}`);
  
  const challengeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>WAF Challenge - Verify You Are Human</title>
      <style>
        body { font-family: Arial; text-align: center; padding-top: 100px; background: #1a1a1a; color: #fff; }
        .box { background: #2a2a2a; padding: 40px; border-radius: 10px; display: inline-block; }
        button { padding: 15px 30px; font-size: 18px; cursor: pointer; background: #4CAF50; border: none; color: white; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>🛡️ WAF Protected</h1>
        <p>Please verify you are human to access this site.</p>
        <p>Blocked by Level 3 WAF</p>
        <br>
        <button onclick="alert('For demo only. Lahat naka-block muna bro.')">I'm Human - Verify</button>
        <p style="font-size:12px; margin-top:20px;">IP: ${ip}</p>
      </div>
    </body>
    </html>
  `;
  
  return new Response(challengeHTML, { 
    status: 403,
    headers: { 
      'Content-Type': 'text/html',
      'Cache-Control': 'no-store' 
    }
  });
}

export const config = {
  matcher: '/:path*'
}
