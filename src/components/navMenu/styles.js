import styled from "styled-components";

export const ContentNavMenu = styled.div`

  position: absolute;
  top: 73px;
  left: 15px;
  right: 15px;
  background: ${ ({theme}) => theme.colors.primary[2] };
  z-index: 5;
  border-radius: 0 0 8px 8px;
  border: 1px solid ${ ({theme}) => theme.colors.lines };
  overflow: hidden;
  ul {
    width: 100%;
    margin: 0;
    padding: 10px 0;
    li {
      padding: 18px;
      font-size: ${ ({theme}) => theme.font_size[16] };
      color: ${ ({theme}) => theme.colors.secondary[4] }
    }
  }

`