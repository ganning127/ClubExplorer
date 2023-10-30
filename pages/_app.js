// pages/_app.js
import '@uiw/react-markdown-preview/esm/styles/markdown.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { ClerkProvider } from '@clerk/nextjs';

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
  return (
    <ClerkProvider {...pageProps}>
      <ChakraProvider>
          <ForceLightMode>
        <Component {...pageProps} />
        </ForceLightMode>
      </ChakraProvider>
    </ClerkProvider>
  )
}

export default MyApp;