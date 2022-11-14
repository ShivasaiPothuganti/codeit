import React,{useCallback,useContext, useEffect, useState,useMemo} from 'react';
import AceEditor from 'react-ace';

import { IOcontext } from '../../pages/Home/Home';

import './Editor.scss';

import axios from '../../Utilities/axios.js'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-javascript";


function Editor({languageOptions}) {

  const {input,setOutput,filename,savedFile} = useContext(IOcontext);
  //console.log(fileName);
  const editor_styles = {
    height:'65vh',
    width:'90%',
    borderRadius:'10px'
  }
  const [code,setCode] = useState('');

  useEffect(()=>{
    if(localStorage.getItem(savedFile)){
      console.log(localStorage.getItem(savedFile));
      setCode(localStorage.getItem(savedFile));
    }
  },[])

    const handleChange = (e)=>{
        setCode(e);
    }
    useCallback(handleChange,[code]);
    function runcode(){
      const post_data = {
        language:languageOptions.language,
        version:languageOptions.version,
        files:[
          {
            content:code
          }
        ],
        stdin:input
      }
      axios.post('/execute',post_data)
      .then((data)=>{
        setOutput(data.data.run.output)
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  return (
    <div className='editor' >
        <AceEditor
            style={editor_styles}
            value={code}
            mode={languageOptions.mode}
            theme="dracula"
            onChange={handleChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: false }}
            setOptions={{
              showPrintMargin:false,
              fontSize:"19px",
              enableBasicAutocompletion: true,
              enableSnippets: true,
              enableLiveAutocompletion: false,
              showLineNumbers: true,
              tabSize: 4,
          }}
        />
        <div className="runbar">
          <button onClick={runcode} >run</button>
          <button  onClick={()=>{
            if(filename.trim()===''){
              alert("enter a filename");
            }
            else{
              if(localStorage.getItem(filename)){
                let choice = window.confirm("A file with this file name already exists do you want to overwrite");
                if(choice){
                  localStorage.setItem(filename, code,(err)=>{
                    if(!err){
                      alert("save successfull");
                    }
                  });
                }
              }
              else{
                localStorage.setItem(filename, code,(err)=>{
                  if(!err){
                    alert("save successfull");
                  }
                });
              }
            }
          }} >save</button>
        </div>
    </div>
  )
}

export default Editor