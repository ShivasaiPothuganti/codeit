import React from 'react';
import './Options.scss'
/* language imports from ace editor */


function Options({setlanguageOptions}) {
  const changeLanguage = (e)=>{
    switch(e.target.value){
      case 'c++':
        setlanguageOptions({
          language: "c++",
          version: "10.2.0",
          mode:"c_cpp"
        })
        break
      case 'go':
        setlanguageOptions({
          language: "go",
          version: "1.16.2",
          mode:"golang"
        })
        break
      case 'java':
        setlanguageOptions({
          language: "java",
          version: "15.0.2",
          mode:"java"
        })
        break
      case 'javascript':
        setlanguageOptions({
          language: "javascript",
          version: "16.3.0",
          mode:"javascript"
        })
        break
      case "python":
        setlanguageOptions({
          language: "python",
          version: "3.10.0",
          mode:'pyton'
        })
        break
      case "rust":
        setlanguageOptions({
          language: "rust",
          version: "1.56.1",
          mode:'rust'
        })
        break
      default:
        setlanguageOptions({
          language: "python",
          version: "3.10.0",
          mode:'python'
        })
    }
  }
  return (
    <div className='languageoptions' >
        <select onChange={changeLanguage} name="languages" id="language-bar">
            <option value="c++">C++</option>
            <option value="go">Go</option>
            <option value="java">Java</option>
            <option value="javascript">Java script</option>
            <option value="python">Python</option>
            <option value="rust">Rust</option>
        </select>
    </div>
  )
}

export default Options