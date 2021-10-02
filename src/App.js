import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Review from './Components/Review/Review';
import ThumbsUp from "../src/Components/Thumbsup/ThumbsUp"

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Hero}></Route>
          <Route path="/hero" component={Hero}></Route>
          <Route path="/review" component={Review}></Route>
          <Route path="/thumbsup" component={ThumbsUp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
