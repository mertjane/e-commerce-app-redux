import styled from "styled-components";


export const NavWrapper = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
export const NavTitle = styled.div`
    width: auto;
    height: 50%;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height, or 130% */
    letter-spacing: 0.25px;
    /* Black / 500 */
    color: #6F6F6F;
    display: flex;
    align-items: center;

`
export const BtnGroup = styled.div`
    width: auto;
    height: 50%;
    display: flex;
    align-items: center;
    gap: 1rem;
    
`
export const SelectionBtn = styled.button`
    width: 3.17vw;
    height: 3.20vh;
    background: #f1ecec;
    &:focus {
        background: #1ea4ce;
        color: #f1ecec;
    }
    &:hover {
        opacity: 0.7;
    }
    border-radius: 2px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #1ea4ce;
    ${({ active }) => active && `
    background: #1ea4ce;
    color: white;
  `}
`