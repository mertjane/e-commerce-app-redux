import styled from "styled-components";
import shirtIMG from "..//..//..//assets/shirt.png"
// import mugIMG from "..//..//..//assets/mug.png"

export const CardWrapper = styled.div`
    width: 10vw;
    height: 27vh;
    display: flex;
    flex-direction: column;
`

export const ImgBox = styled.div`
    height: 18vh;
    background: #fefefe;
    border: 1.17666px solid #e9e7f0;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Img = styled.img`
    width: 8vw;
    height: 13vh;
    // background-image: url(${shirtIMG});
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: contain;
    background: transparent;
`

export const CardInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 1rem;
`

export const Cost = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    color: #1ea4ce;
`
export const Name = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    /* Grayscale / 700 */
    color: #191919;
`
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
`