import "./Galeria.css";

export default function gallery(){
    return(
        <div className="general-window-container">
            <div id="gallery-container" className="content-container">
                <div id="galeriaHeader">
                    <h1 className="title-section" id ="title-section-convenios">GALERIA</h1>
                    <hr className="title-hr"/>
                    <p> Esta es la seccion de la Galeria de Fotos de Nuetra organizacion </p>
                </div>
                <div id="mainImageGallery_Container">
                    <div id="currentImageGallery">
                        <img src="" alt="" />
                    </div>
                    <div id="captionCurrentImageGallery">
                        <p></p>
                    </div>
                </div>
                <div id="completeItemsGallery_Container">
                    <div className="individualItemGallery">
                        <img src="https://phantom-marca.unidadeditorial.es/836d4a9e5976318bde3e9f8c0f666f21/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/21/16716506561096.jpg" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="https://phantom-marca.unidadeditorial.es/836d4a9e5976318bde3e9f8c0f666f21/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/21/16716506561096.jpg" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="https://phantom-marca.unidadeditorial.es/836d4a9e5976318bde3e9f8c0f666f21/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/21/16716506561096.jpg" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />  
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />  
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />
                    </div>
                    <div className="individualItemGallery">
                        <img src="" alt="" />  
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
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kLUKUJxV_3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>Summary Video</p>
                        </div>
                        <div className="videoItemGallery">
                            <h3>Video Title</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kLUKUJxV_3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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