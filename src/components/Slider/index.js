"use client"
import { BsInfoLg } from "react-icons/bs"
import { GrFormClose } from "react-icons/gr"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useEffect, useRef, useState } from "react"
import { games } from "./gamesInfo";
import Image from "next/image";

export default function Slider({ seeingVideo, setSeeingVideo }) {
    const infoGame = useRef();
    const [index, setIndex] = useState(0);
    const [showWarning, setShowWarning] = useState(true);
    const [seeingInfo, setSeeingInfo] = useState(false);
    const idInterval = useRef();
    const handleSliderImages = (time) => {
        idInterval.current = setInterval(() => {
            setIndex(old => (old >= (games.length - 1)) ? 0 : ++old)
        }, time);

    }

    const startSliderInterval = () => handleSliderImages(8000);
    const clearSliderInterval = () => clearInterval(idInterval?.current);


    useEffect(() => {
        startSliderInterval();
        return () => clearSliderInterval();
    }, []);

    useEffect(() => {
        if (showWarning) return;
        setShowWarning(true);
    }, [seeingInfo, seeingVideo.sliderVideo])

    return (
        <section
            onMouseEnter={() => clearSliderInterval()}
            onMouseLeave={() => {
                if (seeingInfo || seeingVideo.sliderVideo) return;
                startSliderInterval()
            }}

            style={{ width: `calc(100vw*${games.length})`, overflowX: "hidden" }}
            className=" h-[25em] md:h-[35em] relative">
            {seeingVideo.sliderVideo ? <Warning message={"Só é permitido apenas ser executado um vídeo por vez"} showWarning={showWarning} setShowWarning={setShowWarning} /> : seeingInfo && <Warning message={" 'X' <- para fechar o container informativo "} showWarning={showWarning} setShowWarning={setShowWarning} />}
            {seeingVideo.sliderVideo && <PlayerDeVideo games={games} index={index} seeingVideo={seeingVideo} setSeeingVideo={setSeeingVideo} />}

            <div className="absolute z-[51] w-screen h-full flex justify-end">
                {/* Controls */}
                <div className="flex px-3 flex-col justify-center items-end h-full space-y-2">
                    <button
                        title={seeingInfo ? "Fechar informação" : "Ver Informação"}
                        className=" bg-white text-center bg-opacity-30 hover:bg-opacity-100 transition-all rounded-tl-lg rounded-bl-lg py-4 px-8 "
                        onClick={() => {
                            if (seeingInfo) clearSliderInterval();
                            setSeeingInfo(!seeingInfo);
                        }}
                    >{seeingInfo ? <GrFormClose className="icon" /> : <BsInfoLg className="icon" />}</button>
                    <button
                        title={seeingVideo.sliderVideo ? "Fechar vídeo" : "Ver vídeo"}
                        onClick={() => {
                            if (seeingVideo.sliderVideo) clearSliderInterval();
                            if (seeingVideo.ps5InfoVideo) return;
                            setSeeingVideo({ ...seeingVideo, sliderVideo: !seeingVideo.sliderVideo })
                        }}
                        className=" bg-white text-center bg-opacity-30 hover:bg-opacity-100 transition-all rounded-tl-lg rounded-bl-lg py-4 px-8 disabled:hidden"
                        disabled={seeingVideo.ps5InfoVideo ? true : false}
                        >
                        {seeingVideo.sliderVideo ? <AiOutlineEyeInvisible className="icon" /> : <AiOutlineEye className="icon" />}
                    </button>
                </div>
                <div className="absolute flex justify-center bottom-0 w-screen space-x-1">
                    <button
                        className="bg-white bg-opacity-30 hover:bg-opacity-100 transition-all py-2 px-4 rounded-tl-lg font-extrabold"
                        onClick={() => {
                            clearSliderInterval();
                            setIndex(old => (old <= 0) ? (games.length - 1) : --old);

                        }}>
                        {"<"}
                    </button>
                    <button
                        className="bg-white bg-opacity-30 hover:bg-opacity-100 transition-all py-2 px-4 rounded-tr-lg font-extrabold"
                        onClick={() => {
                            clearSliderInterval();
                            setIndex(old => (old >= (games.length - 1)) ? 0 : ++old);

                        }}
                    >
                        {">"}
                    </button>
                </div>
            </div>
            <div ref={infoGame} className={`absolute ${seeingInfo ? "!left-0" : "-left-[100%]"} flex flex-col justify-center items-center  bg-black bg-opacity-75 h-full w-80 z-50 p-10 transition-all ease-in-out `}>
                {/* Info */}
                <div className="h-40 flex items-center text-white font-extrabold text-center"><h3>{games[index].title}</h3></div>
                <div className="flex-1 text-white flex justify-center text-sm font-light">
                    <p>
                        {games[index].desc}
                    </p>
                </div>
            </div>
            <div style={{ translate: `calc(-100vw*${index})`, transition: "ease-in-out 1s" }} className="w-full h-full flex ">
                {/* Imagens */}
                {games.map((game, i) => {
                    return (
                        <div key={i} className="relative w-full h-full">
                            <Image alt={`Imagem do game ${game.title}`} sizes="100%" priority={true} src={game.image} fill={true} className="object-cover object-top" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

function PlayerDeVideo({ games, index, seeingVideo, setSeeingVideo }) {
    return (
        <div>
            {/* Video */}

            <div id="fora" onClick={({ target }) => {
                if (target.id === "fora") {
                    setSeeingVideo({ ...seeingVideo, sliderVideo: false });
                    return;
                }
            }}
                className="flex w-screen h-full bg-black absolute z-[52] bg-opacity-50 justify-center items-center p-10">
                <video
                    className="md:w-[50%] w-[500px] h-auto rounded-lg border-8 border-white shadow-2xl shadow-blue-600"
                    src={games[index].video}
                    poster={games[index].image}
                    controls
                    onEnded={() => {
                        setSeeingVideo({ ...seeingVideo, sliderVideo: false });
                        /* Mexendo no vídeo */
                    }}
                ></video>
            </div>
        </div>
    )
}

function Warning({ message, showWarning, setShowWarning }) {
    return (
        <div className={`from-blue-700 to-blue-600 bg-gradient-to-r  shadow-lg   select-none max-w-xs fixed top-0  z-[53] overflow-hidden   rounded-lg m-2 font-bold text-xs text-white transition-all ease-linear duration-100  ${showWarning ? "right-0" : "-right-96"}`}>
            <span className="flex items-center justify-center p-2">
                <BsInfoLg style={{ width: 50, height: 50, marginRight: 10 }} />
                {message}
            </span>
            <button
                className="flex items-center bg-white w-full p-4 justify-center md:p-2  text-blue-500 "
                onClick={() => {
                    setShowWarning(false);
                }}
            >
                OK
            </button>
        </div>
    )
}

/* function Warning({ seeingInfo, seeingVideo, showWarning, setShowWarning }) {
    return (
        <>
            {(seeingInfo || seeingVideo.sliderVideo) && (

                <div className={`from-blue-700 to-blue-600 bg-gradient-to-r  shadow-lg   select-none max-w-xs fixed top-0  z-[53] overflow-hidden   rounded-lg m-2 font-bold text-xs text-white transition-all ease-linear duration-100  ${showWarning ? "right-0" : "-right-96"}`}>
                    {
                        (seeingInfo && seeingVideo.sliderVideo)
                            ?
                            (
                                <span className="flex items-center justify-center p-2">
                                    <BsInfoLg style={{ width: 50, height: 50, marginRight: 10 }} />
                                    Para que o slide volte a funcionar feche a informação e também o vídeo
                                </span>
                            )
                            :
                            (seeingInfo)
                                ?
                                (
                                    <span className="flex items-center p-2 justify-center">
                                        <BsInfoLg style={{ width: 50, height: 50, marginRight: 10 }} />
                                        Para que o slide volte a funcionar feche a informação clicando/pressionando no "X" {"(na direita)"}
                                    </span>
                                )
                                :
                                (seeingVideo.sliderVideo) &&
                                (
                                    <span className="flex items-center justify-center p-2">
                                        <BsInfoLg style={{ width: 50, height: 50, marginRight: 10 }} />
                                        Para que o slide volte a funcionar feche o vídeo clicando no container que envolve o player de vídeo ou ao término do mesmo
                                    </span>
                                )
                    }

                    <button
                        className="flex items-center bg-white w-full p-4 justify-center md:p-2  text-blue-500 "
                        onClick={() => {
                            setShowWarning(false);
                        }}
                    >
                        OK
                    </button>
                </div>



            )}
        </>
    )
} */