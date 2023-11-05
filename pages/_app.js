// pages/_app.js
import '@uiw/react-markdown-preview/esm/styles/markdown.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

const publicPages = [
  "",
  "/sign-in/[[...index]]",
  "/sign-up/[[...index]]",
];

function ForceLightMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode]);

  return children;
}

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);
  return (
    <ClerkProvider {...pageProps}>
      
      <ChakraProvider>
          <ForceLightMode>
          {isPublicPage ? (
             <Component {...pageProps} />
           ) : (
           <>
             <SignedIn>
               <Component {...pageProps} />
             </SignedIn>
             <SignedOut>
               <RedirectToSignIn />
             </SignedOut>
           </>)}
        </ForceLightMode>
      </ChakraProvider>
    </ClerkProvider>
  )
}

export default MyApp;

{/* <ClerkProvider {...pageProps}>
      
      <ChakraProvider>
          <ForceLightMode>
          {isPublicPage ? (
             <Component {...pageProps} />
           ) : (
           <>
             <SignedIn>
               <Component {...pageProps} />
             </SignedIn>
             <SignedOut>
               <RedirectToSignIn />
             </SignedOut>
           </>)}
        </ForceLightMode>
      </ChakraProvider>
    </ClerkProvider> 
  
  Base attempt:

  <ClerkProvider {...pageProps}>
      <ChakraProvider>
          <ForceLightMode>
            <Component {...pageProps} />
        </ForceLightMode>
      </ChakraProvider>
    </ClerkProvider>*/}