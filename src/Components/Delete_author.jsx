import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Delete_author = ({color,text,item,del,change}) => {

    const navigate = useNavigate();


    const remove = ()=>{

        if(del == true){
            if(window.confirm("Are you sure you want to delete this author?")){
                change(item.id)
            }
        }

    }



    return (
        <Link className={`${color} remove`} onClick={remove} to={del == true ? '':`admin-edit/${item.id}`}>
            {text}
        </Link>
    )
}

export default Delete_author
