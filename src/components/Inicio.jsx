import React from 'react';
import Carousel from './Carousel';
import './Inicio.css';

function Home() {
  return (
    <main className="home">
      <div className="container">
        <Carousel />

        <div className="home-container">
          {/* 🔹 Título principal */}
          <h2 className="home-title">Bienvenido a Nuestra Iglesia</h2>

          {/* 🔹 Frase de bienvenida */}
          <p className="home-subtitle">
            Un lugar de fe, esperanza y comunidad. Nos alegra recibirte.
          </p>

          {/* 🔹 Sección Visión y Misión */}
          <div className="vision-mision">
            <div className="card">
              <h3 className="card-title">Visión</h3>
              <p className="card-text">
                Ser una comunidad donde cada familia redescubra la presencia viva de Dios en su hogar, reconociéndolo como el fundamento que sostiene, la luz que orienta y la gracia que renueva. Aspiramos a un mundo donde los hogares vuelvan a ser espacios de fe, paz y encuentro, donde Dios no sea un visitante olvidado, sino el corazón que une, fortalece y transforma cada relación familiar.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Misión</h3>
              <p className="card-text">
                Proclamar el amor de Dios y acompañar a las familias en el camino de regresar a Él como fuente de vida y unidad. Nos comprometemos a formar, acoger y servir con entrega, guiando a cada hogar a reconstruir su fe mediante la oración, la enseñanza y la vivencia comunitaria. Queremos despertar en cada familia la convicción de que Dios es su mayor tesoro, la roca que sostiene sus desafíos, la esperanza que sana sus heridas y la luz que inspira una vida plena y en comunión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
