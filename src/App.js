
import { Link } from 'react-router-dom';
import     Navbar from './components/Navbar'
import './App.css'
import ManProducts from './components/ManProducts'
import WomanProducts from './components/WomanProducts'
import {Route} from 'react-router-dom'
import Registration from './components/registration/Registration'
import Login from './components/login/Login'



function App() {
  return (
    <div >
      <Navbar/>
      <Route path={'/woman'}><WomanProducts/></Route>
      <Route path={'/man'}><ManProducts/></Route>

      <Route path={'/registration'}><Registration/></Route>


      <Route path={'/login'}><Login/></Route>
      
     


      
      
      
    </div>
  );
}

export default App;
