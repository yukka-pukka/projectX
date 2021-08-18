import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="float-right"><Link to="#">Back to top</Link></p>
            <p>© 2017-2019 Company, Inc. · <Link to="#">Privacy</Link> · <Link to="#">Terms</Link></p>
        </footer>
    );
};

export default Footer;

