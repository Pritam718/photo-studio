import axios from "axios";
import toast from "react-hot-toast";

class User{
    async handleUserSignup(formData){
        let data={}
        const url="/api/user";
        const config={
            headers: { 'Content-Type': 'application/json' },
        }
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
     handleUserLogin(formData){
        let data={}
        const url="/api/user/login";
        const config={
            headers: { 'Content-Type': 'application/json' },
        }
        return axios?.post(url,formData,config)
    }
}
// export const login = (formData) => async (dispatch) => {
//     try {
//         const url="/api/user/login";
//       const response = await axios?.post(url,formData,{ withCredentials: true });
//       console.log(response.data); // Handle success as needed
//     } catch (error) {
//       console.error(error); // Handle error as needed
//     }
//   };
export default new User()