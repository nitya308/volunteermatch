import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MyNav from './components/nav';
import Home from "./components/homepage";
import About from "./components/about";
import Interests from "./components/quiz-interests";
import Skills from "./components/quiz-skills";
import Time from "./components/quiz-time";
import './styles/styles.css'
import { useState } from "react";
import Results from "./components/results";

function App() {

  const [filters, setFilters] = useState({ 'interests': [], 'skills': [], 'time': "" })

  const addInterest = (interest) => {
    filters['interests'].push(interest)
    setFilters({ ...filters })
  }

  const removeInterest = (interest) => {
    filters['interests'] = filters['interests'].filter((it) => it !== interest)
    setFilters({ ...filters })
  }

  const addSkill = (skill) => {
    filters['skills'].push(skill)
    setFilters({ ...filters })
  }

  const removeSkill = (skill) => {
    filters['skills'] = filters['skills'].filter((it) => it !== skill)
    setFilters({ ...filters })
  }
  const setTime = (time) => {
    filters['time'] = time
    setFilters({ ...filters })
  }


  return (
    <Router>
      <MyNav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/quiz-interests">
          <Interests add={addInterest} remove={removeInterest} />
        </Route>
        <Route exact path="/quiz-skills">
          <Skills add={addSkill} remove={removeSkill} />
        </Route>
        <Route exact path="/quiz-time">
          <Time setTime={setTime} time={filters['time']} />
        </Route>
        <Route exact path="/results">
          <Results filters={filters} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
