import React from 'react';
import {Link} from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <h3>Page not found return 
      <Link to='/'>Home</Link>
     </h3>
    </div>
  )
}

export default NoMatch;

