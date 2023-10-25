import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('Popo')
    const onChange = ( e:any ) => {
        e.preventDefault();
        setInputValue(e.value)
    }
    const onSubmit = (event:any) => {
        event.preventDefault();
       if (inputValue.trim().length <= 1 ) return;
       //setCategories(category => [inputValue, ...category]);
       setInputValue('');
       onNewCategory( inputValue.trim() );
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
        <input 
        type="text"
         placeholder= "Buscar"
          value={inputValue}
          onChange={ (event) => onChange(event)}
          ></input>

        </form>

    )
}