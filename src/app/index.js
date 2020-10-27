import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Users from '../users/index.js'
import User from '../user/index.js'


function App() {

  return (
    <BrowserRouter>
        <Route path="/" exact render={() => (
            <div className="App">
                < Users />
            </div>
        )} />
        <Route path="/user/:id" component={User} />
    </BrowserRouter>
  );
}

export default App;
