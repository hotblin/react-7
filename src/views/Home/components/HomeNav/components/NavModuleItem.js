import React from 'react';

export default function NavModuleItem(props){
  const {NavDrop} = props;
  return (
    <li className="message no-style has-font">
      {props.children}
    </li>
  )
}