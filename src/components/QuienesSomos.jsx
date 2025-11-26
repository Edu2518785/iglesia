import React, { useState } from 'react';
import './QuienesSomos.css';
import Ad0 from '../assets/images/Ad0.jpg';
import q1 from '../assets/images/q1.jpeg';
import q2 from '../assets/images/q2.jpeg';
import q3 from '../assets/images/q3.jpeg';
import q4 from '../assets/images/q4.jpeg';
import q5 from '../assets/images/q5.jpeg';
import q7 from '../assets/images/q7.jpeg';
import q8 from '../assets/images/q8.jpeg';
import q9 from '../assets/images/q9.jpeg';
import q10 from '../assets/images/q10.jpeg';
import q11 from '../assets/images/q11.jpeg';
import q12 from '../assets/images/q12.jpeg';
import q13 from '../assets/images/q13.jpeg';
import q14 from '../assets/images/q14.jpeg';
import q15 from '../assets/images/q15.jpeg';
import q16 from '../assets/images/q16.jpeg';
import q17 from '../assets/images/q17.jpeg';
import q18 from '../assets/images/q18.jpeg';
import q19 from '../assets/images/q19.jpeg';
import q20 from '../assets/images/q20.jpeg';
import q21 from '../assets/images/q21.jpeg';
import q22 from '../assets/images/q22.jpeg';
import q23 from '../assets/images/q23.jpeg';
import q24 from '../assets/images/q24.jpeg';
import q25 from '../assets/images/q25.jpeg';
import q26 from '../assets/images/q26.jpeg';
import AmadorMendoza from '../assets/images/AmadorMendoza.png';
import MonseñorRicardo from '../assets/images/MonseñorRicardo.jpg';
import MonseñorGuillermo from '../assets/images/MonseñorGuillermo.jpg';

export default function QuienesSomos() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  const abrirImagen = (src) => setImagenAmpliada(src);
  const cerrarImagen = () => setImagenAmpliada(null);

  return (
    <main className="qs-container">
      {/* 📸 Sección principal gráfica */}
      <section className="qs-grafico">
        <div className="qs-grafico-content">
          <h2>Somos una Luz que transforma</h2>
          <p>
            Una comunidad que acompaña, guía y comparte la fe, llevando esperanza y amor a cada familia que encuentra en el camino.
          </p>
          <div className="qs-grafico-fotos">
            {[Ad0, q1, q2, q3, q4, q5, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26].map((img, i) => (
              <div
                key={i}
                className="foto-placeholder"
                onClick={() => abrirImagen(img)}
              >
                <img src={img} alt={`Foto ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 👤 Liderazgo */}
      <section className="qs-liderazgo">
        <h2>
  Integrantes de nuestra comunidad{" "}
  <span className="titulo-especial">
    "IGLESIA ASOCIACION SACERDOTA ECUMENICA JESUCRISTO IBEADOR INCARDINADA A LA IGLESIA CATOLICA APOSTOLICA NACIONAL EN COBIA Y EN PERU"
  </span>
</h2>
        <div className="lideres">
          <div className="lider">
            <div className="lider-desc">
              <h3>Monseñor Guillermo Pacheco</h3>
              <p>Patriarca y primado representante en Colombia con verdadera sucesion Apostolica</p>
            </div>
            <div className="lider-foto">
              <img src={MonseñorGuillermo} alt="Pastor Juan Pérez" />
            </div>
          </div>

          <div className="lider reverse">
            <div className="lider-desc">
              <h3>Hermano Amador Mendoza Lizano</h3>
              <p>Primado Representante de Perú</p>
            </div>
            <div className="lider-foto">
              <img src={AmadorMendoza} alt="Pastora María López" />
            </div>
          </div>

          <div className="lider">
            <div className="lider-desc">
              <h3>Monseñor Ricardo Cumpa</h3>
              <p>Líder espiritual representante de Chiclayo con 20 años de trayectoria guiando nuestra comunidad.</p>
            </div>
            <div className="lider-foto">
              <img src={MonseñorRicardo} alt="Hermano Carlos Ruiz" />
            </div>
          </div>
        </div>
      </section>
      <div className="presbiteros-box">
  <h2>Presbíteros por Provincias</h2>

  <ul>
    <li>• Mons. Jair Chumbiauca Rayo — Manchay, Lima</li>
    <li>• Mons. Hoyos Darío Romero Vega — Independencia, Lima</li>
    <li>• Mons. David Quispe Aguirre — Independencia, Lima</li>
    <li>• Mons. Luis Ricardo Cumpa Loyaga — Chiclayo</li>
    <li>• Mons. Oscar José Guerrero Cornejo — Piura</li>
  </ul>

  <h2>Presbíteros en Todo el Perú</h2>

  <ul>
    <li>• Padre Edinson Paomino Saldaña</li>
    <li>• Hoyos Darío Romero Vega</li>
    <li>• Antolin Ramiro Lima Eugenio</li>
    <li>• Cesar Augusto Reto Navarro</li>
    <li>• Victor Raul Salazar Ubillus</li>
    <li>• Manuel Ever Pérez Cubas</li>
    <li>• Carlos Alfredo Martín León</li>
  </ul>
</div>

      {/* 🌕 Modal imagen completa */}
      {imagenAmpliada && (
        <div className="modal-foto" onClick={cerrarImagen}>
          <img src={imagenAmpliada} alt="Vista ampliada" />
        </div>
      )}
    </main>
  );
}
