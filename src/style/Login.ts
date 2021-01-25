import styled, { StyledComponent } from 'styled-components';



export const Loading = styled.div`

    border: 16px solid #fff;
    border-radius: 50%;
    border-top: 16px solid #cccccc61;
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite; 
    animation: spin 2s linear infinite;


    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }


`

export const Container = styled.div`

  width:600px;
  margin:auto;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  animation: 0.5s alteraoEixo;



  @keyframes alteraoEixo {
    0% { transform: translateX(-100px); }
    100% { transform: translateX(0px); }
    }


`
interface propsHeig {
  size: number;
  height: number
}

export const Card = styled.div<propsHeig>`


  width:${propsHeig => propsHeig.height ? propsHeig.height + 'px' : '200px' };
  height:${propsHeig => propsHeig.size ? propsHeig.size + 'px' : '300px' };
  border-radius:10px;
  margin:10px;
  
  text-align:center;
  
  img {
    width:100%;
    height:100%;
    border-radius:10px;
  }
  
  h1{
 
    margin-bottom:10px;
}


`
export const CardLinks = styled.div`
  margin: auto;
  width:600px;
  margin-bottom:10px;
  margin-top:60px;


  a{
    padding:10px;
    text-decoration:none;
    background-color:#cccccc61;
    color:black;
    font-size:17px;
    font-family:'Courier New', Courier, monospace;
    margin:10px;
    border-radius:5px;
  }

`


export const ContainerProdutos = styled.div`

  margin-top:20px;

  display:grid;
  grid-template-columns:1fr 1fr;



`

export const DivImages = styled.div``

export const DivText = styled.div`

  margin-left:10px;
  display:flex;
  flex-direction:column;
  padding:32px;

  h1{
    font-size:25px;
  }



`

export const Titulo = styled.h1``

export const Price = styled.p`
  margin-top:10px;
  padding:10px;
  max-width:90px;
  border-radius:5px;
  background-color:#65ff65a8;
  font-family:'Courier New', Courier, monospace;

`

export const Description = styled.p`
  margin-top:10px;
  font-weight:530;
  width:300px;
  font-family:'Courier New', Courier, monospace;

`

export const Baixo = styled.footer`
  height:80px;
  color:#ccc;
  text-align:center;
  display:flex;
  text-align:center;
  justify-content:center;
  margin-top:100px;
  font-family:'Courier New', Courier, monospace;

`


interface divFace {
  size: number
}


export const Div  = styled.div<divFace>`

width:300px;
height:${props=> props.size + 'px'};
background-color:red;


`