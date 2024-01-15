import axios from "axios";

class Comment{
    create(formData){
        const url="api/photo/comment";
        return axios?.post(url,formData);
    }
}
export default new Comment();