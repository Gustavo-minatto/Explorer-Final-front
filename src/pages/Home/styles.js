import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 12.4rem auto 12.4rem;
  grid-template-areas:
    'header'
    'content'
    'footer';
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  grid-area: content;
  padding: 3rem 12.4rem;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;

  > h1 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 2.2rem;
    text-align: left;
    width: 100%;
    margin: 5rem 0;
  }

  .carousel-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    overflow: hidden;

    .carousel {
      display: flex;
      gap: 2rem;
      width: 100%;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }

      > * {
        flex: 0 0 calc(100% / 3 - 2rem);
        max-width: calc(100% / 3 - 2rem);
      }

      @media (max-width: 768px) {
        gap: 1rem;
        overflow-x: scroll;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        > * {
          flex: 0 0 calc(100% / 2 - 1rem);
          max-width: calc(100% / 2 - 1rem);
        }
      }
    }

    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
      padding: 1.5rem;
      cursor: pointer;
      z-index: 1;
      font-size: 2.5rem;

      &:hover {
        color: #555;
      }
    }

    .carousel-arrow.left {
      left: 10px;
    }

    .carousel-arrow.right {
      right: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 800px;
    padding: 3rem 5rem;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 26rem;
  display: flex;
  justify-content: space-between;
  margin-top: 13rem;
  background: linear-gradient(to top, ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700} 0%, #072d3b 100%);

  > div {
    position: relative;

    > img {
      position: absolute;
      bottom: 0;
      left: -55px;
      opacity: 0.9;
      height: 155%;
    }
  }

  > .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 4rem;
    gap: 1rem;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 2.2rem;
      text-align: left;
      width: 100%;
    }

    h3 {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
`;
