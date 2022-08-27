import React from "react";

const presYear = new Date().getFullYear();

const Footer = () => {
    return(
        <>
        <footer>
            <p>Copyright ©️ {presYear} </p>
        </footer>
        </>
    );
};
export default Footer;