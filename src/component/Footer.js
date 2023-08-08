import React from "react";

function Footer() {
  return (
    <footer
      className="footer bg-black text-light text-center align-items-end
      d-flex justify-content-center pb-5 fs-5"
    >
      <span
        className="copyright d-inline-flex justify-content-center align-items-center
        text-center text-uppercase border border-3 rounded-circle"
        // style={{ width: "30px", height: "30px" }}
      >
        C
      </span>

      <span className="pb-">Helplama 2021</span>
    </footer>
  );
}

export default Footer;
