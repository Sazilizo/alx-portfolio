import {client} from "../client"
import { cleanProductData } from "./cleanProductData"

export const fetchProducts = async (url) =>{
    try{
        const response = await client.getEntries({content_type:url})
        const data = response.items
        const cleanedData = await cleanProductData(data);
        return cleanedData
    }catch(error){
        console.log(error)
        return [];
    }
}