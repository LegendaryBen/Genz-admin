import React from 'react'
import Category from './Category'



const Categories = ({change,val}) => {

    const categories = [
        {
            id:1,
            name:"Magazine"
        },

        {
            id:2,
            name:"Tech"
        },

        {
            id:3,
            name:"Sports"
        },

        {
            id:4,
            name:"Entertainment"
        },

        {
            id:5,
            name:"Politics"
        },

        {
            id:6,
            name:"Finance"
        },

        {
            id:7,
            name:"Lifestyle"
        },

        {
            id:8,
            name:"Real Estate"
        },
    ]



    return (
        <div className='categories'> 
            <div className="select-category">
                Select Category
            </div>
            <div className="cats">
                {
                    categories.map((item)=>{
                        return <Category name={item.name} key={item.id} change={change} val={val}/>
                    })
                }
            </div>
        </div>
    )
}

export default Categories
