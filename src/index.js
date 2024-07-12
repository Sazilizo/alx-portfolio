//this is for that css and images
require("file-loader?name=[name].[ext]!./index.html")
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App"
import { BrowserRouter } from 'react-router-dom';


const root = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,root
);
