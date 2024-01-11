import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoint";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10.8rem;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  gap: 3.2rem;

  > div {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 2rem;

    > img {
      width: 4rem;
      max-width: 4rem;
    }

    > h1 {
      width: 100%;
      font-family: 'Roboto', san-serif;
      font-weight: 700;
      font-style: normal;
      font-weight: 700;
      font-size: 4.2rem;
      line-height: 5rem;
      text-align: center;

      @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
        font-size: 3rem;
      }

      @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
        margin-top: 3rem;
        font-size: 2.5rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};
  border-radius: 10px;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 2.4rem;

    @media (max-width: 1200px) {
      font-size: 2.5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      font-size: 2rem;
    }
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 100%;
  }
`;