import {client } from "../client";
import { cleanProducts } from "./cleanProducts";

export const fetchData =async (url, fn) =>{
    try {
        const response = await client.getEntries({ content_type: url });
        const data = response.items;
        const cleanData = await fn(data);
        return cleanData;
    } catch (error) {
        console.error(error);
        return [];
    }
}

