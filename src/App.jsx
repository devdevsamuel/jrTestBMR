import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoaderContextProvider } from './contexts/LoaderContext/LoaderContext.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import A11Demo from './pages/A11Demo/A11Demo.jsx';
import GlobalLayout from './layouts/GlobalLayout/GlobalLayout';


function App() {
  return (
    <Router>
      <LoaderContextProvider>
          <GlobalLayout>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/a11Demo" element={<A11Demo/>} />
            </Routes>
          </GlobalLayout>
      </LoaderContextProvider>
    </Router>
  );
}

export default App;
