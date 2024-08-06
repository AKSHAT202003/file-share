import logo from './logo.svg';
import './App.css';
import {useRef,useState,useEffect} from 'react';
import { uploadfile } from './services/api';



function App() {

  const [file,setfile]=useState('');
const [result,setResult]=useState('');

  const fileinputref=useRef();

  const logo='https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  
  useEffect(()=>{
    const getimage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response=await uploadfile(data);
        setResult(response.path);
      }
    }
    getimage();
  },[file])


  const uploadclick=()=>{
    fileinputref.current.click();
  }
  
  return (
    <div className="container">
      <img src={logo} alt="banner"/>
      <div className='wrapper'>
        <h1>File sharing!</h1>
        <p>Upload and share the download link of photo</p>
        <button onClick={()=>uploadclick()}>Upload</button>
        <input type="file"
          ref={fileinputref}
          style={{display:'none'}}
          onChange={(e)=>setfile(e.target.files[0])}
        />
        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;