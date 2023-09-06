import Head from 'next/head'
import NavBar from "@/components/navbar/navBar";
import Table, {itemsBodyTableI, itemsHeadTableI} from "@/components/table/table";
import {GetAllProducts} from "@/api/interfaces";
import DeleteButton from "@/components/BUttons/delete-button";
import UpdateButton from "@/components/BUttons/update-button";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/product`)
    const data:GetAllProducts[]|[] = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}
export default function Home(props:{data:GetAllProducts[]|[]}) {

    const formatTableHeadData:itemsHeadTableI=["NAME","DESCRIPTION","IMG","DELETE","UPDATE"]
    const formatTableBodyData:itemsBodyTableI=props.data?props.data.map(product=>{
        return ({fields:[product.name,product.description,product.img,<DeleteButton id={product._id} />,<UpdateButton id={product._id}/>]})
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
          <div className={"w-full d-flex justify-content-center px-4"}>
                <Table itemsHead={formatTableHeadData} itemsBody={ formatTableBodyData}/>
          </div>
      </main>
    </>
  )
}
