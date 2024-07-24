import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchData} from '../../Data/fetchData';
import { Products } from '../../Products/Product';
import { NavBar } from '../Header/NavBar';
import { Home } from '../Header/Home';
import { ShopCategory } from './ShopCategory';
import { Cart } from './Cart';

export const Layout = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const getProducts = async()=>{
        const data = fetchData("product")
        .then(data=> setProducts(data))
        return data
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <BrowserRouter>
        <div className="Layout">
            <Helmet>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Swipe a'loot</title>
            </Helmet>
            <header>
                <NavBar/>
            </header>
            <main className="main-container">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/men" element={<ShopCategory category="men"/>}></Route>
                    <Route path="/women" element={<ShopCategory category="women"/>} ></Route>
                    <Route path="/electronics" element={<ShopCategory category="electronics"/>}></Route>
                    <Route path="product" element={<Products/>}>
                        <Route path=":id" element={<Products/>}></Route>
                    </Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/login" element={<loginSignUp/>}></Route>
                </Routes>
                <section>
                </section>
            </main>
        </div>
        <footer>
            Footer
        </footer>
    </BrowserRouter>
  )
}
