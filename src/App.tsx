import DesignSystemPage from 'components/pages/DesignSystemPage';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import './sass/main.scss';

function App() {
  const { pathname } = useLocation();

  return (
    <div className='App fw-400'>
      <ul className='flex'>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        {pathname !== '/designsystem' && (
          <li>
            <Link to='/designsystem'>Design System</Link>
          </li>
        )}
        <li>
          <Link to='/destinations'>Destinations</Link>
        </li>
        <li>
          <Link to='/crew'>Crew</Link>
        </li>
        <li>
          <Link to='/technology'>Technology</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Navigate to='/home' replace={true} />} />
        <Route path='/home' element={<div>welcome to home</div>} />
        <Route path='/designsystem' element={<DesignSystemPage />} />

        <Route path='/destinations' element={<p>welcome to destinations</p>} />
        <Route path='/crew' element={<div>welcome to Crew</div>} />
        <Route path='/technology' element={<div>welcome to Technology </div>} />

        <Route path='*' element={<div> Not Found </div>} />
      </Routes>
    </div>
  );
}

export default App;
