import React, { useCallback,useContext, useEffect,useMemo,useRef } from 'react'
import { IOcontext } from '../../pages/Home/Home'
import './Fields.scss'
function Fields({heading,placeholder,input}) {
  const {setInput,output} = useContext(IOcontext);
  return (
    <div className='display_field' >
        <h1>{heading}</h1>
        <textarea 
        placeholder={placeholder}
         onChange={(e)=>{
          if(input){
            setInput(e.target.value)
          }
        }} 
        value={input===true? null:output}
        name="" id="" cols="30" rows="10"></textarea>
    </div>
  )
}

export default Fields;