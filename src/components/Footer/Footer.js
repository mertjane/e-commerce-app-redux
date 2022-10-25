import React from "react";
import { FooterWrapper } from "./Footer.styled";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      © {currentYear}
      <BsDot className="dot"/>
      Privacy Policy
    </FooterWrapper>
  );
};

export default React.memo(Footer);
