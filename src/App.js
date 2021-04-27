import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
  <Router>
    <NavBar />
    <Footer />
    <Main />
  </Router>
  )
}

export default App;
