import "./Galeria.css";

export default function gallery(){
    return(
        <div className="general-window-container">
            <div id="gallery-container" className="content-container">
                <div id="galeriaHeader">
                    <h1 className="title-section" id ="title-section-convenios">GALERIA</h1>
                    <hr className="title-hr"/>
                </div>
                <div id="mainImageGallery_Container">
                    <div id="currentImageGallery">
                        <img src="" alt="" />
                    </div>
                    <div id="captionCurrentImageGallery">
                        <p>SELECCIONE UNA IMAGEN PARA DESPLEGARLA AQUI Y VER SU DESCRIPCIÓN.</p>
                    </div>
                </div>
                <div id="completeItemsGallery_Container">
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(0)} src="https://phantom-marca.unidadeditorial.es/836d4a9e5976318bde3e9f8c0f666f21/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/21/16716506561096.jpg" alt="MESSI1" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(1)} src="https://monesport.cat/app/uploads/sites/12/2022/12/fkr4xxrxgaeu1ah.jpeg" alt="MESSI2" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(2)} src="https://phantom-marca.unidadeditorial.es/836d4a9e5976318bde3e9f8c0f666f21/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/21/16716506561096.jpg" alt="MESSI3" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(3)} src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg" alt="MESSI4" />  
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(4)} src="https://www.ole.com.ar/2023/01/29/BrKobshYZ_300x220__1.jpg" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(5)} src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/12/19/16714678174157.jpg" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(6)} src="https://img.lalr.co/cms/2021/08/05081527/Messi.jpg?size=xl" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(7)} src="https://imagenes.elpais.com/resizer/yHmucT9t8EGEpcB_uJC4ZUILYOo=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XDOZNWNRIKKO53P6RIZRFL46EU.jpg" alt="messiento feliz" />  
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(8)} src="https://www.javeriana.edu.co/recursosdb/20125/877450/EdArtesExterior5.JPG/1ac34131-5867-c981-8aaa-21e74204c109" alt="Artesssss" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(9)} src="https://pbs.twimg.com/media/ECWq8UmW4AAkeUg.jpg" alt="Arca From Hospital" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(10)} src="https://www.javeriana.edu.co/recursosdb/20125/877870/EdIngenieriaLab5.jpg/ecca4529-ab12-869a-68cc-24aca918f1e6" alt="Inge from Cancha" />
                    </div>
                    <div className="individualItemGallery">
                        <img onClick={(e) => setImage(11)} src="https://www.eluniversal.com.co/binrepository/1200x675/0c0/0d0/none/13704/EMIT/universidad-javeriana_6511064_20220727115134.jpg" alt="Campus Lindo" />  
                    </div>
                </div>

                <div id="videosGallery_Container">
                    <div id="headerVideosGallery">
                        <h2>VIDEOS</h2>
                        <p></p>
                    </div>
                    <div id="itemsVideosGallery">
                        <div className="videoItemGallery">
                            <h3>Video Title</h3>
                            <iframe width="300" height="215" src="https://www.youtube.com/embed/kLUKUJxV_3A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>Summary Video</p>
                        </div>
                        <div className="videoItemGallery">
                            <h3>Video Title</h3>
                            <iframe width="300" height="215" src="https://www.youtube.com/embed/kLUKUJxV_3A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>Summary Video</p>
                        </div>
                    </div>
                    <div id="videosGalleryFooter">

                    </div>
                </div>

                <div id="galleryFooter">
                    FIN
                </div>
            </div>
        </div>
    )
}

// window.onload = () => {
//     const imgs = Array.from(document.getElementsByClassName("individualItemGallery"));
//     alert(imgs)
//     if (imgs != null) {
//         imgs.onclick = () => {
//             alert("JDSJD")            
//                 // imgs.forEach((element, index) => {
//                 //     element.addEventListener("click", setImagee(index));
//                 // });
//         }
//     }
// }

function setImage(index) {
    const imgs = Array.from(document.getElementsByClassName("individualItemGallery"));
    const urlImgChoosen = imgs[index].firstChild.src;
    const descriptionImgChoosen = imgs[index].firstChild.alt;

    document.getElementById("currentImageGallery").firstChild.src = urlImgChoosen;
    document.getElementById("captionCurrentImageGallery").firstChild.innerHTML = descriptionImgChoosen;
    window.scrollTo(0, 125);
}
