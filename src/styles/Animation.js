import styled, {keyframes} from "styled-components";

export const fadeUp = keyframes`
    from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeDown = keyframes`
    from {
    opacity: 0;
    transform: translateY(-12px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`;

export const fadeIn = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
`;

export const fadeBlur = keyframes`
    from {
    filter: blur(3px);
    }
    to {
    filter: blur(0px);
    }
`;
