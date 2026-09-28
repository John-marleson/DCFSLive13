import Header from "../componentes/Header"
import Footer from "../componentes/Footer"

export default function Template({ children }) {

    return (<>
        <Header/>
        {children}
        <Footer />
    </>)
}