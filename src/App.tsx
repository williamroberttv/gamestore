import { ChakraProvider } from '@chakra-ui/react';
import { StoreContext } from './context/storeContext';

import { Routes } from './routes/routes';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <StoreContext>
        <Routes />
      </StoreContext>
    </ChakraProvider>
  );
}

export default App;
