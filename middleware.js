import { NextResponse } from 'next/server';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  
  // Block obvious bots: curl, wget, python, empty UA
  if (!ua || /curl|wget|python|bot|scraper/i.test(ua)) {
    return new Response('Access Denied - Bot detected by WAF', { 
      status: 403 
    });
  }
  
  // Kung tao, tuloy sa index.html mo
  return NextResponse.next();
}

export const config = {
  matcher: '/' 
}
