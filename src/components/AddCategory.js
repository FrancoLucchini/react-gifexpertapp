import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    
    const [inputValue, setInputValue] = useState('');

    const HandleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        
        if(inputValue.trim().length >= 2){
            setCategories( cats => [inputValue, ...cats])
        } else{
            console.log('tiene que tener un valro mayor a 2');
        }
        
        e.preventDefault();
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input 
                type="text"
                value={inputValue}
                onChange= {HandleInputChange}
            />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
