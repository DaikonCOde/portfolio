import styled from "styled-components";

export const ContentFooter = styled.footer`
  border: 1px solid ${ ({theme}) => theme.colors.lines };
  border-top: none;
  border-radius: 0 0 8px 8px;
  padding: 0 0 0 18px;
  display: flex;
  box-sizing: content-box;
  align-items: center;
  .paragraph {
    font-weight: 400;
    width: 155px;
    display: inline-block;
  }
  .icon {
    display: block;
    width: 50px;
    height : 50px;
    padding: 15px 14px;
    border-left: 1px solid ${ ({theme}) => theme.colors.lines };
    i {
      color: ${ ({ theme }) => theme.colors.secondary[6] };
      transition: all .3s linear;
      &:hover {
        color: ${ ({ theme }) => theme.colors.secondary[4] };
      }
    }
  }
`