import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchData} from '../../Data/fetchData';
import { Products } from '../../Products/Products';
import { NavBar } from '../Header/NavBar';
import { Home } from '../Header/Home';
import { ShopCategory } from './ShopCategory';
import { Cart } from './Cart';
import { cleanBanners } from '../../Data/cleanBanners';
import { Hero } from '../Banners/Hero';
import { ShopContext } from '../../context/ShopContext';
import { Header } from '../Header/Header';
import { LoginSignUp } from './LoginSignUp';

export const Layout = () => {
    const {products} = useContext(ShopContext)
    const [banners, setBanners] = useState([])
    const getBanner = async () => {
        try {
          const data = await fetchData("storeBanner", cleanBanners);
          setBanners(data);
        } catch (error) {
          console.error("Error fetching banners:", error);
        }
    };
    useEffect(()=>{
        getBanner()
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
                    <Header/>
                    <Hero banners={banners[1]}/>
                </header>
                <main className="main-container">
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/men" element={<ShopCategory section="men"/>}></Route>
                        <Route path="/women" element={<ShopCategory section="women"/>} ></Route>
                        <Route path="/electronics" element={<ShopCategory section="music"/>}></Route>
                        <Route path="product" element={<Products/>}>
                            <Route path=":productId" element={<Products/>}></Route>
                        </Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                        <Route path="/loginsignup" element={<LoginSignUp/>}></Route>
                    </Routes>
                    <section>
                    </section>
                </main>
                <footer>
                    <Hero banners={banners[0]}/>
                </footer>
            </div>
        </BrowserRouter>
    )
}
