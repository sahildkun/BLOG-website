// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './home';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './Blogdetails';
import NotFound from './Notfound';

function App() {
  
  return (

    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Switch>
        <Route  exact  path="/">
          <Home></Home>
        </Route>
        <Route  path="/create">
          <Create></Create>
        </Route>
        <Route  path="/blogs/:id">
          <BlogDetails></BlogDetails>
        </Route>
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </div>
    </div>
    </Router> 
  );
}

export default App;
