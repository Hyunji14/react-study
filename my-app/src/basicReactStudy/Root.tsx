import { Outlet } from 'react-router-dom';
import Header from './components/Header';

// Outlet은 자식의 모든 화면들을 rendering 함
function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
