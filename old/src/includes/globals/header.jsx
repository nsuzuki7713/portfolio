//ヘッダーを実装する

import React from "react";
import "./index.css";

function Header() {
  return (
    <header class="header">
      <div class="header__inner">
        <ul>
          <li>
            <span class="fas fa-user fa-lg">
              <a href="/">ABOUT</a>
            </span>
          </li>
          <li>
            <span class="fas fa-lightbulb fa-lg">
              <a href="#skill">BLOG</a>
            </span>
          </li>
          <li>
            <span class="fas fa-tasks fa-lg">
              <a href="#works">WORKS</a>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
