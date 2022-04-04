import * as React from "react";
import styled from "styled-components";

const AnimatedContainer = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: spinner-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => (color ? color : `#fff`)} transparent
      transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes spinner-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export interface SpinnerProps {
  color?: string;
}

export const Spinner: React.SFC<SpinnerProps> = (props) => (
  <AnimatedContainer {...props}>
    <div />
    <div />
    <div />
    <div />
  </AnimatedContainer>
);
