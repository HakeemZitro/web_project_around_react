import { useState } from 'react';

export default function Popup(props) {
  const { children } = props;

  return (
    <div className="popup">
      {children}
    </div>
  );
}