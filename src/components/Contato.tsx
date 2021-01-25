import React from 'react';
import Head from './Head';
import {Link, NavLink} from 'react-router-dom';
import {
    Loading,
    Container,
    Card,
    CardLinks,
    Div
  
  
  
  } from '../style/Login';

import img from '../../../my-app/src/assets/contato.jpg'
import Footer from './Footer';

const  Contato : React.FunctionComponent= ()=> {
  
  



  return (
    <>
    <Head title='Contato' />
    <CardLinks>
      <NavLink to='/'>Produtos</NavLink>
      <NavLink to='/contato'>Contato</NavLink>


    </CardLinks>
  
    <Container>
        <Card height={400} size={600}>
        <img src={img}  />
        </Card>
    </Container>

   
    <Footer />
    </>
  );
}

export default Contato;
