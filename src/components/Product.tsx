import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Card, 
    Loading,
    ContainerProdutos,
    DivImages,
    DivText,
    Titulo,
    Price,
    Description




} from  '../style/Login';
import {Link} from 'react-router-dom';
import { getProduct } from '../services/apiProduto';
import {CardLinks} from '../style/Login';
import Head from './Head';
import Footer from './Footer';

interface atributes {
    src : string
}

interface ApiOrigamid {
   readonly id: string,
   readonly nome: string;
   readonly preco: string;
   readonly descricao: string;
    fotos: atributes[]


}


const  Product : React.FunctionComponent= ()=> {


    const [product, setProduct] = React.useState<ApiOrigamid>()
    const locationProduct = useLocation()
    const url = new URLSearchParams(locationProduct.search)

    let parans = url.get('product')?.replace(/[-]\d/g,'')
  
    React.useEffect(()=>{
        getProduct(`https://ranekapi.origamid.dev/json/api/produto/${parans}`)
        .then(response=> setProduct(response))
    },[])

    
    console.log(product)
  return (
    <>
    <Head title={`${parans?.charAt(0)?.toUpperCase()}${parans?.substring(1,parans.length)}`} />
    <CardLinks>
      <Link to='/'>Produtos</Link>
      <Link to='/contato'>Contato</Link>
    <ContainerProdutos>
        <DivImages>
      {product ? 
      
        product.fotos.map((item,index)=>(
            <Card key={index} size={400} height={300}>
                <img src={item['src']}  />
            </Card>
        ))

        : <Loading></Loading>
      }
    </DivImages>
    <DivText>
    {product &&
      <>
        <Titulo>{product.nome}</Titulo>
        <Price>{'R$ ' + product.preco}</Price>
        <Description>{product.descricao}</Description>

      </>
      
    }
    </DivText>
    </ContainerProdutos>

    </CardLinks>
    

   
    <Footer />
    </>
  );
}

export default Product;
