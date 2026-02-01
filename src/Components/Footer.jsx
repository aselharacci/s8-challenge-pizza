// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // Footer için ayrı CSS dosyasını import ediyoruz

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-column">
                    <img src="/images/iteration-1-images/logo.svg" alt="Teknoloji Yemekler Logo" className="footer-logo" />
                    <h3>Teknoloji Yemekler</h3>
                    <address>
                        <p>341 Londonderry Road, New York</p>
                        <p>Istanbul Türkiye</p>
                    </address>
                    <p>aciktim@teknolojikyemekler.com</p>
                    <p>+90 216 123 45 67</p>

                </div>

                <div className="footer-column">
                    <h4>Sıccacık Menüler</h4>
                    <ul>
                        <li>Terminal Pizza</li>
                        <li>5 Kişilik Hackathlon Pizza</li>
                        <li>useEffect Tavuklu Pizza</li>
                        <li>Beyaz Console Frosty</li>
                        <li>Testler Geçti Mutlu Burger</li>
                        <li>Positon Absolute Acı Burger</li>
                    </ul>
                </div>

                <div className="footer-column instagram-feed">
                    <h4>Instagram</h4>
                    <div className="instagram-grid">
                        <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Instagram Post 1" />
                        <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Instagram Post 2" />
                        <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Instagram Post 3" />
                        <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Instagram Post 4" />
                        <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Instagram Post 5" />
                        <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Instagram Post 6" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Teknoloji Yemekleri</p>
            </div>
        </footer>
    );
}