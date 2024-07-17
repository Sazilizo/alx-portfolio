
import {client} from "../client"
import { cleanUpData } from './cleanBannerData'

export const fetchBanners = async (url) =>{
    try{
        const response = await client.getEntries({content_type:url})
        const data = response.items
        const cleanedData = await cleanUpData(data);
        return cleanedData
    }catch(error){
        console.log(error)
        return [];
    }
}

