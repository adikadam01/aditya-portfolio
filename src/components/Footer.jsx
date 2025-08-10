import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>Made with ❤ by Adi</p>
        <p>Copyright &copy; {new Date().getFullYear()} Aditya Kadam</p>
      </div>
    </footer>
  );
};

export default Footer;
