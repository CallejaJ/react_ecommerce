/* eslint-disable react/prop-types */
import "../../CSS/style.css"




export default function Garantia({ garantias }) {
    return (
        <>

            <section className="container d-flex justify-content mt-4 gap-2">
                {garantias.map((garantia, index) => (
                    <div key={index} className="w-100">
                        <figure className="text-end border border-primary border-2 rounded-4 p-5 align-items-right">
                            <blockquote className="blockquote">
                                <p>{garantia.texto}</p>
                            </blockquote>
                        </figure>
                    </div>


                ))}
            </section>
        </>
    )
}

