import React, {ReactNode} from 'react';
import {getRandomUuid} from "@/utils/getUuid";

function TableBody(props:{
    data: { fields:ReactNode[] }[]
}) {
    return (
        <tbody>
        {props.data.map(item=><tr key={getRandomUuid()}>
            {item.fields.map(field=><th scope="row" key={getRandomUuid()}>{field}</th>)}
        </tr>)}
        </tbody>
    );
}

export default TableBody;