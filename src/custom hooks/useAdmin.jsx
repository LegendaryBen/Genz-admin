import {useLayoutEffect} from 'react'
import axios from 'axios'




const useAdmin = (change) => {
    

    useLayoutEffect(()=>{

        let token = localStorage.getItem("genz-admin")?.refresh||'';

        if(token == ''){

            return
            
        }else{

            axios.post("https://gen-zsquare.com/api/token/refresh/",{refresh:token}).then((res)=>{

                localStorage.setItem("genz-admin",JSON.stringify(res.data));


            }).catch((err)=>{
                
                if(err.message !== "Network Error"){
                    localStorage.removeItem("genz-admin");
                    window.location.reload();
                }

            })

        }

    },[])


}

export default useAdmin
