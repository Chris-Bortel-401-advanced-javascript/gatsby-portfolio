import React from 'react';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>Built With Gatsby</li>
        <li>Copyright &copy; Chris Bortel {new Date().getFullYear()}</li>
      </ul>
    </div>
  );
}
