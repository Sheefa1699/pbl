import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Products from './component/Products';


function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
          <Route path="/" component={Home} />
          <Route path='/products' component={Products} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
