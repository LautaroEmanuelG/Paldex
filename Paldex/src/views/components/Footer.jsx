import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contacto</h3>
        <a href="https://github.com/LautaroEmanuelG" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lautaro-gonzalez-93bb0728a/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="" target="_blank">
          Portfolio
        </a>
      </div>
      <div className="footer-column">
        <h3>Derechos de autor</h3>
        <p>
          &copy; 2024 LautaroEmanuelG <br />
          Todos los derechos reservados.
        </p>
      </div>
      <div className="footer-column">
        <p>Data of @ChicoEevee and @mlg404 on GitHub</p>
      </div>
    </footer>
  );
};
