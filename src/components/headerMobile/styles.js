import styled from "styled-components";

export const ContentHeader = styled.header`
  padding: 18px;
  border: 1px solid ${ ({theme}) => theme.colors.lines };
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;

  .brand > h2 {
    margin: 0;
    color: ${ ({theme}) => theme.colors.secondary[6] };
    font-size: ${ ({theme}) => theme.font_size.label };
    font-weight: 500;
  }

  .menu i {
    color: ${ ({theme}) => theme.colors.secondary[6] };
  }


`