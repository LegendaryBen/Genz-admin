import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Story_cards from '../Components/Story-cards'
import { useSelector,useDispatch } from 'react-redux'
import { fetchStory } from '../Redux/features/stories/storySlice'
import { jwtDecode } from 'jwt-decode'
import Fectch_error from '../Components/Fectch_error'
import Fetch_empty from '../Components/Fetch_empty'
import Fetch_loader from '../Components/Fetch_loader'




const Stories = (props) => {

    const dispatch = useDispatch();

    const data = useSelector(state=>state.story.data);
    const error = useSelector(state=>state.story.error);
    const loading = useSelector(state=>state.story.loading);

    let id = JSON.parse(localStorage.getItem("genz-author"))?.refresh || '';

    if(id == ''){
        window.location.reload;
    }

    let testId = jwtDecode(id).user_id;


    const final = data.filter((item)=>{
        if(item.author == testId){
            return item
        }
    })



    useEffect(()=>{

        dispatch(fetchStory());

    },[])




    if(loading == true  && error == false){

        return (
            <Fetch_loader/>
        )
    }else if(loading == false && error == true){

        return (
            <Fectch_error/>
        )

    }else if(loading == false && error == false && final.length == 0){

        return (
            <>
               <div className="uploads">
                    <Link className="upload-btn" to='/authors/upload-story'>
                        <span className="material-symbols-outlined">add</span>
                        <div>Upload New Story</div>
                    </Link>
                </div> 
                <Fetch_empty/>
            </>
        )
    }else{

        return (
            <>
                <div className="uploads">
                    <Link className="upload-btn" to='/authors/upload-story'>
                        <span className="material-symbols-outlined">add</span>
                        <div>Upload New Story</div>
                    </Link>
                </div>
                <div className='snippets'>
                    <div className="snippet-header">
                        New Stories
                    </div>
                    {
                        final.map((item,i)=><Story_cards key={i} items={item}/>)
                    }
                </div>
            </>
        )

    }
   
}

export default Stories
