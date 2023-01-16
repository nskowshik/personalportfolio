import React from 'react';
import './index.scss'

const Toolbar = (props) => {
  const { items } = props;

  return(
    <div className="fx jend px40">
      <ul className="navigation-container">
        {items.map(el => <li className="navigation-items hover-action" key={el}>{el}</li>)}
      </ul>
    </div>
  )
}

export default Toolbar
