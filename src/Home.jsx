import React from "react";

import { useHistory } from "react-router-dom";
import Footer from './Components/Footer';
import './home.css';

export default function Home() {
    const history = useHistory();


    const handleOrderClick = () => {
        history.push("/order");
    };

    return (
        <div className="home-container">
            {/* Üst Banner Alanı */}
            <header className="hero-banner">
                {/* Logo ve Slogan */}
                <div className="top-content">
                    <img src="/images/iteration-1-images/logo.svg" alt="Teknoloji Yemekler Logo" className="header-logo" />

                    <p className="slogan-top">fırsatı kaçırma</p>
                    <p className="slogan-main">KOD ACIKTIRIR <br /> PİZZA, DOYURUR</p>
                    {/* Acıktım Butonu */}
                    <button className="order-button" onClick={handleOrderClick}>ACIKTIM</button>
                </div>

            </header>

            {/* Kategori Navigasyonu */}
            <nav className="category-nav">
                <a href="#yemek-yeni" className="category-item">
                    <img src="/images/iteration-2-images/icons/1.svg" alt="Yeni Yemekler" />
                    <span>YENİ!Kore</span>
                </a>
                <a href="#pizza" className="category-item">
                    <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
                    <span>Pizza</span>
                </a>
                <a href="#burger" className="category-item">
                    <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
                    <span>Burger</span>
                </a>
                <a href="#kizartmalar" className="category-item">
                    <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
                    <span>Kızartmalar</span>
                </a>
                <a href="#fast-food" className="category-item">
                    <img src="/images/iteration-2-images/icons/5.svg" alt="Fast Food" />
                    <span>Fast Food</span>
                </a>
                <a href="#icecekler" className="category-item">
                    <img src="/images/iteration-2-images/icons/6.svg" alt="İçecekler" />
                    <span>Gazlı İçecek</span>
                </a>
            </nav>

            {/* Özel Lezzetler ve Promosyon Alanı */}
            <section className="special-offers">
                <div className="offer-card large-card">
                    <img src="/images/iteration-2-images/cta/kart-1.png" alt="Özel Lezzetus Pizza" />
                    <div className="card-content">
                        <h2>Özel Lezzetus</h2>
                        <p>Position:Absolute Acı Burger</p>
                        <button className="card-button">SİPARİŞ VER</button>
                    </div>
                </div>
                <div className="right-offers">
                    <div className="offer-card medium-card">
                        <img src="/images/iteration-2-images/cta/kart-2.png" alt="Hackathon Burger" />
                        <div className="card-content">
                            <h3>Hackathon <br /> Burger Menü</h3>
                            <button className="card-button">SİPARİŞ VER</button>
                        </div>
                    </div>
                    <div className="offer-card small-card">
                        <img src="/images/iteration-2-images/cta/kart-3.png" alt="Çooook Hızlı Kurye" />
                        <div className="card-content">
                            <h3>
                                <span className="red-text">Çooook</span> hızlı <br /> npm gibi kurye
                            </h3>
                            <button className="card-button">SİPARİŞ VER</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* En Çok Satanlar Bölümü */}
            <section className="best-sellers">
                <h2 className="section-title">en çok paketlenen menüler</h2>
                <h2 className="section-title-sub">Acıktıran Kodlara Doyuran Lezzetler</h2>
                <nav className="best-sellers-nav category-nav"> {/* Kategori nav stilini tekrar kullanabiliriz */}
                    <a href="#yemek-yeni" className="category-item">
                        <img src="/images/iteration-2-images/icons/1.svg" alt="Ramen" />
                        <span>Ramen</span>
                    </a>
                    <a href="#pizza" className="category-item">
                        <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
                        <span>Pizza</span>
                    </a>
                    <a href="#burger" className="category-item">
                        <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
                        <span>Burger</span>
                    </a>
                    <a href="#kizartmalar" className="category-item">
                        <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
                        <span>French Fries</span>
                    </a>
                    <a href="#fast-food" className="category-item">
                        <img src="/images/iteration-2-images/icons/5.svg" alt="Fast Food" />
                        <span>Fast Food</span>
                    </a>
                    <a href="#icecekler" className="category-item">
                        <img src="/images/iteration-2-images/icons/6.svg" alt="İçecekler" />
                        <span>Soft Drinks </span>
                    </a>
                </nav>

                <div className="product-list">
                    {/* Ürün Kartı 1 */}
                    <div className="product-card">
                        <img src="/images/iteration-2-images/pictures/terminal.png" alt="Terminal Pizza" />
                        <h3>Terminal Pizza</h3>
                        <div className="product-meta">
                            <span className="product-rating">4.9</span>
                            <span className="product-reviews">(200)</span>
                            <span className="product-price">60₺</span>
                        </div>


                    </div>
                    {/* Ürün Kartı 2 */}
                    <div className="product-card">
                        <img src="/images/iteration-2-images/pictures/absolute.png" alt="Position Absolute Pizza" />
                        <h3>Position Absolute Acı Pizza</h3>
                        <div className="product-meta">
                            <span className="product-rating">4.9</span>
                            <span className="product-reviews">(200)</span>
                            <span className="product-price">85₺</span>
                        </div>


                    </div>
                    {/* Ürün Kartı 3 */}
                    <div className="product-card">
                        <img src="/images/iteration-2-images/pictures/tavuklu.png" alt="UseEffect Tavuklu Burger" />
                        <h3>UseEffect Tavuklu Burger</h3>
                        <div className="product-meta">
                            <span className="product-rating">4.9</span>
                            <span className="product-reviews">(200)</span>
                            <span className="product-price">75₺</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Alanı - Buraya yeni Footer bileşenini ekliyoruz */}
            <Footer /> {/* <<< Bu satırı ekledik */}
        </div>
    );
}