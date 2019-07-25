import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import Color from "./Color";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => (
  <header
    css={css`
      background-color: ${Color.dark};
      position: sticky;
      top: 0;
      z-index: 10;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      css={css`
        font-size: 60px;
        display: inline-block;
        animation: 1s ${spin} linear infinite;
        &:hover {
          animation: 1s ${spin} reverse infinite;
          text-decoration: underline;
        }
      `}
      aria-label="logo"
      role="img"
    >
      🐩
    </span>
  </header>
);

export default NavBar;
