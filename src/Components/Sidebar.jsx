import React from 'react'
import Buttons from './Buttons'
import Buttons2 from './Buttons2'
import Buttons3 from './Buttons3'

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className="nav-buttons">
                <Buttons cls='route' content="Home" image='grid_view' to=''/>
                <Buttons cls='route' content="New Stories" image='edit_square' to='stories'/>
                <Buttons cls='route' content="Magazine Stories" image='menu_book' to='magazines'/>
                <Buttons2 cls='route2' content="Drafts" image='drafts' to='drafts' badge='10'/>
            </div>
            <div className="settings">
                <Buttons3 to='' image='settings' content='Settings'/>
                <Buttons3 to='' image='logout' content='Log Out'/>
            </div>
        </div>
    )
}

export default Sidebar
