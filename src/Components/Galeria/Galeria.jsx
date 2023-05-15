import "./Galeria.css";
import React, { useState, useRef, useEffect, useCallback } from 'react';

function importAll(r) {
    return r.keys().map(r);
};

const imgs = importAll(require.context('./../../Assets/img/Gallery', false, /\.(jpe?g)$/));

const images = [
    // { src: "https://phantom-marca.unidadeditorial.es/836d4a9e5976318bde3e9f8c0f666f21/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/21/16716506561096.jpg", description: "Descripción de la imagen 1" },
    { src: imgs[0].default, description: "Primer encuentro de ASODIAN con sus afiliados." },
    { src: imgs[1].default, description: "Reunion con el director de la DIAN y las organizaciones sindicales." },
    { src: imgs[2].default, description: "Reunion con el director de la DIAN y las organizaciones sindicales." },
    { src: imgs[3].default, description: "Director de la Dian en la reunion." },
    { src: imgs[4].default, description: "Director de la Dian en la reunion." },
    { src: imgs[5].default, description: "Descripción de la imagen 6" },
    { src: imgs[6].default, description: "Ciclo de Conferencias" },
    { src: imgs[7].default, description: "Inauguración de la oficina de ASODIAN" },
    { src: imgs[8].default, description: "Oficina de ASODIAN" },
    { src: imgs[9].default, description: "Saludo del señor Director a ASODIAN" },
    { src: imgs[10].default, description: "Reunion con el director de la DIAN y las organizaciones sindicales." },
    { src: imgs[11].default, description: "Encuentreo con el señor director y las organizaciones sindicales." },
    { src: imgs[12].default, description: "Reunion con el director de la DIAN y las organizaciones sindicales." },
    { src: imgs[13].default, description: "Reunion con el director de la DIAN y las organizaciones sindicales." },
    // { src: "https://pbs.twimg.com/media/ECWq8UmW4AAkeUg.jpg", description: "Descripción de la imagen 8" },
];

const videos = [
    { id: "video1", src: "https://www.youtube.com/embed/Xx49ku0lheM", title: "¿Que es la Dian?", description: "Ubicación de la DIAN en el contexto nacional, su mapa de procesos, competencias de fiscalización, valoración probatoria y las generalidades de los documentos electrónicos." },
    { id: "video2", src: "https://www.youtube.com/embed/PxChpj7mnd4", title: "Cultura Ciudadana y de Contribucion", description: "Esta conferencia te mostrará el contexto general, objetivo, valores, ciudadanía (antecedente histórico), ciudadanía y Estado ((de derecho y social de derecho), deberes y derechos, dimensiones), obligaciones tributarias, tributos (diferenciación entre tributos e impuestos, clases), características de los impuestos y ciclo de la contribución. " },
];

const Gallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const selectedImageContainerRef = useRef(null);

    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
        selectedImageContainerRef.current.scrollIntoView();
    };

    const handlePrevImage = useCallback(() => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }, []);

    const handleNextImage = useCallback(() => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (selectedImageIndex !== null) {
                if (event.key === 'ArrowLeft') {
                    handlePrevImage();
                } else if (event.key === 'ArrowRight') {
                    handleNextImage();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImageIndex, handlePrevImage, handleNextImage]);

    return (
        <div className="general-window-container">
            <div id="gallery-container" className="content-container">
                <div id="galeriaHeader" ref={selectedImageContainerRef}>
                    <h1 className="title-section" id="title-section-convenios">GALERIA</h1>
                    <hr className="title-hr" />
                    {/* <p id="firstInfoGallery">Seleccione una imagen para visualizarla junto con su descripcion aquí.</p> */}
                </div>
                <div className="selectedImageContainer">
                    {selectedImageIndex !== null && (
                        <>
                            <div className="imageWrapper">
                                <img className="selectedImage" src={images[selectedImageIndex].src} alt={images[selectedImageIndex].description} />
                                <button className="image-nav-button image-nav-prev" onClick={handlePrevImage}>&#10094;</button>
                                <button className="image-nav-button image-nav-next" onClick={handleNextImage}>&#10095;</button>
                                <p>{images[selectedImageIndex].description}</p>
                            </div>
                        </>
                    )}
                </div>

                <div className="mini-gallery">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.description}
                            className={`miniGalleryImage${index === selectedImageIndex ? " selected" : ""}`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>

                <div className="video-section">
                    <h2 className="video-title">★ ---- VIDEOS ---- ★</h2>
                    <div className="video-container">
                        {videos.map((video, index) => (
                            <div key={index} className="video-wrapper">
                                <h3 className="video-title-gallery">{video.title}</h3>
                                <div className="embed-responsive">
                                    <iframe
                                        id={video.id}
                                        className="embed-responsive-item"
                                        src={video.src}
                                        allowFullScreen
                                        title={video.description}
                                    ></iframe>
                                </div>
                                <p className="video-description-gallery">{video.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="galleryFooter">
                    Esta ha sido la galeria de nuestra organizacion sindical, proximamente estaremos subiendo mas contenido; día a día trabajamos por la union y etica sindical.
                </div>
                {/* <div id="mainImageGallery_Container">
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
                </div> */}
            </div>
        </div>
    )
}
export default Gallery;

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

// function setImage(index) {
//     const imgs = Array.from(document.getElementsByClassName("individualItemGallery"));
//     const urlImgChoosen = imgs[index].firstChild.src;
//     const descriptionImgChoosen = imgs[index].firstChild.alt;

//     document.getElementById("currentImageGallery").firstChild.src = urlImgChoosen;
//     document.getElementById("captionCurrentImageGallery").firstChild.innerHTML = descriptionImgChoosen;
//     window.scrollTo(0, 125);
// }
