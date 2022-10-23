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
    height: auto;
  }
`;
export const SideBarWrapper = styled.section`
  width: 25%;
  height: 1480px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    width: 30%;
    height: 100%;
    padding-left: 10px;
  }
`;
