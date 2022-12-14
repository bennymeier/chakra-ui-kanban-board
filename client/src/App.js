import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import SidebarWithHeader from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Debug from './pages/Debug';

function App() {
  return (
    <>
      <ChakraProvider>
        <SidebarWithHeader>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="debug" element={<Debug />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </SidebarWithHeader>
      </ChakraProvider>
    </>
  );
}

export default App;
