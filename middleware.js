// import { withClerkMiddleware } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server'

// export default withClerkMiddleware(req => {
//   return NextResponse.next()
// })

// // Stop Middleware running on static files
// export const config = {
//   matcher: '/((?!_next/image|_next/static|favicon.ico).*)'
// }

import { authMiddleware, redirectToSignUp } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

export default authMiddleware({
    afterAuth(auth, req, evt)
    {
        // handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute)
        {
            return redirectToSignIn({ returnBackUrl: "/" });
        }
    },
    publicRoutes: ["/"]
});

export const config = {
    matcher: ['/((?!.+\.[\w]+$|_next).)', '/', '/(api|trpc)(.)'],
};