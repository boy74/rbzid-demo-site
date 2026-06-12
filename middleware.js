export const config = {
  matcher: '/:path*',
}

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || ''
  
  // Block mga bot at curl
  if (ua.includes('bot') || ua.includes('curl') || ua.includes('wget') || ua === '') {
    return new Response('🛡️ Blocked by WAF Level 3', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
  
  // Pag human, tuloy lang
  return
}
