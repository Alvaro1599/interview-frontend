import React, {useState} from 'react';
import {updateProductService} from "@/services/productService";
import {router} from "next/client";
import {useRouter} from "next/router";
function UpdateButton(props:{id:string,body:{name: string, description: string, img:string}}) {
    const [input, setInput] = useState(props.body);
    const router=useRouter()

    async function updateProducts(){
        try {
            await updateProductService(props.id,input)
            router.reload()
        }
        catch (e) {
            console.log(e)
        }
    }
    function handleState(data:React.ChangeEvent<HTMLInputElement>) {
        setInput({...input,[data.currentTarget.id]:data.currentTarget.value})
    }
        return (
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Update
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
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
                                    <input type="text" value={input.name} id="name" onChange={handleState}/>
                                </div>
                                <div>
                                    <label className={"text-dark"}>Description:</label>
                                    <input type="text" value={input.description} id="description" onChange={handleState}/>
                                </div>
                                <div>
                                    <label className={"text-dark"}>img:</label>
                                    <input type="text" value={input.img} id="img" onChange={handleState}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={updateProducts}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

}
export default UpdateButton;