import React from 'react';
import {deleteProductService} from "@/services/productService";
import {router} from "next/client";
import {useRouter} from "next/router";

function DeleteButton(props:{id:string}) {
    const router = useRouter()
    async function handleDelete(id:string){
        try {
            await deleteProductService(id)
            router.reload()
        }
        catch (e) {
            throw e
        }



    }
    return (
        <button type="button" className="btn btn-outline-danger" onClick={()=>handleDelete(props.id)}>Danger</button>
    );
}

export default DeleteButton;