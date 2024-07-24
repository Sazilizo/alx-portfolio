import {client } from "../client";
import { cleanProducts } from "./cleanProducts";

export const fetchData =async (url) =>{
    try {
        const response = await client.getEntries({ content_type: url });
        const data = response.items;
        const cleanData = cleanProducts(data);
        console.log(cleanData)
        return cleanData;
    } catch (error) {
        console.error(error);
        return [];
    }
}

