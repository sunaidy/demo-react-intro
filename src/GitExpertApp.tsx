import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GitExperApp = () => {

    const [category, setcategory] = useState(['Pepe', 'Jose'])

    const handlAdd = () => {
        setcategory([...category,'Lolo'])
    }
    const onAddCategory = ( newCategory:any ) => {
        if ( category.includes(newCategory) ) return;
        setcategory([ newCategory, ...category ]);
    }
  
    return (
        <>
        <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>
        {/*Title*/}
        <h1> GitExperApp </h1>
        {/*Lista*/}
        <ol>
            {
            category.map(
                category => {
                    return <li key={ category }>{ category }</li>
                }
            )
            }
        </ol>
        </>
    )
}