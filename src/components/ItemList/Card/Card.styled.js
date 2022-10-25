import styled from "styled-components";

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

export const CardWrapper = styled.div`
  width: 10vw;
  height: 27vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile} {
    width: 50px;
    height: 90px;
  }
`;

export const ImgBox = styled.div`
  height: 18vh;
  background: #fefefe;
  border: 1.17666px solid #e9e7f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobile} {
    width: 100%;
    border-radius: 8px;
    height: 50px;
  }
`;
export const Img = styled.img`
  width: 8vw;
  height: 13vh;
  padding: 10px;
  background: transparent;
  ${media.mobile} {
    width: 30px;
    height: 30px;
    padding: 0;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  ${media.mobile} {
    gap: 1px;
    padding: 0;
  }
`;

export const Cost = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  color: #1ea4ce;
  ${media.mobile} {
    font-size: 6px;
    line-height: 10px;
  }
`;
export const Name = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  /* Grayscale / 700 */
  color: #191919;
  ${media.mobile} {
    font-size: 6px;
    line-height: 5px;
    height: 15px;
  }
`;
export const AddBtn = styled.button`
  width: 100%;
  height: 3vh;
  background: #1ea4ce;
  border-radius: 2px;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.9;
  }
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  color: #ffffff;
  cursor: pointer;
  ${media.mobile} {
    height: 14px;
    font-size: 7px;
    line-height: 0;
  }
`;
