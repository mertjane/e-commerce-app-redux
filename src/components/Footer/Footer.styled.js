import styled from "styled-components";

export const media = {
  mobile: `@media only screen and (max-width: 768px)`,
};

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 90px;
  background: #e5e5e5;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 8px;
  justify-content: center;
  gap: 0.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 174%;
  /* identical to box height, or 23px */
  color: #1ea5ce78;
  opacity: 4px;
  .dot{
    position: relative;
    top: 5px;
    color: #1ea5ce78;
  }
  ${media.mobile} {
    .dot{
      position: relative;
      top: 1px;
    }
    font-size: 6px;
    gap: 0;
    height: 30px;
  }
  
`;
