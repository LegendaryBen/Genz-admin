import Notify_Block from "./Notify_Block"
import { Link } from "react-router-dom"
import Authors_card from "./Authors_card"
import { useState } from "react"




const Home_first = () => {

    const[drop,setDrop] = useState(false)


    const dropDown = ()=>{
        setDrop(!drop);
    }


    const[authors,setAuthors] = useState([
        {
            id:1,
            name:"chukwuezi Benjamin",
            dropped:false
        },
        {
            id:2,
            name:"chukwuezi Benjamin",
            dropped:false
        },
        {
            id:3,
            name:"chukwuezi Benjamin",
            dropped:false
        },
        {
            id:4,
            name:"chukwuezi Benjamin",
            dropped:false
        },
        {
            id:5,
            name:"chukwuezi Benjamin",
            dropped:false
        }
    ])


    const toggle_authors = (id)=>{
        
        let update = authors.map((item)=>{
            if(item.id == id){
                item.dropped = !item.dropped
            }
            return item;
        })

        setAuthors(update);

    }



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
            <div className="add_authors" >
                <div className="authors_toggle" onClick={dropDown}>
                    <div className="toggle1">
                        <span className="material-symbols-outlined">group</span>
                        <div>Authors</div>
                    </div>
                    <div className="toggle2">
                        <span className="material-symbols-outlined" style={{transform:!drop ? "rotate(0deg)":"rotate(180deg)",transition:"0.5s"}}>keyboard_arrow_down</span>
                    </div>
                </div>
                <div className="show_authors" style={{height:!drop ? "0px":"300px"}}>
                   
                    {authors.map(item=> <Authors_card data={item} click={toggle_authors} key={item.id}/>)}
                </div>
                <Link className="author_btn">
                    <span className="material-symbols-outlined">add</span>
                    <div>Add new author</div>
                </Link>
            </div>
        </div>
    )
}

export default Home_first
