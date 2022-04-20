import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import Head from "next/head";

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Home | IOTA</title>
                <link rel="icon" href="/IOTA_favicon.png"/>
            </Head>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
};