import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import tecnology from "../../assets/webp/tecnology.webp"
import Destacados from "../../Components/Destacados"
import { Link } from "react-router-dom"
import tecnology_video from "../../assets/tecnology_video.mp4"


export default
    function Tecnologias() {

    return (
        <>

            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={tecnology} loading="lazy"></img>
            </div>

            <div className="container mt-3">
                <h1 className="text-primary mb-4"><strong>Tecnologías</strong></h1>
                <div id="columnas" className="container mt-3">
                    <p>La impresión 3D en la construcción es una las tecnologías que promete revolucionar el sector en el futuro. La impresión 3D permite un uso en casi cualquier campo y ámbito, desde la arquitectura, la ingeniería, la construcción, el sector aeroespacial, la educación e incluso en la sanidad para el reemplazo de órganos humanos.</p>
                    <p>Muchos expertos consideran esta tecnología como el inicio de la llamada cuarta revolución industrial por el amplio abanico de posibilidades que permite su uso. Hasta ahora, nunca te habías propuesto vivir en un hogar fabricado en 3D ¿verdad? Sin embargo, es posible con 3DREAMS. Vamos a conocer en el siguiente video cómo se fabrican los moldes en 3D.</p>
                    <p>Te parecerá increible esta tecnología de vanguardia, sostenible y resistente a seismos. ¿Quieres aprender más sobre esta tecnología? Modelamos tu hogar de entre los diferentes modelos y estilos arquitectónicos.</p>
                </div>
            </div>
            <div className="container mp4 mt-4 mb-4">
                <video className="container" controls>
                    <source src={tecnology_video} type="video/mp4" />
                </video>
            </div>
            <div className="container mt-3 mb-5">
                <h4 className="container text-secondary"><strong>¿En qué consiste la impresión en 3D?&nbsp;</strong></h4>

                <div id="columnas" className="container mt-3 mb-5">
                    <p>Esta tecnología ha crecido de forma exponencial desde el 2003, al comienzo eran excesivamente caras y con el paso del tiempo se han abaratado los costes y son accesibles a la población (existen algunas a la venta desde los 100 euros), aunque por norma general todavía son un poco caras. </p>
                    <p>Este invento fue diseñado por un ingeniero estadounidense llamado Chuck Hull y patentado en 1986.</p>
                    <p>El proceso actual de la impresión en 3D fue inicialmente llamado como estereolitografía. Consiste en la unión de moléculas gracias al uso de luz láser ultravioleta que crea formas sólidas a partir de un líquido fotopolimérico.</p>
                </div>

                <h4 className="container text-secondary"><strong>¿Cuáles son las principales ventajas de la impresión 3D en la construcción?&nbsp;</strong></h4>
                <h4 className="container text-secondary"><strong>Is 3D modelling worth learning?</strong></h4>
                <div id="columnas" className="container mt-3 mb-5">
                    <p>La impresión 3D en la construcción es una las tecnologías que promete revolucionar el sector en el futuro. La impresión 3D permite un uso en casi cualquier campo y ámbito, desde la arquitectura, la ingeniería, la construcción, el sector aeroespacial, la educación e incluso en la sanidad para el reemplazo de órganos humanos.</p>
                    <p>Muchos expertos consideran esta tecnología como el inicio de la llamada cuarta revolución industrial por el amplio abanico de posibilidades que permite su uso. Hasta ahora, nunca te habías propuesto vivir en un hogar fabricado en 3D ¿verdad? Sin embargo, es posible con 3DREAMS. Vamos a conocer en el siguiente video cómo se fabrican los moldes en 3D.</p>
                    <p>Te parecerá increible esta tecnología de vanguardia, sostenible y resistente a seismos. ¿Quieres aprender más sobre esta tecnología? Modelamos tu hogar de entre los diferentes modelos y estilos arquitectónicos.</p>
                </div>

                <h4 className="container text-secondary"><strong>Is 3D modelling worth learning?</strong></h4>
                <div id="columnas" className="container mt-3 mb-5">
                    <p>La impresión 3D en la construcción es una las tecnologías que promete revolucionar el sector en el futuro. La impresión 3D permite un uso en casi cualquier campo y ámbito, desde la arquitectura, la ingeniería, la construcción, el sector aeroespacial, la educación e incluso en la sanidad para el reemplazo de órganos humanos.</p>
                    <p>Muchos expertos consideran esta tecnología como el inicio de la llamada cuarta revolución industrial por el amplio abanico de posibilidades que permite su uso. Hasta ahora, nunca te habías propuesto vivir en un hogar fabricado en 3D ¿verdad? Sin embargo, es posible con 3DREAMS. Vamos a conocer en el siguiente video cómo se fabrican los moldes en 3D.</p>
                    <p>Te parecerá increible esta tecnología de vanguardia, sostenible y resistente a seismos. ¿Quieres aprender más sobre esta tecnología? Modelamos tu hogar de entre los diferentes modelos y estilos arquitectónicos.</p>
                </div>
            </div>
            <section className="container d-flex justify-content-between my-5 py-5">
                <div className="w-100">
                    <h2>Experiencias de clientes</h2>
                    <p>Clientes internacionales satisfechos con la experiencia 3DREAMS</p>
                    <Link className="btn btn-primary" to="/experiencias">Más experiencias</Link>
                </div>

                <div className="w-100">
                    <figure className="text-end border border-primary border-2 rounded-4 p-5 align-items-center">
                        <blockquote className="blockquote">
                            <p>Justo lo que les pedí y en sólo 2 meses estuvo lista.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite className="mt-3" title="Source Title">Luis Salgado, Sotogrande</cite>
                            <div className="text-black-50 mt-3">
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                                <i className="bi bi-star-fill text-primary"></i>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}
