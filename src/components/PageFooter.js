import React from 'react';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>Copyright &copy; Chris Bortel {new Date().getFullYear()}</li>
        <li>
          <a href="http://unsplash.com/">Resume</a>
        </li>
      </ul>
    </div>
  );
}
