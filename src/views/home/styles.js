import styled from "styled-components";

export const ContentHome = styled.div`
  
  height: 100%;

  .hero {
    margin: 90px auto;
    position: relative;
    .specialization {
      display: block;
      font-size: ${ ({ theme }) => theme.font_size[20] };
      z-index: 1;
      position: relative;
    }

    .content-gradient {
      top: -60px;
      left: 10px;
      transform: rotate(-45deg);
    }
  }

`