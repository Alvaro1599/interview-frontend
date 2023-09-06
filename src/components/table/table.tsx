import React, {ReactNode} from 'react';
import TableHead from "@/components/table/table-head";
import TableBody from "@/components/table/table-body";
export type itemsHeadTableI=ReactNode[]
export type itemsBodyTableI={ fields:ReactNode[] }[]

function Table(props:{
    itemsHead:itemsHeadTableI;
    itemsBody:itemsBodyTableI
}) {
    console.log(props)

    return (
        <table className={"table w-75 table-dark table-striped"}>
            {
             props.itemsBody.length>0 && props.itemsBody.length>0 &&
               <>
                <TableHead fields={props.itemsHead}/>
                <TableBody data={props.itemsBody}/>
               </>
}</table>
    );
}

export default Table;