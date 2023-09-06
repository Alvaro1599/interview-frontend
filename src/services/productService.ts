import axios from "axios";
export async function getProductService() {
    await axios.get("http://localhost:3001/api/product")
}


export async function createProductService(body:{name:string,description:string,img:string}) {
    const response = await fetch("http://localhost:3001/api/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return response.json();
/*    return await axios.post("http://localhost:3001/api/product",body,{headers: {
            'Content-Type': 'application/json'
    }})*/
}

export async function deleteProductService(id) {
    await axios.post("http://localhost:3001/api/product",{
        id,
        type:"DELETE"
    },{
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export async function updateProductService(id,body:{name?:string,description?:string,img?:string}) {
    return  await axios.put("http://localhost:3001/api/product",{...body,id},
        {
            headers:{
                "Content-Type": "application/json",
            },
        })
}