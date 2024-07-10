import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   来排除/api、/_next/static、/_next/image以及所有以.png结尾的请求。
// 受保护的路由在中间件验证身份之前甚至不会开始渲染
// 从而增强了应用程序的安全性和性能。
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};