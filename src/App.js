import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer'
import {  Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent'
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
function App() {
  return (
    <div className="App">
      
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<h1><ProductList/></h1>} />
          <Route path='/add-product' element={<AddProduct/>} />
          <Route path='/update/:id' element={<h1><UpdateProduct/></h1>} />
          <Route path='/logout' element={<h1>logout</h1>} />
          <Route path='/profile' element={<h1>Profile Page</h1>} />
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
