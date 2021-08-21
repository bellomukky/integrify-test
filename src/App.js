import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <Router>
        <div className="container py-5 px-5 page-container">
            <Switch>
                <Route path="/users/:id" exact children={<UserDetail />} />
                <Route path="/"  children={<HomePage />} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
