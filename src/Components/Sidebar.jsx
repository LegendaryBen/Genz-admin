import React from 'react'
import Buttons from './Buttons'
import Buttons2 from './Buttons2'
import Buttons3 from './Buttons3'

const Sidebar = ({navDEtails,draft}) => {

    const logout = ()=>{

        if(draft.status == true){
            localStorage.removeItem("genz-author");
            window.location.reload();
        }else{
            localStorage.removeItem("genz-admin");
            window.location.reload();
        }

    }



    return (
        <div className='sidebar'>
            <div className="nav-buttons">
                {
                    navDEtails.map((item,i)=><Buttons cls={item.cls} content={item.content} image={item.image} to={item.to} key={i}/>)
                }

                {
                    draft.status &&  <Buttons2 cls={draft.cls} content={draft.content} image={draft.image} to={draft.to} badge={draft.badge}/>
                }

            </div>
            <div className="settings">
                <Buttons3 to='' image='logout' content='Log Out' click={logout}/>
            </div>
        </div>
    )
}

export default Sidebar
