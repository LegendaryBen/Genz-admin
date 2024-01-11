import React,{useState,useRef,useEffect} from 'react'
import Upload_warn from '../Components/Upload-warn'
import Title from '../Components/Title'
import Story from '../Components/Story'
import Categories from '../Components/Categories'
import Upload_Section from '../Components/Upload_Section'
import Submit_section2 from '../Components/Submit_section2'
import Modal from '../Components/Modal'
import Modal3 from '../Components/Modal3'
import Error from '../Components/Error'
import Loader from '../Components/Loader'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { useParams,Navigate,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { fetchMagazineStory } from '../Redux/features/magazine/magazineSlice'




const Edit_magazine_story = (props) => {

    const{ids} = useParams();

    let regex = /[1-9]+/;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    let data = useSelector(state=>state.magazine.data);


    const[warn,setWarn]= useState(false);
    const[message,setMessage] = useState('');
    const[color,setColor] = useState("red");
    const[submit,setSubmit] = useState(false);
    const[title,setTitle] = useState('');
    const[intro,setIntro] = useState('');
    const[body,setBody] = useState('');
    const[category,setCategory] = useState('');
    const[preview,setPreview] = useState(false);
    const[image,setImage] = useState(null);
    const[show,setShow] = useState(null);
    const[source,setSource] = useState('');
    const[storyby,setStoryby] = useState('');
    const[load,setLoad] = useState(false);
    const[remove,setRemove] = useState(false);


    useEffect(()=>{

        dispatch(fetchMagazineStory())

    },[])


    useEffect(()=>{

        if(data.length != 0){


        let pick ;

        for(let i=0;i<data.length;i++){
            
            let check = data[i];

            if( ids == check.id){
                pick = check;

                break;
            }

        }

        setTitle(pick.title);
        setIntro(pick.intro);
        setBody(pick.body);
        setCategory(pick.category);
        setSource(pick.imageSource);
        setStoryby(pick.storyBy);

    }

    },[data.length])



    const selectImage = (e)=>{

        const file = e.target.files[0];

        if(file.type  == "image/jpeg" || file.type == "image/jpg" ){

            if(file.size <= 2675031){

                setImage(file);
                setPreview(true);

                const reader = new FileReader();
    
                reader.onloadend = () => {
                    setShow(reader.result);
                };
            
                reader.readAsDataURL(file);
                setWarn(false);

            }else{

                setWarn(true);
                setMessage("Image file must not be greater than 2mb!");
                setColor("red");

                setTimeout(()=>{

                    setWarn(false);
                    setMessage("");
                    setColor("green");
    
                },4000)
    

            }

        }else{

            setWarn(true);
            setMessage("Select a jpeg or jpg image file!");
            setColor("red");


            setTimeout(()=>{

                setWarn(false);
                setMessage("");
                setColor("green");

            },4000)

        }

        
          

    }



    const removeStory = ()=>{


            let token = JSON.parse(localStorage.getItem("genz-author"))?.access || "";

            if(token  == ''){

                window.location.reload();

            }else{

                setRemove(false)

                setLoad(true);

                axios.delete(`https://gen-zsquare.com/api/story/magazineStory/${ids}`,{
                    headers: {
                      'Authorization': `Bearer ${token}`,
                    },
                  }).then((res)=>{
                    
                    setLoad(false);

                    setWarn(true);
                    setMessage("Story has been deleted successfully");
                    setColor("green");
        
        
                    setTimeout(()=>{
        
                        setWarn(false);
                        setMessage("");
                        setColor("green");
        
                    },4000)

                    setTimeout(()=>{

                        navigate("/authors/magazines");

                    },4100)


                  }).catch((err)=>{

                    setLoad(false);

                    setWarn(true);
                    setMessage("An error occured while deleting the story");
                    setColor("red");


                    setTimeout(()=>{

                        setWarn(false);
                        setMessage("");
                        setColor("green");

                    },4000)

                  })



            }


    }




    const uploadStory = ()=>{

        if(title == "" || intro == "" || body == "" || category == "" || image == null || source == "" || storyby == ""){
  
            setWarn(true);
            setMessage("Input fields must not be empty!");
            setColor("red");


            setTimeout(()=>{

                setWarn(false);
                setMessage("");
                setColor("green");

            },4000)


        }else{

            let token = JSON.parse(localStorage.getItem("genz-author"))?.access || "";

            if(token  == ''){

                window.location.reload();

            }else{

                let id = jwtDecode(token).user_id;

                const formData = new FormData();
                formData.append('image',image);
                formData.append('title',title);
                formData.append('intro',intro);
                formData.append('body',body);
                formData.append('author',id);
                formData.append('category',category);
                formData.append('imageSource',source);
                formData.append('storyBy',storyby);

                setSubmit(false);
                    
                setLoad(true);

                axios.patch(`https://gen-zsquare.com/api/story/magazineStory/${ids}`,formData,{
                    headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'multipart/form-data',
                    },
                  }).then((res)=>{
                    
                    setLoad(false);

                    setWarn(true);
                    setMessage("New story has been added successfully");
                    setColor("green");
        
        
                    setTimeout(()=>{
        
                        setWarn(false);
                        setMessage("");
                        setColor("green");
        
                    },4000)

                    setTimeout(()=>{

                        navigate("/authors/magazines");

                    },4100)


                  }).catch((err)=>{

                    setLoad(false);

                    setWarn(true);
                    setMessage("An error occured while updating the story");
                    setColor("red");


                    setTimeout(()=>{

                        setWarn(false);
                        setMessage("");
                        setColor("green");

                    },4000)

                  })
            }


        }


    }





    return regex.test(ids) == true ?(
        <>
            <Error text={message} colors={color} pos={warn} change={setWarn}/>
            <Title title="Title" val={title} change={setTitle}/>
            <Title title="Intro" val={intro} change={setIntro}/>
            <Story val={body} change={setBody}/>
            <Categories change={setCategory} val={category}/>
            <Upload_Section preview={preview} image={image} select={selectImage} show={show}/>
            <Title title="Image Source" val={source} change={setSource}/>
            <Title title="Story By" val={storyby} change={setStoryby}/>
            <Submit_section2 change1={setSubmit} change2={setRemove} />
            { submit && <Modal cancle={setSubmit} up={uploadStory}/>}
            { remove && <Modal3 cancle={setRemove} up={removeStory}/>} 
            {load && <Loader/>}
        </>
    ):<Navigate to='/authors'/>
}

export default Edit_magazine_story
