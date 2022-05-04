import styled from "styled-components";

export const ContentAboutMe = styled.div`

  .personal-info {
    margin: 30px 0;
    .comment {
      text-align: justify;
      display: block;
    }
  }

  .skills {
    .contentSkills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    .skill {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-direction: column;
      padding: 10px 0;
      width: fit-content;
      width: 130px;
      i {
        color: ${ ({theme}) => theme.colors.secondary[6] };
      }
      .label-skill {
        color: ${ ({theme}) => theme.colors.secondary[6] };
        font-weight: 600;
        text-align: center;
      }
    }
  }

`