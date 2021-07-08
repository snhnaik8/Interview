
import './App.css';
import Users from './Users';
import UserDetails from './userDetails';
import PostDetails from './PostDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <h1>text</h1> */}
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/userDetails/:id">
              <UserDetails />
            </Route>
            <Route path="/postDetails/:id">
              <PostDetails/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
