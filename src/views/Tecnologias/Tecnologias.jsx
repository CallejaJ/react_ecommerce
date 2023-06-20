import Benefits from "../../Components/Benefits/Benefits"
import Footer from "../../Components/Footer"
import tecnology from "../../assets/tecnology.png"
import Destacados from "../../Components/Destacados"
import { experiencia } from "../../Components/Experiencia/ExperienciasDummy"
import Experiencia from "../../Components/Experiencia"
import tecnology_video from "../../assets/tecnology_video.mp4"


export default
    function Tecnologias() {

    return (
        <>

            <div className="container align-items-center" >
                <img className="mt-3 mb-3" src={tecnology} loading="lazy"></img>
            </div>

            <div className="container mt-3">
                <p>By now, you’re probably wondering how to get started with learning 3D modelling. The good news is the resources to do so are readily available. All you need is the motivation to learn and access to the internet!</p>
                <p>Plenty of the software needed to teach yourself the basics are free to download, or at least offer free trials, and there are many resources available online that can help you along the way.&nbsp;</p>
            </div>
            <div className="mp4 mt-4 mb-4">
                <video className="container" controls>
                    <source src={tecnology_video} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <p>By now, you’re probably wondering how to get started with learning 3D modelling. The good news is the resources to do so are readily available. All you need is the motivation to learn and access to the internet!</p>
                <p>Plenty of the software needed to teach yourself the basics are free to download, or at least offer free trials, and there are many resources available online that can help you along the way.&nbsp;</p>
                <h3><span className="ez-toc-section" id="3D_modelling_courses"></span><strong>3D modelling courses&nbsp;</strong><span class="ez-toc-section-end"></span></h3>
                <p>It’s entirely possible to learn the ways of 3D modelling software at home. Online courses are a great way to start, and often guide you through the entire process until you’re comfortable with the software. It’s an easy way to have someone show you the ropes at any time and place.&nbsp;</p>
                <p>We’ve outlined some of our highly-rated courses that will set you up for success within 3D modelling:</p>
                <p>Once you’re comfortable with the fundamentals of 3D modelling, you’ll be able to practice and hone your skills. You’ll be creating games and designing buildings in no time!&nbsp;</p>
                <h4><strong>How to make your 3D model&nbsp;</strong></h4>
                <p>What your first 3D project will depend greatly on where you’re learning and what you’re learning. However, it’s always a good idea to start simple. Pick up the basics and become comfortable with the software you’re using. You’ll eventually pick up the pace and be creating fully-fledged 3D models of anything your heart desires.&nbsp;</p>
                <p>Since a lot of online courses will walk you through the process of making something, you’ll likely start with their suggestion. You could also play around with the software and see if you can make a personal project once you know the basics.&nbsp;</p>
                <p>In our Introduction to 3D modelling course, you’ll learn the basics of 3D modelling and also get the chance to make your very own 3D model project.</p>
                <h4><strong>Is 3D modelling worth learning?</strong></h4>
                <p>The answer to this is simple &#8211; absolutely! The industry is incredibly fast-paced, with lots of room for creativity and job opportunities. Whether you’re eager to find a new hobby or you’re trying to tap into a fun techy career, 3D modelling is the way to go.&nbsp;</p>
                <p>The 3D space is full to the brim with new opportunities. Take the metaverse, for example, a fully three-dimensional environment taking the world by storm. The 3D mapping and modelling market is even projected to <a href="https://www.imarcgroup.com/3d-mapping-modeling-market">grow by 17.2%</a> between 2022-2027.&nbsp;</p>
                <p>With the 3D modelling space being relevant in so many industries and increasing in popularity with increased technological advancements, it’s a great area to work in. Some of the roles you could land yourself with 3D modelling skills include, but are not limited to:&nbsp;</p>
            </div>

            <Experiencia experiencias={experiencia} />
            <Destacados />
            <Benefits />
            <Footer />
        </>
    )
}
