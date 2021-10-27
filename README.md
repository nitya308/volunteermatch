# Student VolunteerMatch
**Author:** Nitya Agarwala   |  **Designed by:** Nitya Agarwala  
**Created:** 2020  
**Description:** Matches students with community service projects based on their skills, interests, and time requirements

## Basic Details:
**Platform:** ReactJS  
**Languages:** JavaScript  
**Frameworks:** React-Bootstrap

## Running the App

**Running this project locally** requires NodeJS and yarn/npm. To install the required packages, run the following command

```yarn install```

OR

```npm install```

**To start the app:**  

```yarn start```

OR

```npm run start```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Structure:
Below is the basic structure of the web app. The components directory holds all presentational componenets and quiz functions. Componenets are displayed using calls in App.js.
```
 --src
    | -- components
    |   |-- nav.js (for Navbar)
    |   |-- homepage.js (exports Home)
    |   |-- about.js (exports About)
    |   |-- quiz-interests.js (exports Interests page for quiz)
    |   |-- quiz-skills.js (exports Skills page for quiz)
    |   |-- quiz-time.js (exports Time page for quiz)
    |   |-- results.js (exports Results page for quiz)
    |   |-- project.js (stores available community service projects)
    |
    |-- styles
    |   |-- styles.css
    |
    |-- App.js
    |-- index.js
 ```
## React Router
This application uses the BrowseRouter.
 ```
 import 
  BrowserRouter as Router from "react-router-dom";
 ```
Navbar is called in all routes, where are other components are called selectively.  ```/home ``` and  ```/about ``` simply load components while quiz pages call additional functions to store the user's answers. This is described in the next section.
  ```
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
```
