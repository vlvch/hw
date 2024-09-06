import { memo, useEffect } from 'react';
import './style.css';

function Button(props) {
  return (
    <button className='Button'>{props.title}</button>
  )
}

export default memo(Button);
