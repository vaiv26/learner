import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Main from "./Main";
import BlogPost from "./BlogPost";
import Navigation from "./Navigation"
import Header from "./Header";
import Footer from "./Footer";
import Main1 from "./Main1";
import BlogPost1 from "./BlogPost1";
import BlogPost2 from "./BlogPost2";


function App() {

  return (
      <Router>
      <div >
      <Header/>
      <div className='Conatainer'>
      <Navigation/>
      <Main/>
      <Switch>
          <Route path="/Main1" component={Main1}/>
          <Route path="/Blogpost" component={BlogPost}/>
          <Route path="/BlogPost1" component={BlogPost1}/>
          <Route path="/BlogPost2" component={BlogPost2}/>
      </Switch>
      </div>
          <Footer/>
      </div>
      </Router>
  );
}

export default App;
