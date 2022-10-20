import styled from "styled-components";
import logoIMG from "..//..//assets/Logo.png";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 76px;
  background: #1ea4ce;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.section`
  height: 100%;
  width: 141.25px;
  background-image: url(${logoIMG});
  background-repeat: no-repeat;
  background-position: center;

`;

export const CartView = styled.section`
  height: 76px;
  width: 150px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */
  letter-spacing: 0.16px;
  color: #ffffff;
  position: absolute;
  background: #147594;
    &:hover{
        opacity: 0.9;
    }
    cursor: pointer;
    left: 84.82%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;


