import styled from "styled-components";
import check from "..//..//..//assets/checked1.png";
import checkMobile from "..//..//..//assets/vecktor_1Mobile.png";

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

export const Wrapper = styled.section`
  width: 100%;
  padding-left: 110px;
  padding-top: 20px;
  gap: 8px;
  font-style: normal;
  padding-bottom: 8px;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */
  display: flex;
  flex-direction: column;
  /* Grayscale / 500 */
  color: #697488;
  ${media.mobile} {
    width: 100%;
    height: 128px;
    padding: 0;
    font-size: 5px;
    font-weight: 400;
    gap: 0px;
  }
`;

export const StyledForm = styled.div`
  width: 17vw;
  height: 22.83vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  ${media.mobile} {
    width: 100%;
    height: 120px;
    background: none;
    box-shadow: none;
  }
`;

export const StyledSearchBar = styled.input`
  width: 14vw;
  height: 5.12vh;
  border: 2px solid #e0e0e0;
  outline: none;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    font-size: 14px;
    letter-spacing: 0.15px;
    /* identical to box height, or 171% */
    color: #a8a8a8;
    /* Black / 300 */
    ${media.mobile} {
      font-size: 6px;
    }
  }
  border-radius: 2px;
  align-self: center;
  padding-left: 1rem;
  margin-top: 1rem;
  ${media.mobile} {
    padding-left: 4px;
    font-size: 6px;
    width: 90%;
    height: 20px;
    letter-spacing: 0;
    margin-top: 0;
  }
`;
export const FilterBox = styled.div`
  width: 14vw;
  height: 62%;
  align-self: center;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  row-gap: 1rem;
  padding-top: 0.5rem;
  ${media.mobile} {
    width: 100%;
    height: 70%;
    row-gap: 8px;
  }
  &::-webkit-scrollbar {
    width: 7px;
    ${media.mobile} {
      width: 2px;
      height: 2px;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 2px;
    height: 70px;
    ${media.mobile} {
      height: 40px;
      background: #a5a4a4;
    }
  }
`;

export const Group = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${media.mobile} {
    width: 100px;
    height: 10px;
    gap: 0;
    padding: 0;
  }
  div {
    display: flex;
    gap: 6px;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */
    display: flex;
    align-items: center;
    letter-spacing: 0.16px;
    /* Black / 300 */
    color: #a8a8a8;
  }
  ${media.mobile} {
    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 6px;
      gap: 0;
      padding: 0;
      letter-spacing: 0;
      line-height: 6px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
      margin-left: -6px;
      span {
        height: 100%;
        width: auto;
        font-size: 6px;
      }
    }
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  background: #ffffff;
  border: 2px solid #dfdee2;
  border-radius: 2px;
  width: 22px;
  height: 22px;
  ${media.mobile} {
    width: 12px;
    height: 12px;
  }
`;

export const SecondaryChkBox = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  &:hover ~ ${StyledLabel} {
    background: #ffffff;
    &::after {
      //content: url(${check});
      display: block;
      color: white;
      width: 12px;
      height: 12px;
    }
  }
  &:checked {
    border: 1px solid #1ea4ce;
  }
  &:checked + ${StyledLabel} {
    background: #1ea4ce;
    border: 1px solid #1ea4ce;
    &::after {
      content: url(${check});
      ${media.mobile} {
        content: url(${checkMobile});
        top: -4px;
        left: 2px;
      }
      position: relative;
      left: 4px;
      display: block;
      color: white;
      width: 12px;
      height: 12px;
    }
  }
`;
