import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';

function App() {
  return (
    <div id="container">

      <Header />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>
    </div>
  );
}

export default App;
