import React from 'react';
import Header from './Components/Header';
import Pop from './Components/Pop'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Header}></Route>
          {/* <Route exact path='/pop' component={Pop}></Route> */}

        </Switch>
      </BrowserRouter>
      {/* <Header/> */}
   
    </div>
  );
}

export default App;
