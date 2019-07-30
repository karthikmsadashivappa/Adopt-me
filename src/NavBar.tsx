import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import Color from "./Color";

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
      `}
      aria-label="logo"
      role="img"
    >
      🐩
    </span>
  </header>
);

export default NavBar;
