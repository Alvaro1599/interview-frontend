import React, {useState} from 'react';
import axios from 'axios';
function UpdateButton(props:{id:string}) {
    const [input, setInput] = useState({name: "", description: "", img: ""});

    function handlestate(data:React.ChangeEvent<HTMLInputElement>) {
        setInput({...input,[data.currentTarget.id]:data.currentTarget.value})
    }
    async function handleUpdate() {

    }

        return (
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
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
                                    <input type="text" id="name" onChange={handlestate}/>
                                </div>
                                <div>
                                    <label className={"text-dark"}>Description:</label>
                                    <input type="text" id="description" onChange={handlestate}/>
                                </div>
                                <div>
                                    <label className={"text-dark"}>img:</label>
                                    <input type="text" id="img" onChange={handlestate}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Create Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

}
export default UpdateButton;