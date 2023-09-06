import Head from 'next/head'
import NavBar from "@/components/navbar/navBar";
import Table, {itemsBodyTableI, itemsHeadTableI} from "@/components/table/table";
import {GetAllProducts} from "@/api/interfaces";
import DeleteButton from "@/components/BUttons/delete-button";
import UpdateButton from "@/components/BUttons/update-button";
import {createProductService} from "@/services/productService";
import React from "react";
import CreateButton from "@/components/BUttons/create-button";
import {router} from "next/client";

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/product`)
    const data:GetAllProducts[]|[] = await res.json()
    return { props: { data } }
}
export default function Home(props:{data:GetAllProducts[]|[]}) {

    const formatTableHeadData:itemsHeadTableI=["NAME","DESCRIPTION","IMG","DELETE","UPDATE"]
    const formatTableBodyData:itemsBodyTableI=props.data?props.data.map(product=>{
        return ({fields:[product.name,product.description,<div><img src={product.img??"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"} style={{width:"50px",height:"50px"}} className="img-fluid img-thumbnail " alt={"avatar"}/></div> ,<DeleteButton id={product._id}  />,<UpdateButton id={product._id} body={product as {name: string, description: string, img:string}}/>]})
    }):[];
    return (
    <>
      <Head>
        <title>Interview Play</title>
        <meta name="description" content="Interview Api details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar/>
      <main>
          <div className={"w-full d-flex justify-content-center p-4"}><CreateButton/></div>


          <div className={"w-full d-flex justify-content-center px-4"}>

                <Table itemsHead={formatTableHeadData} itemsBody={ formatTableBodyData}/>
          </div>
      </main>
    </>
  )
}
