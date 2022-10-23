import React from "react";
import { FooterWrapper } from "./Footer.styled";
import { BsDot } from "react-icons/bs";

const dotStyle = {
  display: "flex",
  alignSelf: "flex-start",
  color: "#1EA4CE",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      © {currentYear}
      <BsDot size={20} style={dotStyle} />
      Privacy Policy
    </FooterWrapper>
  );
};

export default React.memo(Footer);
