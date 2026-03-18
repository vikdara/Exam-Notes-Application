import axios from "axios";
import { serverUrl } from "../App";

export const getcurrentUser = async () =>{
    try {
        const result = await axios.get("http://localhost:8000/api/user/currentuser", {withCredentials : true});
        console.log(result.data);
        
    } catch (error) {
        console.log(error);
    }
}