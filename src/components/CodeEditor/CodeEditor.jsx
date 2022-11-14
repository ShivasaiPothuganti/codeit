import React,{useRef, useState} from 'react';
import Options from '../Options/Options';
import Editor from '../Editor/Editor';
import './CodeEditor.scss'


function CodeEditor(props) {

  const [languageOptions, setlanguageOptions] = useState(
    {
      language: "c++",
      version: "10.2.0",
      mode:"c_cpp"
    }
    
  )
  return (
    <div className='codeeditor' >
      <Options setlanguageOptions={setlanguageOptions} />
      <Editor languageOptions={languageOptions} />
    </div>
  )
}

export default CodeEditor;