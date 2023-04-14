import { useContext } from 'react';
import './App.css';
import Home from './ContextAPI/Home';
import Login from './ContextAPI/Login';
import Nav from './ContextAPI/Nav';
import { myContext } from './ContextAPI/Context';
import { Navigate, Route ,Routes} from 'react-router';
import Technologies from './Routing/Technologies';
import Product from './Routing/Product';
import Contact from './Routing/Contact';
import HTML from './Routing/HTML';
import CSS from './Routing/CSS';
import JS from './Routing/JS';
import REACT from './Routing/REACT';
import PageNotFound from './Routing/PageNotFound';



function App() {
  const { isloggedIn } = useContext(myContext)
  return (
    <div className="App">
    {isloggedIn ? <Nav /> : null}
    <Routes>
      <Route path='/' element={ isloggedIn ? <Home/> : <Login />} />
      <Route path='/tech' element={isloggedIn ? <Technologies />: <Navigate to='/'/>}>
        <Route path='' element={<Navigate to='html' />}/>
        <Route path='html' element={<HTML />}/>
        <Route path='css' element={<CSS />}/>
        <Route path='js' element={<JS />}/>
        <Route path='react' element={<REACT />}/>
      </Route>

      {/* <Route path='/html' element={<HTML />}/>  invalid*/} 
      <Route path='/product' element={isloggedIn ? <Product /> : <Navigate to='/'/>} />
      <Route path='/contact' element={isloggedIn ? <Contact /> : <Navigate to='/'/>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </div>
  );
}
export default App;