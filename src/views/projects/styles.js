import styled from "styled-components";

export const ContentProjects = styled.div`
  .listProjects {
    margin: 30px auto;

  }

  .project {
    margin: 0 0 20px 0;
    .top {
      margin: 0 0 15px 0;
      .number-project {
        color: ${ ({ theme }) => theme.colors.secondary[3] };
        font-weight: 600;
      }
    }
    .card {
      border-radius: 8px;
      border: 1px solid ${ ({theme}) => theme.colors.lines  };
      overflow: hidden;
      .content-img {
        height: 150px;
        width: 100%;
        border-bottom: 1px solid ${ ({theme}) => theme.colors.lines  };
        position: relative;
        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .technology {
          position: absolute;
          top: 10px;
          right: 10px;
          color: ${ ({theme}) => theme.colors.gradients[2] };
          font-weight: 600;
          font-size: ${ ({theme}) => theme.font_size[14] };
          display: block;
          padding: 2px 8px;
          border-radius: 4px;
          background: ${ ({theme}) => theme.colors.gradients[1] };
        }
      }

      .content-info {
        padding: 25px;
        
        .view-project {
          display: block;
          border-radius: 8px;
          padding: 10px 14px;
          width: fit-content;
          margin: 20px 0 0;
          background: ${ ({theme}) => theme.colors.lines  };
          color: ${ ({ theme }) => theme.colors.secondary[4] };
        }

      } 

    }
  }
`