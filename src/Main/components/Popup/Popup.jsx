import { useState } from 'react';

export default function Popup(props) {
  const { title, children } = props;

  return (
    <div className={`popup ${title}`}>
      {children}
    </div>
  );
}