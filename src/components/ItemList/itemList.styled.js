import styled from "styled-components";

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

export const ListWrapper = styled.section`
  width: 50%;
  height: 1480px;
  padding-top: 22px;
  ${media.mobile} {
    width: 45%;
    height: auto;
  }
`;

export const List = styled.div`
  width: 100%;
  height: 1220px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 1.8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  column-gap: 1.9rem;
  ${media.mobile} {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    row-gap: 30px;
    column-gap: 30px;
    padding: 20px;
  }
`;
