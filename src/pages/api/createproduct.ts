import axios from "axios/index";

export async function createproduct(req,res){
    try {
        await axios.post("http://localhost:3000/product/",input)

    } catch (e) {
        throw e
    }
}