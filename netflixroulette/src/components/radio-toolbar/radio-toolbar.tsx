import * as React from 'react';

interface IRadioToolbarProps {
  name: string,
  items: {
    id:string,
    value?:string,
    isChecked?:boolean,
  }[],
}

const RadioToolbar:React.FC<IRadioToolbarProps> = ({name, items}) => {
  
  const [ value, setValue ] = React.useState<string>(null);

  return (
    <div className={`${name}_radio-toolbar`}>
        
      <span className={`${name}_radio-label`}>Sort by</span>

      {items.map(item => {
        
        return(
        <span key={item.id}>
              <input type="radio" id={item.id} name="radioSort" value={item.id} defaultChecked={item.isChecked} onChange={()=>setValue(item.id)}/>
              <label htmlFor={item.id}>{ item.value || item.id }</label>
        </span>
        )
      })} 
    </div>
  )
}

export default RadioToolbar;
