import * as React from 'react';

interface IRadioToolbarProps {
  name: string,
  label?: string,
  items: {
    id:string,
    value?:string,
    isChecked?:boolean,
  }[],
  onChange?: (v:string) => void
}

const RadioToolbar:React.FC<IRadioToolbarProps> = ({ name, label = 'Sort by', items, onChange }) => {
    return (
    <div className={`${name}_radio-toolbar`}>
        
    <span className={`${name}_radio-label`}>{label}</span>

      {items.map(item => {
        
        return(
        <span key={item.id}>
              <input type="radio" id={item.id} name="radioSort" value={item.id} defaultChecked={item.isChecked} onChange={()=>onChange(item.id)}/>
              <label htmlFor={item.id}>{ item.value || item.id }</label>
        </span>
        )
      })} 
    </div>
  )
}

export default RadioToolbar;
