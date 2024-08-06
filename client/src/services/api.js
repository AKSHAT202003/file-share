import axios from 'axios';


const API_URL='http://localhost:8000';


export const uploadfile=async(data)=>{
    try{
        let response=await axios.post(`${API_URL}/upload`,data);
        return response.data;
    }catch(error){
        console.error("error while calling api",error.message);
        
    }
}
