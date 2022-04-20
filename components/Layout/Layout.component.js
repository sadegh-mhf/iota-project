import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import Head from "next/head";

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Home | IOTA</title>
                <link rel="icon" href="/favicon-32x32.png"/>
            </Head>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
};