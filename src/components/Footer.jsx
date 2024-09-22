import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Prem ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
