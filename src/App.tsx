import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css'
import { Routes } from './router/routes'
import './css/main.css';


function App() {

  return (
    <Router>
    <div className="App">
      <Routes />
    </div>
    </Router>
  )
}

export default App
