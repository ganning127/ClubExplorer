// import { withClerkMiddleware } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server'

// export default withClerkMiddleware(req => {
//   return NextResponse.next()
// })

// // Stop Middleware running on static files
// export const config = {
//   matcher: '/((?!_next/image|_next/static|favicon.ico).*)'
// }

import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    ignoredRoutes: "/api/addMassTasks"
});

export const config = {
    matcher: ['/((?!.+\.[\w]+$|_next).)', '/', '/(api|trpc)(.)'],
};