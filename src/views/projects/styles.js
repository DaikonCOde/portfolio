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
        background: #333;
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