import React from 'react';

export default function NavModuleItem(props){
  const {NavDrop} = props;
  // console.log(NavDrop);
  console.log(props);
  return (
    <li className="message no-style has-font">
      {props.children}
    </li>
  )
}