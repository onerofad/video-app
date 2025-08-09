import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { createMedia } from '@artsy/fresnel';
import Home from './components/Home';

const {Media, MediaContextProvider} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    deskop: 1024,

  }
})

function App() {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home mobile />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;
