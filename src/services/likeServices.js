import axios from "axios";

class Like{
    create(payload){
        const url="api/photo/like"
        return axios?.post(url,payload)
    }
}

export default new Like();