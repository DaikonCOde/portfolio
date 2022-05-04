import styled from "styled-components";
import { device } from '../../theme/breakpoints';


export const ContentAboutMe = styled.div`
  @media ${ device.tablet } {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
  }

  .label-section {
    width: 100%;
  }
  .personal-info {
    margin: 30px 0;
    @media ${ device.tablet } {
      width: 45%;
    }
    .comment {
      text-align: justify;
      display: block;
    }
  }

  .skills {
    @media ${ device.tablet } {
      width: 45%;
      margin: 30px 0;
    }
    .contentSkills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      @media ${ device.tablet } {
        gap: 20px;
      }
    }
    .skill {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-direction: column;
      padding: 10px 0;
      width: fit-content;
      width: 130px;
      &:hover > i, &:hover > .label-skill {
        color: ${ ({theme}) => theme.colors.secondary[4] };
      }
      i {
        color: ${ ({theme}) => theme.colors.secondary[6] };
        transition: all .3s linear;
      }
      .label-skill {
        color: ${ ({theme}) => theme.colors.secondary[6] };
        font-weight: 600;
        transition: all .3s linear;

        text-align: center;
      }
    }
  }

`