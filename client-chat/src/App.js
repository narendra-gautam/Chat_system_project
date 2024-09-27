import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import Registration from './components/authLogin/Registration';
import UseLogin from './components/authLogin/UseLogin';

import socketIO from 'socket.io-client';
import Login from './components/authLogin/UseLogin';
const socket = socketIO.connect('http://localhost:4000');
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/login" element={<UseLogin />}></Route>
          <Route path="/home" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
