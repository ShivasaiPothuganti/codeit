import React,{ useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import Display from '../../components/Display/Display.jsx';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import './Home.scss';

export const IOcontext = React.createContext();


function Home() {
    const {savedFile} = useParams();
    const [input,setInput] = useState('');
    const [output,setOutput] = useState('')
    const [filename,setFilename] = useState('')

  return (
    <div className='home' >
        <IOcontext.Provider value={{savedFile,input,setInput,output,setOutput,filename,setFilename}} >
        <div className="home_left">
        <CodeEditor/>
        </div>
        <div className="home_right">
        <Display />
        </div>
        </IOcontext.Provider>
    </div>
  )
}

export default Home;