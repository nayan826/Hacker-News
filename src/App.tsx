import React from 'react';
import Homescreen from './components/Homescreen';
import Storydetail from './components/Storydetail';
import {
  Route,
  withRouter,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-full items-center text-white bg-gradient-to-br from-gray-600">
      <div className="font-bold m-14">Hacker News</div>
      <Switch>
        <Route exact path ="/" component= {Homescreen}/>
        <Route exact path ="/details" component= {Storydetail}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
