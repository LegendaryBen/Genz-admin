import {useLayoutEffect} from 'react'
import axios from 'axios'




const useAuthor = (change) => {
    

    useLayoutEffect(()=>{

        let token = JSON.parse(localStorage.getItem("genz-author"))?.refresh||'';

        if(token == ''){

            return
            
        }else{

            axios.post("https://gen-zsquare.com/api/token/refresh/",{refresh:token}).then((res)=>{

                localStorage.setItem("genz-author",JSON.stringify(res.data));

            }).catch((err)=>{
                
                if(err.message !== "Network Error"){
                    localStorage.removeItem("genz-author");
                    window.location.reload();
                }

            })

        }

    },[])


}

export default useAuthor
