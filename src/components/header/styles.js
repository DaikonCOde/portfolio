import styled from "styled-components";
import { device } from "../../theme/breakpoints";

export const ContentHeader = styled.header`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.lines};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;

  .brand > h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary[4]};
    font-size: ${({ theme }) => theme.font_size.label};
    font-weight: 600;
  }

  .menu-desktop {
    display: none;
    @media ${device.tablet} {
      display: flex;
      margin: 0;
      gap: 20px;
      li {
        color: ${({ theme }) => theme.colors.secondary[6]};
        font-weight: 600;
        a {
          transition: all 0.3s linear;
          &:hover {
            color: ${({ theme }) => theme.colors.secondary[4]};
          }
        }
      }
    }
  }

  .menu-mobile {
    @media ${device.tablet} {
      display: none;
    }
    i {
      color: ${({ theme }) => theme.colors.secondary[6]};
    }
  }
`;
