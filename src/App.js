import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import SignUp from './components/pages/SignUp';
import addCourses from './components/pages/addCourses';
import addVideos from './components/pages/addVideos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/add-courses' component={addCourses} />
          <Route path='/add-videos' component={addVideos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
