import React from 'react';

export default function SideBarButton({href, text, active}) {
  return (
    <a className={`sidebar-button ${active == true && 'active'}`} href={href}>
      {text}
    </a>
  );
}
