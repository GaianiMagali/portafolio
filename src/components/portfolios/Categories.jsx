import React from 'react';

export const Categories = ({ filterCategories, categories }) => {
    console.log(categories);
    return (
        <div className="buttons">
            {
                categories.map((cat, i) => {
                    return <button type="button" className="btn-port" onClick={() => filterCategories(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    )
}

