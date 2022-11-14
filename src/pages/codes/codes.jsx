import React, { useEffect,useState } from 'react';
import './codes.scss'

function Codes() {
  const [codes,setCodes] = useState([]);
  useEffect(()=>{
      const values = []
        var keys = Object.keys(localStorage);
        var i = keys.length;

    while ( i-- ) {
        values.push({fileName:keys[i],code:localStorage.getItem(keys[i])}  );
    }
    setCodes(values);
    console.log(codes);
  },[])
  return (
    <div className='codes' >
        {codes.map((code)=>{
          return(
            <div className='codelink' >
              <a href={`http://localhost:3000/${code.fileName}`}>{code.fileName}</a>
            </div>
          )
        })}
    </div>
  )
}

export default Codes;