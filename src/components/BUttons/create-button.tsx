import React, {useState} from 'react';
import axios from 'axios';
import {createProductService} from "@/services/productService";
import {router} from "next/client";
import {useRouter} from "next/router";
function CreateButton() {
    const router = useRouter()
    const [inputJson, setInputJson] = useState({name: "", description: "", img: ""});
    async function createProducts(){
        try {
            await createProductService(inputJson)
            router.reload()

        }
        catch (e) {
            console.log(e)
        }
    }
    function handleState(data:React.ChangeEvent<HTMLInputElement>) {
        setInputJson({...inputJson,[data.currentTarget.id]:data.currentTarget.value})
    }
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CREATE">
                Create Product
            </button>

            <div className="modal fade" id="CREATE" tabIndex="-1" aria-labelledby="CREATEBODY"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <label className={"text-dark "}>Name:</label>
                                <input type="text" id="name" onChange={handleState}/>
                            </div>
                            <div>
                                <label className={"text-dark"}>Description:</label>
                                <input type="text" id="description" onChange={handleState}/>
                            </div>
                            <div>
                                <label className={"text-dark"}>img:</label>
                                <input type="text" id="img" onChange={handleState}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={createProducts}>Create Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default CreateButton;