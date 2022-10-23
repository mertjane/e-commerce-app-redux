import styled from "styled-components";
import logoIMG from "..//..//assets/Logo.png";

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

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
  ${media.mobile} {
    background-size: 120px 50px;
  }
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
  span {
    ${media.mobile} {
      position: relative;
      right: 35px;
      top: 25px;
      background: #ffffff;
      color: #147594;
      padding-left: 2px;
      padding-right: 2px;
      border-radius: 2px;
      font-size: 11px;
    }
  }
  background: #147594;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
  ${media.mobile} {
    left: 78.82%;
    width: 100px;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 17px;
  }
  left: 84.82%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
