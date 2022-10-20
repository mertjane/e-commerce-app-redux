import styled from "styled-components";
import check from "..//..//..//assets/checked1.png"


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
`;

export const StyledForm = styled.div`
  width: 17vw;
  height: 22.83vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
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
  }
  border-radius: 2px;
  align-self: center;
  padding-left: 1rem;
  margin-top: 1rem;
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
  &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background:#E0E0E0;
      border-radius: 2px;
      height: 70px;
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
`;
export const StyledLabel = styled.label`
  position: absolute;
  background: #ffffff;
  border: 2px solid #dfdee2;
  border-radius: 2px;
  width: 22px;
  height: 22px;
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
`;
