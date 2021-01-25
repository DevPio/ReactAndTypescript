import React from 'react';

import {Link, useNavigate as Navigate,NavLink} from 'react-router-dom';
import Head from './Head';
import {getProduct} from '../../src/services/apiProduto';

import {
  Loading,
  Container,
  Card,
  CardLinks



} from '../style/Login';
import Footer from './Footer';





const  Login : React.FunctionComponent= ()=> {

  const [produtos, setprodutos] = React.useState([])

    const navigate = Navigate()

    React.useEffect(()=>{
      getProduct('https://ranekapi.origamid.dev/json/api/produto')
      .then(response=>setprodutos(response))

      

    },[])
   
  return ( 
    <>

    <CardLinks>
      <NavLink activeClassName={'active'} to='/'>Produtos</NavLink>
      <NavLink to='contato'>Contato</NavLink>


    </CardLinks>
  

    <Head title={'Produtos'} />
    <Container>
    
    {produtos.length > 0 ?
     produtos.map((item,index)=> (
      <Link key={index} to={`produto?product=${item['id']}`}>
        <Card height={200} size={300}>
          <img src={item['fotos'][0]['src']}  />
          
        </Card>
        <h1>{item['nome']}</h1>
      </Link>
     ))
     : <Loading></Loading>
    }



    </Container>


    <Footer/>
    </>
  );
}

export default Login;
