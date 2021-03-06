import styled from 'styled-components';

export const TitleReflectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-size: cover;
  overflow: hidden;
`;
TitleReflectionContainer.displayName = TitleReflectionContainer;

export const TitleReflectionH1 = styled.h1`
  position: relative;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: calc(10px + 5vw);
  font-weight: 700;
  color: #f5f5f5;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  perspective: 500px;

  &::before,
  &::after {
    content: attr(aria-label);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    text-shadow: 0.01em 0.01em 0.01em rgba(0, 0, 0, 0.3);
  }

  &::before {
    animation: floatAbove 3.5s ease-in-out infinite;
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
  }

  &::after {
    opacity: 0.65;
    filter: blur(0.02em);
    transform: translate(-50%, -50%) rotateX(21deg);
    animation: floatBelow 3.5s ease-in-out infinite;
    -webkit-clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
  }

  @keyframes floatAbove {
    50% {
      transform: translate(-50%, -60%);
      -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
      clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
    }
  }

  @keyframes floatBelow {
    50% {
      transform: translate(-50%, -60%) rotateX(10deg);
      -webkit-clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
      clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
    }
  }
`;
TitleReflectionH1.displayName = TitleReflectionH1;
