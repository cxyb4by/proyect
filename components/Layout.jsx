import Head from "next/head"

export default function Layout(props) {

  return (
    <div>
        <Head>
            <title> --=| Hello world |=-- </title>

        </Head>
        <div>
        
            { props.children }
        </div>
    </div>

  )
}
