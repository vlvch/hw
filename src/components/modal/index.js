import { memo } from 'react';
import './style.css';

function Modal({ title, children }) {
  return (
    <div className='Modal'>
      {title ? <div className='Modal-title'>{title}</div> : null}
      {children}
    </div>
  )
}

export default memo(Modal);
