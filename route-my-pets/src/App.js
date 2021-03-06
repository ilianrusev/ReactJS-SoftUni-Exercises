import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as authService from './services/authService'
import Create from './components/Create/Create';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';

function App() {

  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' })

  useEffect(() => {
    let user = authService.getUser()

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    })

  }, [])

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    })
  }

  return (
    <div id="container">

      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/my-pets" element={<MyPets />} />

        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>
    </div>
  );
}

export default App;
