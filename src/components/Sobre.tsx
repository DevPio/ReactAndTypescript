import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import {parans} from '../../../my-app/src/interfaces/parans';
import {BrowserRouter,Routes as Rota, Route, Link} from 'react-router-dom';
import Head from './Head';
import {
  Loading,
  Container,
  Card,
  CardLinks



} from '../style/Login';
const  Sobre : React.FunctionComponent= ()=> {
   const {id} =  useParams() 
    const location = useLocation()

    const url = new URLSearchParams(location.search)

    console.log(url.get('musica'))
  
  return (
    <>
    

    </>
  );
}

export default Sobre;
