import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";

export default function Layout(props) {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
};