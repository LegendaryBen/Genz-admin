import Users_card from "../Components/Users_card"



const Admin_users = (props) => {
    return (
        <div className='admin_users'>
            <div className='all_users'>
                All Users
            </div>
            <Users_card/>
            <Users_card/>
            <Users_card/>
            <Users_card/>
        </div>
    )
}

export default Admin_users
