import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Review from './Components/Review/Review';
import ThumbsUp from "../src/Components/Thumbsup/ThumbsUp"
import LogIn from './LogIn/LogIn';
import Register from './Components/Register/Register';
import AuthProvider from './Context/useContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Hero}></Route>
          <Route path="/hero" component={Hero}></Route>
          <Route path="/review" component={Review}></Route>
          <Route path="/login" component={LogIn}></Route>
          <Route path="/register" component={Register}></Route>
          <PrivateRoute path='/thumbsup'>
            <ThumbsUp></ThumbsUp>
          </PrivateRoute>
          <PrivateRoute path='/shipping'>
            <Shipping></Shipping>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
