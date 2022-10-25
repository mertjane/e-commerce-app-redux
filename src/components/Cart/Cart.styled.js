import styled from "styled-components";

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

export const CartBox = styled.div`
  width: 15.41vw;
  min-height: 36.09vh;
  border-radius: 2px;
  border: 4px solid #1ea4ce;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  ${media.mobile} {
    width: 100%;
    padding: 2px;
    min-height: 90px;
    border: 2px solid #1ea4ce;
    gap: 2px;
  }
  p {
    ${media.mobile} {
      font-size: 6px;
      text-align: center;
      padding: 2px;
    }
  }
`;

export const ItemBox = styled.div`
  width: 12.03vw;
  height: 4.36vh;
  display: flex;
  border-radius: 2px;
  ${media.mobile} {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export const ItemInfo = styled.div`
  width: 60%;
  ${media.mobile} {
    height: 100%;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const ItemName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */
  letter-spacing: 0.16px;
  /* Grayscale / 700 */
  color: #191919;
  ${media.mobile} {
    font-size: 8px;
    line-height: 7px;
  }
`;
export const ItemPrice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */
  letter-spacing: 0.16px;
  color: #1ea4ce;
  ${media.mobile} {
    font-size: 8px;
    line-height: 7px;
    padding-top: 4px;
  }
`;

export const CounterBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobile} {
    width: 25%;
  }
`;

export const DecrementBtn = styled.button`
  width: 2rem;
  height: 2rem;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  .btnIco{
    color: #1EA4CE;
    size: 15;
  }
  ${media.mobile} {
    .btnIco{
    width: 4px;
    height: 4px;
  }
  }
`;
export const IncrementBtn = styled.button`
  width: 2rem;
  height: 2rem;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  .btnIco{
    color: #1EA4CE;
    size: 15;
  }
  ${media.mobile} {
    .btnIco{
    width: 4px;
    height: 4px;
  }
  }
`;
export const Number = styled.p`
  width: 1.66vw;
  height: 75%;
  background-color: #1ea4ce;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  ${media.mobile} {
    width: 1.66vw;
    height: 50%;
    font-size: 8px;
    background-color: transparent;
    color: #1ea4ce;
  }
`;

export const Divider = styled.div`
  width: 12.91vw;
  border-bottom: 1.02px solid #f4f4f4;
`;
export const TotalBox = styled.div`
  width: 12.91vw;
  height: 6vh;
  display: flex;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.mobile} {
    
  }
`;
export const ResultText = styled.p`
  width: 4.79vw;
  height: 5.45vh;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 2px solid #1ea4ce;
  border-radius: 2px;
  color: #1ea4ce;
  ${media.mobile} {
    width: 9vw;
    height: 3vh;
    font-size: 10px;
    border: 1px solid #1ea4ce;
  }
`;
