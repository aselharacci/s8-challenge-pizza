import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Order.css";

function Order() {
  const [boyut, setBoyut] = useState("Orta");
  const [hamur, setHamur] = useState("Normal");
  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);
  const [name, setName] = useState("");
  const [not, setNot] = useState("");
  const [adet, setAdet] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const malzemeler = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Jalepeno",
    "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"
  ];

  function handleHamurDegisimi(event) {
    setHamur(event.target.value);
    setError(null);
  }

  function handleBoyutDegisimi(event) {
    setBoyut(event.target.value);
    setError(null);
  }

  function handleIsimDegisimi(event) {
    setName(event.target.value);
    setError(null);
  }

  function handleNotDegisimi(event) {
    setNot(event.target.value);
    setError(null);
  }

  function handleMalzemeDegisimi(event) {
    const secilenMalzeme = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (secilenMalzemeler.length < 10) {
        setSecilenMalzemeler([...secilenMalzemeler, secilenMalzeme]);
      }
    } else {
      setSecilenMalzemeler(secilenMalzemeler.filter(function (malzeme) {
        return malzeme !== secilenMalzeme;
      }));
    }
    setError(null);
  }

  function adetiArtir() {
    setAdet(adet + 1);
    setError(null);
  }

  function adetiAzalt() {
    if (adet > 1) {
      setAdet(adet - 1);
    }
    setError(null);
  }

  const ekMalzemeFiyati = secilenMalzemeler.length * 5;
  let boyutFiyati = 0;
  if (boyut === "Küçük") {
    boyutFiyati = 75.50;
  } else if (boyut === "Orta") {
    boyutFiyati = 85.50;
  } else {
    boyutFiyati = 105.50;
  }

  const birimPizzaFiyati = boyutFiyati + ekMalzemeFiyati;
  const siparisToplamFiyati = birimPizzaFiyati * adet;

  async function handleSubmit(event) {
    event.preventDefault();

    if (name.length < 3) {
      setError("İsim alanı en az 3 karakter olmalıdır.");
      return;
    }
    setError(null);

    setLoading(true);
    setError(null);

    const siparisBilgileri = {
      isim: name,
      boyut: boyut,
      hamur: hamur,
      malzemeler: secilenMalzemeler,
      adet: adet,
      not: not,
      toplam: siparisToplamFiyati
    };

    try {
      // Axios isteğine 'headers' (başlıklar) objesi ekliyoruz.
      // x-api-key başlığını buraya ekledik.
      const response = await axios.post("https://reqres.in/api/pizza", siparisBilgileri, {
        headers: {
          'x-api-key': 'reqres-free-v1' // API anahtarınızı buraya ekledik
        }
      });

      if (response.status >= 200 && response.status < 300) {
        history.push({
          pathname: "/success",
          state: { ...siparisBilgileri }
        });
      } else {
        setError(`Sipariş gönderilirken bir sorun oluştu. Durum Kodu: ${response.status}`);
        console.error("API'den beklenen başarı kodu gelmedi:", response);
      }
    } catch (apiError) {
      if (apiError.response) {
        const status = apiError.response.status;
        const data = apiError.response.data;

        if (status === 400) {
          setError(`Hatalı İstek: Lütfen bilgileri kontrol edin. Detay: ${data.message || JSON.stringify(data)}`);
        } else if (status === 401) {
          // Özellikle 401 hatası için daha spesifik mesaj
          setError("Yetkilendirme Hatası: API erişimi için geçerli bir anahtar gereklidir veya anahtar yanlış.");
        } else if (status === 404) {
          setError("API adresi bulunamadı. Lütfen URL'yi kontrol edin.");
        } else if (status === 500) {
          setError("Sunucu Hatası: Lütfen daha sonra tekrar deneyin.");
        } else {
          setError(`Bir hata oluştu (${status}): ${data.message || apiError.message}`);
        }
        console.error("API Yanıt Hatası:", apiError.response);
      } else if (apiError.request) {
        setError("Sunucuya ulaşılamadı. Lütfen internet bağlantınızı kontrol edin veya daha sonra tekrar deneyin.");
        console.error("Ağ Hatası (Yanıt Yok):", apiError.request);
      } else {
        setError("Sipariş isteği oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
        console.error("İstek Yapılandırma Hatası:", apiError.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="order-page">
      <header className="order-banner">
        <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="order-logo-img" />
      </header>

      {/* Pizza görseli */}
      <div className="pizza-image">
        <img
          src="/images/iteration-2-images/pictures/form-banner.png"
          alt="Pizza"
        />
      </div>

      <main className="pizza-content-area">
        <div className="pizza-header">

          <h3>Position Absolute Acı Pizza</h3>
          <div className="price-rating">
            <span className="price">{birimPizzaFiyati.toFixed(2)} TL</span>
            <div className="rating-wrapper">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <p className="description">
            Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemeler ile kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
          </p>
        </div>

        <form id="pizza-form" onSubmit={handleSubmit}>
          <div className="order-form-container">
            <div className="selection-group">
              <div className="boyut-secimi">
                <h4>Boyut Seç <span className="required">*</span></h4>
                {["Küçük", "Orta", "Büyük"].map(function (b) {
                  return (
                    <label key={b}>
                      <input
                        type="radio"
                        name="boyut"
                        value={b}
                        checked={boyut === b}
                        onChange={handleBoyutDegisimi}
                      />
                      {b}
                    </label>
                  );
                })}
              </div>
              <div className="hamur-secimi">
                <h4>Hamur Seç <span className="required">*</span></h4>
                <select id="hamurSecimi" value={hamur} onChange={handleHamurDegisimi}>
                  <option value="" disabled>-- Hamur Kalınlığı --</option>
                  <option value="İnce">İnce Hamur</option>
                  <option value="Normal">Normal Hamur</option>
                  <option value="Kalın">Kalın Hamur</option>
                </select>
              </div>
            </div>

            <h4>Ek Malzemeler</h4>
            <p>En fazla 10 malzeme seçebilirsiniz. Her biri 5₺</p>
            <div className="malzeme-listesi">
              {malzemeler.map(function (malzeme) {
                return (
                  <label key={malzeme} className="malzeme-label">
                    <input
                      type="checkbox"
                      value={malzeme}
                      checked={secilenMalzemeler.includes(malzeme)}
                      onChange={handleMalzemeDegisimi}
                      disabled={!secilenMalzemeler.includes(malzeme) && secilenMalzemeler.length >= 10}
                    />
                    <span>{malzeme}</span>
                  </label>
                );
              })}
            </div>

            <h4>İsminizi Girin <span className="required">*</span></h4>
            <input
              type="text"
              value={name}
              onChange={handleIsimDegisimi}
              placeholder="En az 3 karakter giriniz"
              className="name-input"
            />

            <h4>Sipariş Notu</h4>
            <textarea
              value={not}
              onChange={handleNotDegisimi}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              rows="3"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="final-actions-bar">
            <div className="quantity-box-wrapper">
              <div className="quantity-selector">
                <button type="button" onClick={adetiAzalt} className="quantity-button" disabled={loading}>-</button>
                <span className="quantity-display">{adet}</span>
                <button type="button" onClick={adetiArtir} className="quantity-button" disabled={loading}>+</button>
              </div>
            </div>

            <div className="summary-and-submit-box">
              <div className="price-summary">
                <h4>Sipariş Toplamı</h4>
                <div className="price-details">
                  <p>Seçimler: <span>{(ekMalzemeFiyati * adet).toFixed(2)}₺</span></p>
                  <p className="total-price">Toplam: <span>{siparisToplamFiyati.toFixed(2)}₺</span></p>
                </div>
              </div>
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Sipariş Gönderiliyor..." : "SİPARİŞ VER"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Order;