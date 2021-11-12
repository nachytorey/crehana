import CountryFinder from './components/CountryFinder';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryDetail } from './components/CountryDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryFinder />} />
        <Route path="/detail/:name/:code/:currency/:continentName/:capital" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;