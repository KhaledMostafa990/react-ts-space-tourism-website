import DesignSystemPage from 'components/pages/DesignSystemPage';
import Home from 'components/pages/Home';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './sass/main.scss';
import { lazy, Suspense } from 'react';
import { MainHeader } from './components/base/MainHeader';

const DestinationsPage = lazy(
  () => import('./components/pages/innerPages/DestinationsPage')
);
const CrewPage = lazy(() => import('./components/pages/innerPages/CrewPage'));
const TechPage = lazy(() => import('./components/pages/innerPages/TechPage'));

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className='App fw-400'>
      {pathname !== '/designsystem' && <MainHeader />}
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace={true} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/designsystem' element={<DesignSystemPage />} />

          <Route path='/destinations' element={<DestinationsPage />} />

          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechPage />} />

          <Route path='*' element={<div> Not Found </div>} />
        </Routes>
      </Suspense>
    </div>
  );
}
