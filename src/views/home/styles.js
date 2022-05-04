import styled from "styled-components";
import { device } from '../../theme/breakpoints';

export const ContentHome = styled.div`
  
  height: 100%;

  .hero {
    margin: 90px auto 140px;
    position: relative;
    @media ${ device.tablet } {
      margin: 120px auto 170px;
    }
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

    .code-snippet {
      display: none;
      @media ${ device.tablet } {
        display: block;
        width: 600px;
        height: auto;
        position: absolute;
        right: 0px;
        top: -25px;
      }
    }
  }

  .download-cv {
    .code .value {
      text-decoration: underline;
    } 
  }

`