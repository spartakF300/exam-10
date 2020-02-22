import React from 'react';

import './App.css';
import {Container} from "reactstrap";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import PageNews from "./containers/PageNews/PageNews";
import AddNews from "./containers/AddNews";
import DetailsNews from "./containers/DetailsNews/DetailsNews";

function App() {
  return (
    <div className="App">
      <Container>
       <Header/>
        <Switch>
          <Route path="/" exact component={PageNews} />
          <Route path="/add" exact component={AddNews} />
          <Route path="/news/:id" exact component={DetailsNews} />

        </Switch>
      </Container>
    </div>
  );
}

export default App;
