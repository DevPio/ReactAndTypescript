import React from 'react';


import {BrowserRouter,Routes as Rota, Route} from 'react-router-dom'
import Contato from '../components/Contato';

import Login from '../components/Login';
import Product from '../components/Product';



const  Routes : React.FunctionComponent= ()=> {
    
  
  

  return (
    <>
    <BrowserRouter>
    <Rota >
        <Route path={'/'} element={<Login />} />
        <Route path={'contato'} element={<Contato />} />
        <Route path={'produto'}   element={<Product />} />
    </Rota>
    </BrowserRouter>
    </>
  );
}

export default Routes;
