import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
