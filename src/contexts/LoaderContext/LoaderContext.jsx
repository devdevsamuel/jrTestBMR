// Importamos las dependencias necesarias de React y hooks.
import { createContext, useContext, useState } from 'react';
import GlobalLoader from '../../Components/GlobalLoader/GlobalLoader';

const LoaderContext = createContext();

function LoaderContextProvider({ children }) {
  const [globalLoading, setGlobalLoading] = useState(false);

  return (
    <LoaderContext.Provider
        value={{
          globalLoading,
          setGlobalLoading
        }}
    >
      {children}
      {globalLoading && <GlobalLoader />}
    </LoaderContext.Provider>
  );
}

function useLoaderContext() {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error('useExampleContext debe ser usado dentro de un ExampleContextProvider');
  }

  return context;
}

export { LoaderContextProvider, useLoaderContext };