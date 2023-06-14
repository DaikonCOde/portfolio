import styled, { keyframes } from "styled-components";
import { device } from "../../theme/breakpoints";

const animateSkill = keyframes`   
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -15%);
  }
  50% {
    transform: translate(0, 0%);
  }
  75% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0px);
  }
`;

export const ContentAboutMe = styled.div`
  @media ${device.tablet} {
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
    @media ${device.tablet} {
      width: 45%;
    }
    .comment {
      text-align: justify;
      display: block;
    }
  }

  .skills {
    @media ${device.tablet} {
      width: 45%;
      margin: 30px 0;
    }
    .contentSkills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      @media ${device.tablet} {
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
      animation: ${animateSkill};
      animation-duration: 6s;
      animation-iteration-count: infinite;
      width: 130px;
      &:hover > i,
      &:hover > .label-skill {
        color: ${({ theme }) => theme.colors.secondary[4]};
      }
      i {
        color: ${({ theme }) => theme.colors.secondary[6]};
        transition: all 0.3s linear;
      }
      .label-skill {
        color: ${({ theme }) => theme.colors.secondary[6]};
        font-weight: 600;
        transition: all 0.3s linear;

        text-align: center;
      }
    }
    .skill:nth-child(1) {
      animation-delay: 0ms;
    }
    .skill:nth-child(2) {
      animation-delay: 200ms;
    }
    .skill:nth-child(3) {
      animation-delay: 400ms;
    }
    .skill:nth-child(4) {
      animation-delay: 600ms;
    }
    .skill:nth-child(5) {
      animation-delay: 800ms;
    }
    .skill:nth-child(6) {
      animation-delay: 1000ms;
    }
    .skill:nth-child(7) {
      animation-delay: 1200ms;
    }
    .skill:nth-child(8) {
      animation-delay: 1400ms;
    }
    .skill:nth-child(9) {
      animation-delay: 1600ms;
    }
    .skill:nth-child(10) {
      animation-delay: 1800ms;
    }
    .skill:nth-child(11) {
      animation-delay: 2000ms;
    }
    .skill:nth-child(12) {
      animation-delay: 2200ms;
    }
    .skill:nth-child(13) {
      animation-delay: 2400ms;
    }
    .skill:nth-child(14) {
      animation-delay: 2600ms;
    }
    .skill:nth-child(15) {
      animation-delay: 2800ms;
    }
  }
`;
