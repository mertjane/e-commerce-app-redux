import styled from "styled-components";

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

export const MainWrapper = styled.section`
  width: 100%;
  height: 1480px;
  display: flex;
  background: #e5e5e5;
  ${media.mobile} {
    width: 100%;
    height: 587px;
  }
`;
export const SideBarWrapper = styled.section`
  width: 30%;
  height: 1480px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    width: 20%;
    height: 100%;
    padding: 18px 4px 0 4px;
  }
`;

export const CartWrapper = styled.section`
  width: 30%;
  height: 1480px;
  padding-right: 140px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${media.mobile} {
    width: 20%;
    height: 100%;
    padding: 18px 4px 0 4px;
  }
`;