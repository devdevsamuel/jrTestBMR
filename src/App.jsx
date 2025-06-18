import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoaderContextProvider } from './contexts/LoaderContext/LoaderContext.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import GlobalLayout from './layouts/GlobalLayout/GlobalLayout';


function App() {
  return (
    <Router>
      <LoaderContextProvider>
          <GlobalLayout>
            <Routes>
              <Route path="/" element={<MainPage/>} />
            </Routes>
          </GlobalLayout>
      </LoaderContextProvider>
    </Router>
  );
}

export default App;
