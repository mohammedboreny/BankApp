import './App.css';
import Main from './Home/Main';
import {
 
  Routes,
  Route

} from 'react-router-dom';
import Footer from './Home/Footer';
import Header from './Home/Header';
function App() {
  return (
    <div>
      <header >
  <Header/>
        <Routes>
          <Route exact path='/' element={< Main />}></Route>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
