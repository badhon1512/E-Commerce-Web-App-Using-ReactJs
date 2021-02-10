
import { Link } from 'react-router-dom';
import     Navbar from './components/Navbar'
import './App.css'
import ManProducts from './components/ManProducts'
import WomanProducts from './components/WomanProducts'
import {Route} from 'react-router-dom'
import Registration from './components/registration/Registration'



function App() {
  return (
    <div >
      {/*<Navbar/>
      <Route path={'/woman'}><WomanProducts/></Route>
<Route path={'/man'}><ManProducts/></Route>*/
      }
      <Registration/>


      
      
      
    </div>
  );
}

export default App;
