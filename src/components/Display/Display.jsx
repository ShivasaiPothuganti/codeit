import React,{useContext} from 'react'
import Fields from '../Fields/Fields';
import { IOcontext } from '../../pages/Home/Home';
import './Display.scss';
function Display() {
  const {setFilename} = useContext(IOcontext);
  return (
    <div className='display' >
      <Fields placeholder={'enter input here'} input={true} heading={"input"} />
      <Fields placeholder={'see output here'} heading={"output"} />
      <input onChange={(e)=>{
        
        setFilename(e.target.value);

      }} type="text" placeholder='filename' />
    </div>
  )
}

export default Display