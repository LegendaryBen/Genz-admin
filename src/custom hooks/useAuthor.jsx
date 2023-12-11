import {useLayoutEffect} from 'react'
import axios from 'axios'




const useAuthor = (change) => {
    

    useLayoutEffect(()=>{

        let token = localStorage.getItem("genz-author")||'';

        if(token == ''){

            change(false);
            
        }else{

            axios.post("https://gen-zsquare.com/api/token/refresh/",{refresh:token}).then((res)=>{

                change(true);

            }).catch((err)=>{
                
                if(err.message !== "Network Error"){
                    change(false);
                    localStorage.removeItem("genz-author");
                }

            })

        }

    },[])


}

export default useAuthor
