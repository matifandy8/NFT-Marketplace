import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./router/routes";
import "./css/main.css";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
