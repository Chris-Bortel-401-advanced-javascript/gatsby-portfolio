import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar, resume }) {
  return (
    <div id="logo">
      <Link
        to="https://docs.google.com/document/d/e/2PACX-1vQ72IxRd1HA-FDE7Oso0IZo3DeyK7k_Fds67MBF-LpaVcb7wyf6fOU2NvQTcqoY0gktWmr0gg5oU-KZ/pub"
        target="_blank"
      >
        <span className="image avatar48">
          <img height="128px" src={avatar} alt="" />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>

        <p style={{ fontSize: '.7em' }}>{resume}</p>
      </Link>
    </div>
  );
}
