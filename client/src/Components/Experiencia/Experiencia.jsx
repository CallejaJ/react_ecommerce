/* eslint-disable react/prop-types */
import "../../CSS/style.css"




function Experiencia({ experiencias }) {
    return (
        <>

            <section className="container d-flex justify-content mt-4 gap-3">
                {experiencias.map((experiencia, index) => (
                    <div key={index} className="w-100">
                        <figure className="text-end border border-primary border-2 rounded-4 p-5 align-items-right">
                            <blockquote className="blockquote">
                                <p>{experiencia.texto}</p>
                            </blockquote>
                            <figcaption>
                                <cite className=" mt-3" title="Source Title">{experiencia.autor}</cite>
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


                ))}
            </section>
        </>
    )
}

export default Experiencia