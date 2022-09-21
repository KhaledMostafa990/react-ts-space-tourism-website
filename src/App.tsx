import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './sass/main.scss';

import Home from 'components/pages/Home';
import MainHeader from './components/base/MainHeader';
import DesignSystemPage from 'components/pages/DesignSystemPage';

import DestinationsPage from './components/pages/innerPages/DestinationsPage';
import CrewPage from './components/pages/innerPages/CrewPage';
import TechPage from './components/pages/innerPages/TechPage';

export default function App() {
  return (
    <div className='App fw-400'>
      <BrowserRouter>
        <MainHeader />

        <Routes>
          <Route path='/' element={<Navigate to='/home' replace={true} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/designsystem' element={<DesignSystemPage />} />

          <Route path='/destinations' element={<DestinationsPage />} />
          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechPage />} />

          <Route path='*' element={<div> Not Found </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
