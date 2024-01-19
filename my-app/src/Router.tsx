import { createBrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

// error component가 없을 경우 런타임 충돌이 일어나서 앱이 죽어버림
// 그러니까 error component가 있는게 좋음!

const router = createBrowserRouter([
  {
    // 전체 route들의 컨테이너
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home />, errorElement: <ErrorComponent /> },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
