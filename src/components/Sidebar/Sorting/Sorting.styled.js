import styled from "styled-components";
import check from "..//..//..//assets/checked.png";
import checkMobile from "..//..//..//assets/mobileCheck.png"

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

export const Wrapper = styled.section`
  width: 100%;
  padding-left: 110px;
  padding-top: 50px;
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
    height: 120px;
    padding: 0;
    font-size: 5px;
    font-weight: 400;
    gap: 0px;
  }
`;

export const StyledForm = styled.form`
  width: 17vw;
  height: 22.83vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  ${media.mobile} {
    width: 100%;
    height: 100%;
    background: none;
    box-shadow: none;
  }
`;

export const Group = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  gap: 0.4rem;
  padding-left: 1.7rem;
  padding-top: 1.7rem;
    ${media.mobile} {
      div {
      width: 120px;
      height: auto;
      gap: 0;
      padding: 0;
    }
  }
  ${media.mobile} {
    padding-left: 0px;
    padding-top: 0px;
  }
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  background: #ffffff;
  border: 2px solid #dfdee2;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  ${media.mobile} {
    width: 12px;
    height: 12px;
  }
`;

export const SortCheckBox = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  &:hover ~ ${RadioButtonLabel} {
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
    border: 2px solid #1ea4ce;
  }
  &:checked + ${RadioButtonLabel} {
    border: 2px solid #1ea4ce;
    &::after {
      content: url(${check});
      ${media.mobile} {
        content: url(${checkMobile});
        top: -5px;
        left: 1.5px;
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
