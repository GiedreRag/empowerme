import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicLayout } from './layout/PublicLayout';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';
import { AboutMe } from './pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
          <Route index path='/' element={<Home />}></Route>
          <Route path='/apie-mane' element={<AboutMe />}></Route>
        </Route>
        <Route Component={PublicLayout}>
          <Route path='*' element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;