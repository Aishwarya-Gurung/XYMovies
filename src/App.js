import React from 'react';
import { BrowserRouter, Router,  Route, Switch } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Action from './components/GenerePage/Action';
import Crime from './components/GenerePage/Crime';
import Drama from './components/GenerePage/Drama';
import Thriller from './components/GenerePage/Thriller';
import Watch from './components/Watch';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
        
       <BrowserRouter>
       <Navbar />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Action' component={Action}/>
        <Route path='/Crime' component={Crime}/>
        <Route path='/Drama' component={Drama}/>
        <Route path='/Thriller' component={Thriller}/>
        <Route path='/WatchLater' component={Watch}/>
        </Switch>
        <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
