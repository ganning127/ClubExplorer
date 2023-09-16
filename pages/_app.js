// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

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
    <ChakraProvider>
        <ForceLightMode>
      <Component {...pageProps} />
      </ForceLightMode>
    </ChakraProvider>
  )
}

export default MyApp;