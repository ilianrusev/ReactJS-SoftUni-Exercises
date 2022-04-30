import {  Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from "./components/CreateGame";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import GameDetails from "./components/GameDetails";


function App() {

  return (

    <div id="box">

      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<WelcomeWorld />} />
          <Route path="/home" element={<WelcomeWorld />} />
          <Route path="/games" element={<GameCatalog />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="*" element={<ErrorPage/>} />


        </Routes>
      </main>

    </div>

  );
}

export default App;
