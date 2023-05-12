
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

import './styles/main.css';

export default function App() {
  const basename = import.meta.env.DEV ? '' : '/codeleap-test';

  return (
    <BrowserRouter basename={basename}>
      <Router />
    </BrowserRouter>
  )
}


