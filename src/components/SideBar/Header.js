import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar, resume }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img height="128px" src={avatar} alt="" />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
        <a href="" target="_blank">
          <p style={{ fontSize: '.7em' }}>{resume}</p>
        </a>
      </Link>
    </div>
  );
}
