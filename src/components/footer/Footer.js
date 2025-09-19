import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#374745',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const leftStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: "flex",
  };

  const socialIconsStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const socialIconItemStyle = {
    display: 'inline-block',
    marginRight: '10px',
  };

  const socialIconLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
  };

  const socialIconStyle = {
    transition: 'color 0.3s ease-in-out',
  };

  const handleSocialIconHover = (event) => {
    event.target.style.color = '#007bff';
  };

  const handleSocialIconLeave = (event) => {
    event.target.style.color = '#fff';
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <p>&copy; 2025 Abdul Rafay</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
