import React from 'react';
import './Documentacion.css';

export default function Documentacion() {
  return (
    <div className="seccion">
      <h2>Documentación</h2>
      <p>Aquí encontrarás toda la información oficial de nuestra iglesia.</p>

      <ul className="doc-list">
        <li className="doc-item">
          <a href="/docs/Sunat.pdf" download>
           SUNAT "Asociación Sacerdotal Ecumenica Jesucristo Liberador"
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Ruc.pdf" download>
            Ficha RUC:Cumpa Loyaga Luis Ricardo
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/RegistroJuridico.pdf" download>
            Registro de Personas Jurídicas-Libro de Asociaciones
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Dni.pdf" download>
            Presentación de antecedentes de MUÑOZ ROZO DIEGO FERNANDO
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Dioseis.pdf" download>
            Dioseis del Valle de San José de Cúcuta Respuesta al Decreto Patriarcal
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Certificacion.pdf" download>
            Certificación de Luis Ricardo Cumpa Loyaga
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Asociados.pdf" download>
            Inscripción de Asociaciones "Iglesia Asociación Sacerdotal Ecumenica Jesucristo Liberador"
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/27-24.pdf" download>
            Carta al Nuncio Apostólico Febrero 27 del 2024
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/8-25.pdf" download>
            Carta de su Santidad El Papa León XIV Mayo 8 del 2025
          </a>
        </li>
      </ul>
    </div>
  );
}
