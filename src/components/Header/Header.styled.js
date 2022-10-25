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
  ${media.mobile} {
    height: 50px;
  }
`;

export const Logo = styled.section`
  height: 100%;
  width: 141.25px;
  background-image: url(${logoIMG});
  background-repeat: no-repeat;
  background-position: center;
  ${media.mobile} {
    background-size: 76px 24px;
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
  background: #147594;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
  left: 84.82%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  .shopLogo {
      width: 50px;
      height: 30px;
    }
  ${media.mobile} {
    left: 79.82%;
    width: 76px;
    height: 50px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0;
  }
  ${media.mobile} {
    .shopLogo {
      width: 30px;
      height: 20px;
      position: absolute;
    }
    div{
      position: relative;
      right: 0px;
      top: 15px;
      background: #f74d4d;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1px;
      font-size: 6px;
      height: 10px;
      width: 22px;
    }
    span{
      position: absolute;
      background: #f74d4d;
      height: 3px;
      width: 3px;
      bottom: 9px;
      transform: rotate(-0.12turn);
    }
  }
`;
