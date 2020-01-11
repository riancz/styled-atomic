import React from 'react';

import Link from './Link';

function Formatter({ text, type }) {
  switch (type) {
    case 1:
      return <span>{text}</span>;
    case 2:
      return <Link src={text} >{text}</Link>
    case 3:
      return <Link src={`mailto: ${text}`} >{text}</Link>
    default:
      return text;
  }
}

export default Formatter;
