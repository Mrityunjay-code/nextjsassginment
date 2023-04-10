import Encabezado from "./header"
import Footer from './footer'

function Layout(props) {
    return (
        <div>
            <Encabezado />

                {props.children}

            <Footer />

        </div>
      
    )
}

export default Layout