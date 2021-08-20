import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="float-right">
        <Link className="text-light" to="#">
          Back to top
        </Link>
      </p>
      <p className="text-light">
        © 2017-2019 Company, Inc. ·{" "}
        <Link className="text-light" to="#">
          Privacy
        </Link>{" "}
        ·{" "}
        <Link className="text-light" to="#">
          Terms
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
