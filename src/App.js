import { Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'


function App() {
 
  return (
    <>
      <Navbar />
      <div className="app-wraper"> 
        <Route exact path="/" component={Home} />
      </div>
    </>
  );
}


export default App;
