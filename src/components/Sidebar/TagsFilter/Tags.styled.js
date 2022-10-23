import styled from "styled-components";
import check from "..//..//..//assets/checked1.png";

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
    padding-left: 10px;
    font-size: 7px;
    gap: 4px;
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
    width: 100px;
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
      font-size: 7px;
    }
  }
  border-radius: 2px;
  align-self: center;
  padding-left: 1rem;
  margin-top: 1rem;
  ${media.mobile} {
    padding-left: 8px;
    font-size: 8px;
    width: 16vw;
    height: 4vh;
    margin-top: 0.7rem;
  }
`;
export const FilterBox = styled.div`
  width: 14vw;
  height: 60%;
  align-self: center;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  row-gap: 1rem;
  padding-top: 0.5rem;
  ${media.mobile} {
    height: 70%;
    width: 16vw;
  }
  &::-webkit-scrollbar {
    width: 7px;
    ${media.mobile} {
      width: 4px;
      height: 4px;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 2px;
    height: 70px;
    ${media.mobile} {
      height: 40px;
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
    width: 100%;
    gap: 0.2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  div {
    ${media.mobile} {
      margin-left: -10px;
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
    width: 14px;
    height: 14px;
  }
`;
export const SelectAll = styled.input`
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
        left: 0px;
        bottom: 1px;
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
        left: 1.3px;
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

export const FilterText = styled.p`
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
  ${media.mobile} {
    font-size: 7px;
  }
`;
