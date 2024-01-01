import React from 'react'

const Category = ({name,change,val}) => {
    return (
        <div className='category' onClick={()=>change(name)} style={{backgroundColor:val == name?"black":"white", color:val == name?"white":"black"}}>
            {
                name
            }
        </div>
    )
}

export default Category
