import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './core/routes';

const App: FC = () => {

  return useRoutes(routes);
};

export default App;
