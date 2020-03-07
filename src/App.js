import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import People from './components/People';
import Planets from './components/Planets';
import Home from './components/Home';
import Films from './components/Films';

function App() {
  const [people, setPeople]= useState([]);
  const [planets, setPlanets]= useState([]);
  const [films, setFilms]= useState([]);
  const [loading, setLoading]= useState(true);
  
  useEffect (() => {
  
    async function fetchPeople(){
      let res = await fetch('https://swapi.co/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      //setLoading(false);
    }
  
    async function fetchPlanets() {
      let res = await fetch('https://swapi.co/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      //setLoading(false);
    }
    async function fetchFilms() {
      let res = await fetch('https://swapi.co/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
      //setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchFilms();
    setLoading(false);
  }, [])
  
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted> Hello </Loader> 
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'> <Home /> </Route>
              <Route exact path='/people'> <People data={ people }/> </Route>
              <Route exact path='/planets'> <Planets data={ planets } /> </Route>
              <Route exact path='/films'> <Films data={ films } /> </Route>
            </Switch>
          )}
        </Container>
     </Router>
    </>
  )
}

export default App;
