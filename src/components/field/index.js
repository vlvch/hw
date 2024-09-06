import { memo } from 'react';
import './style.css';

function Field({ label, error, children }) {
  return (
    <div className='Field'>
      <label className='Field-label'>{label}</label>
      <div className='Field-input'>
        {children}
      </div>
      <div className='Field-error'>
        {error}
      </div>
    </div>
  )
}

export default memo(Field);
