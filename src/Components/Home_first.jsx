import Notify_Block from "./Notify_Block"




const Home_first = () => {
    return (
        <div className='home_first'>
            <div className="home_details">
                <Notify_Block image='person' total="Total Users" number={896896} monthly="All time increase"/>
                <Notify_Block image='person' total="Total Users" number={896896} monthly="All time increase"/>
                <Notify_Block image='person' total="Total Users" number={896896} monthly="All time increase"/>
                <Notify_Block image='person' total="Total Users" number={896896} monthly="All time increase"/>
                <Notify_Block image='person' total="Total Users" number={896896} monthly="All time increase"/>
                <Notify_Block image='person' total="Total Users" number={896896} monthly="All time increase"/>
            </div>
            <div className="add_authors">
                <div className="authors_toggle">
                    <div className="toggle1">
                        <span className="material-symbols-outlined">group</span>
                        <div>Authors</div>
                    </div>
                    <div className="toggle2">
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <div className="show_authors">
                    
                </div>
                <div className="author_btn">
                    <span className="material-symbols-outlined">add</span>
                    <div>Add new author</div>
                </div>
            </div>
        </div>
    )
}

export default Home_first
