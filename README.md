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
 import BrowserRouter as Router from "react-router-dom";
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
## The Quiz
The quiz proceeds in three sections:  
```quiz-interests.js``` ➡ ```quiz-skills.js``` ➡ ```quiz-time.js```  
  
App.js defines fucntions to add and remove each category on each page to filters. These filters are stored in an array and finally used to filter the projects contained in projects.js to display results. 

For example the followung functions are defined for the interests page:

```
  const [filters, setFilters] = useState({ 'interests': [], 'skills': [], 'time': "" })

  const addInterest = (interest) => {
    filters['interests'].push(interest)
    setFilters({ ...filters })
  }

  const removeInterest = (interest) => {
    filters['interests'] = filters['interests'].filter((it) => it !== interest)
    setFilters({ ...filters })
  }
  ```  
 
These fucntions are called in quiz-interests.js when the corresponding button is clicked. onClick() toggles the interest's use state between active or inactive and calls addInterest/ removeInterest respectively. 
 
 export default function Interests(props) {
  ```  
  const [isActive, setIsActive] = useState({
    "Art": "",
    "Education": "",
    "Creative_Writing": "",
    "Covid_Relief": "",
    "News": "",
    "Health": "",
    "Music": "",
    "Environment": "",
  })

  const handleWidgetClick = (val) => {
    
    const valActive = isActive[val] === "" ? "is-active" : ""
    isActive[val] = valActive
    if (valActive === "") {
      props.remove(val)
    } else {
      props.add(val)
    }
    setIsActive({ ...isActive })
  }
    ```  

### Quiz styles
