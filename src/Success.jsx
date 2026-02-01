import { useLocation } from "react-router-dom";
import React from 'react'; // React'ı da import ettiğinden emin olalım
import './Success.css'; // Yeni CSS dosyamızı import ediyoruz

export default function Success() {
  const location = useLocation();
  // location.state'in null veya undefined olma durumuna karşı koruma ekledik
  const { isim, boyut, hamur, malzemeler, adet, not } = location.state || {};

  return (
    // Ana div'e yeni bir sınıf ekledik
    <div className="success-page-container">
      {/* 2) En üstte logo olacak */}
      <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="success-logo"/>

      {/* 1) Tüm yazılar ortalı olacak */}
      <div className="success-content-wrapper">
        <h1>TEBRİKLER {isim || "Değerli Müşterimiz"}, SİPARİŞİNİZ ALINDI!</h1>
        
        {/* 3) Sipariş özeti bir kutuda yazacak */}
        <div className="order-summary-box">
          <h3>Sipariş Özeti</h3>
          <p>Boyut: <strong>{boyut || "Belirtilmedi"}</strong></p>
          <p>Hamur: <strong>{hamur || "Belirtilmedi"}</strong></p>
          <p>Ek Malzemeler: <strong>{(malzemeler && malzemeler.length > 0) ? malzemeler.join(", ") : "Yok"}</strong></p>
          <p>Adet: <strong>{adet || 0}</strong></p>
          <p>Not: <strong>{not || "Yok"}</strong></p>
        </div>
      </div>
    </div>   
  );
}