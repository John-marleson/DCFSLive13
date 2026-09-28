import Header from "../componentes/Header"
import Footer from "../componentes/Footer"


export default function Template({Children}){
    return(
        <>
        <Header />
        {Children}
        <Footer />
        </>
    )
}