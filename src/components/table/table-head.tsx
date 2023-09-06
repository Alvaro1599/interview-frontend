import React, {ReactNode} from 'react';
import {getRandomUuid} from "@/utils/getUuid";

function TableHead(props:{
    fields:ReactNode[]
}) {
    return (
        <thead>
        <tr>
                {
                    props.fields.map(field=><th key={getRandomUuid()} scope="col">{field}</th>)
                }
            </tr>
        </thead>
    );
}

export default TableHead;