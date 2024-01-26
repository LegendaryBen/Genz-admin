import Delete_author from "./Delete_author"
import axios from "axios";
import { fetchAuthors } from "../Redux/features/authors/authorsSlice";
import { useDispatch } from "react-redux";


const Authors_card = ({data,click}) => {

    const dispatch = useDispatch()



    const removeAuthor = (id)=>{

            let token = JSON.parse(localStorage.getItem('genz-admin')).access || '';

                if(token == ''){
                    
                    window.location.reload();

                }else{

                    axios.delete(`https://gen-zsquare.com/api/author/${id}` , {
                        headers: {
                        Authorization: `Bearer ${token}`,
                        },
                    })
                    .then(response => {
                        alert("Author was deleted successfully!")
                        dispatch(fetchAuthors());
                    })
                    .catch(error => {
                        alert("An error was encountered when trying to delete the author!")
                    });
    
                }


    }



    return (
        <div className="authors_card" style={{height:!data.dropped ? "50px" : "100px",transition:"0.5s"}}>
            <div className="div4" onClick={()=>{click(data.id)}} >
                <div className="div3">
                    <span className="material-symbols-outlined">person</span>
                    <div>{data.name.length > 17 ? data.name.slice(0,14)+"..." : data.name}</div>
                </div>
                <span className="material-symbols-outlined" style={{transform:!data.dropped ? "rotate(0deg)":"rotate(180deg)",transition:"0.5s"}} >navigate_next</span> 
            </div>
            <div className="div5">
                <Delete_author color="delete_author" text="Delete" item={data} del={true} change={removeAuthor}/>
                <Delete_author color="edit_author" text="Edit" item={data} del={false}/>
            </div>
        </div>
    )
}

export default Authors_card
