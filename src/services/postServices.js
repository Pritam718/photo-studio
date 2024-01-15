import axios from "axios";
import toast from "react-hot-toast";

class Post{
    async create(formData){
        let data={};
        const url="/api/flashes/";
        const config={
            headers:{
                'content-type':'multipart/form-data',
            }
        };
        await axios?.post(url,formData,config)
                .then((res)=>{
                    toast.success(res.data?.msg);
                    data=res.data;
                })
                .catch((err)=>{
                    console.log(err);
                    toast.error(err?.response?.data?.msg);
                });
                return data;
    }
    getPosts(){
        const url="/api/flashes/";
        return axios?.get(url);
    }
}
export default new Post()