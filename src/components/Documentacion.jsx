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
           Documento SUNAT de la Iglesia Asociacion Sacerdotal Ecumencia Jesucristo 
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Ruc.pdf" download>
            Ficha RUC:Cumpla Loyaga Luis Rricardo
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/RegistroJuridico.pdf" download>
            Registro de Personas Juridicas Libro de Asociaciones
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Dni.pdf" download>
            Presentacion de antecedentes MUÑOZ ROZO DIEGO FERNANDO
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Dioseis.pdf" download>
            Dioseis del Valle de San José de Cúcuta Respuesta al Decreto Patriarcal
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Certificacion.pdf" download>
            Certificacion del Padre Luis Ricardo Cumpa Loyaga
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/Asociados.pdf" download>
            Inscripcion de Asociaciones Iglesia Asociacion Sacerdotal Ecumenica Jesucristo Liberador
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/27-24.pdf" download>
            Carta de la Diócesis de Barranquilla al Nuncio Apostólico Febrero 27 del 2024
          </a>
        </li>
        <li className="doc-item">
          <a href="/docs/8-25.pdf" download>
            Carta de la Diócesis de Barranquilla al Nuncio Apostólico Mayo 8 del 2025
          </a>
        </li>
      </ul>
    </div>
  );
}
