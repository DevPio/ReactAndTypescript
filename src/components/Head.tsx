import React from 'react';

import {head} from '../interfaces/head';

const  Head : React.FunctionComponent<head> = (props)=> {
    let {
        title

    } = props

    React.useEffect(()=>{
    
        document.title = 'Ranek |' + title



    },[props])



   
  return ( 
    <>
    
    </>
  );
}

export default Head;
