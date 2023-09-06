import React from 'react';

function DeleteButton(props:{id:string}) {
    async function handleDelete(id:string){
        try {
            await fetch("http://localhost:3000/product/"+id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode:"no-cors"
            })
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