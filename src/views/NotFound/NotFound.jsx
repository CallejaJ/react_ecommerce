import Footer from '../../Components/Footer/Footer'
import error404 from '../../assets/webp/error404.webp'


function NotFound() {
    return (
        <>
            <div className="container mt-5">
                <img src={error404} />
            </div>
            <Footer />
        </>
    )
}

export default NotFound