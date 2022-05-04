import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

export const GlobalClass = createGlobalStyle`

  .content-app {
    background: ${ ({theme}) => theme.colors.primary[2] };
    border-radius: 8px;
  }
  .content-views {
    border: 1px solid ${ ({theme}) => theme.colors.lines };
    border-top: none;
    min-height: calc(100vh - 88px);
    padding: 20px;
    @media ${ device.tablet } {
      min-height: calc(100vh - 139px);
      padding: 20px 50px;
    }
    @media ${ device.laptop } {
      padding: 20px 150px;
    }
  }

  .menu-active {
    color: ${ ({ theme }) => theme.colors.secondary[4] };
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }

  i {
    display: block;
    line-height: 0;
    svg {
      font-size: 20px;
    }

  } 

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


${'' /* colors */}

  .white {
    color: ${ ({theme}) => theme.colors.secondary[5] };
  }
  .green {
    color: ${ ({theme}) => theme.colors.accent[2] };
  }

${'' /* titles */}

  .label {
    font-size: ${ ({theme}) => theme.font_size[18] };
  }
  .title {
    font-size: ${ ({theme}) => theme.font_size[62] };
    line-height: 66px;
    margin: 10px 0;
  }

  .label-section {
    font-size: ${ ({theme}) => theme.font_size[14] };
    font-weight: 500;
    color: ${ ({theme}) => theme.colors.secondary[4] };
  }

  .description, .paragraph {
    font-size: ${ ({theme}) => theme.font_size[14] };
    font-weight: 500;
    color: ${ ({theme}) => theme.colors.secondary[6] };
    margin: 0;
  }


${'' /* content gradient */}
  .content-gradient {
    position: absolute;
    display: block;
    z-index: 0;
    .first, .second {
      width: 150px;
      height: 150px;
      display: block;
      border-radius: 50%;
      filter: blur(50px);
      opacity: 0.4;
    }
    .first {
      background: ${ ({theme}) => theme.colors.gradients[1] }
    }
    .second {
      background: ${ ({theme}) => theme.colors.gradients[2] }
    }
  }

${'' /* code */}

  .comment {
    color: ${ ({theme}) => theme.colors.secondary[6] };
  }
  .label-comment {
    color: ${ ({theme}) => theme.colors.secondary[4] };
  }
  .code {
    margin: 10px 0;
    .const {
      color: ${ ({theme}) => theme.colors.secondary[3] };
    }
    .name {
      color: ${ ({theme}) => theme.colors.accent[2] };
    }
    .equal {
      color: ${ ({theme}) => theme.colors.secondary[4] };
    }
    .value {
      color:   ${ ({theme}) => theme.colors.accent[3] };
    }
  }

`