import styled from "styled-components";

export const PaginationWrapper = styled.nav`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    
`

export const ControlBox = styled.div`
    width: 100%;
    height: 4.26vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const PrevBtn = styled.button`
    border: none;
    outline: none;
    background: transparent;
    width: 28%;
    height: 100%;
    font-style: normal;
    font-weight: 600;
    &:hover {
        opacity: 0.7;
    }
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 114% */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1ea4ce;
    cursor: pointer;
    gap: .5rem;
    

`
export const Pages = styled.button`
    border: none;       
    outline: none;
    background: transparent;
    width: 2vw;
    height: 100%;
    border-radius: 2px;
    color: #697488;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    &:focus {
    background: #1ea4ce;
    color: white;
    } 
    ${({ active }) => active && `
    background: #1ea4ce;
    color: white;
  `}

`
export const NextBtn = styled.button`
    border: none;
    outline: none;
    background: transparent;
    width: 28%;
    height: 100%;
    font-style: normal;
    &:hover {
        opacity: 0.7;
    }
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 114% */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1ea4ce;
    gap: .5rem;
`