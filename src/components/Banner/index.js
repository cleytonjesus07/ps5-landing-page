"use client"
import { useEffect, useRef, useState } from "react"
import { informations } from "./informations"
import Link from "next/link";

export default function Banner({ seeingVideo, setSeeingVideo }) {
    const [index, setIndex] = useState(0);
    const idTimeout = useRef();
    const consoleImage = "/assets/images/ps5.png"
    const ps5Logo = "/assets/images/ps5-logo.png"

    const handleShowInformation = () => {
        setIndex((old) => {
            if (old >= (informations.length - 1)) {
                return 0;
            }

            return (old + 1);
        })
        return setTimeout(handleShowInformation, 5000);
    }

    useEffect(() => {
        idTimeout.current = handleShowInformation();
        return () => clearTimeout(idTimeout.current);
    }, [])


    return (
        <section className=" flex h-[40rem] w-full bg-animation p-10 ">
            <div className="flex-1 flex-col flex justify-center">
                {/* Info */}
                <div className="flex relative justify-center ">
                    <div style={{ backgroundImage: `url(${ps5Logo})` }} className="relative bg-center bg-no-repeat bg-contain w-48 h-[90px] flex justify-center"></div>
                </div>
                {(!seeingVideo.sliderVideo && seeingVideo.ps5InfoVideo)
                    ?
                    <PlayerDeVideo seeingVideo={seeingVideo} setSeeingVideo={setSeeingVideo} />
                    :
                    (
                        <div className="relative flex flex-col flex-1 justify-center items-center text-center text-white">
                            {informations[index]}
                        </div>
                    )
                }
                <div className="flex flex-col md:flex-row text-white justify-center space-y-10 md:space-y-0 md:space-x-24">
                    <Link href="https://www.playstation.com/pt-br/ps5/buy-now/"
                        className="py-4 px-8 border-l-2 border-t-2 border-gray-500 rounded-lg text-center"
                        onMouseEnter={({ target }) => {
                            target.classList.add("css-selector");
                        }}
                        onMouseLeave={({ target }) => {
                            target.classList.remove("css-selector");
                        }}
                    >
                        <button>Comprar Agora</button>
                    </Link>
                    {seeingVideo.ps5InfoVideo
                        ?
                        (
                            <button className="py-4 px-8 border-l-2 border-t-2 border-gray-500 rounded-lg"
                                onMouseEnter={({ target }) => {
                                    target.classList.add("css-selector");
                                }}
                                onMouseLeave={({ target }) => {
                                    target.classList.remove("css-selector");
                                }}

                                onClick={() => {
                                    if (seeingVideo.sliderVideo) return;
                                    setSeeingVideo({ ...seeingVideo, ps5InfoVideo: false })
                                }}
                            >Fechar vídeo</button>
                        )
                        :
                        (
                            <button className={`py-4 px-8 border-l-2 border-t-2 border-gray-500 rounded-lg disabled:hidden`}
                                disabled={seeingVideo.sliderVideo ? true : false}
                                onMouseEnter={({ target }) => {
                                    target.classList.add("css-selector");
                                }}
                                onMouseLeave={({ target }) => {
                                    target.classList.remove("css-selector");
                                }}

                                onClick={() => {
                                    if (seeingVideo.sliderVideo) return;
                                    setSeeingVideo({ ...seeingVideo, ps5InfoVideo: true })
                                }}
                            >Assistir vídeo</button>
                        )
                    }
                </div>
            </div>
            <div style={{ backgroundImage: `url(${consoleImage})` }} className="hidden bg-center bg-no-repeat bg-contain flex-1 justify-end relative w-full md:flex console-shadow">
                {/* PS5 imagem */}
            </div>
        </section>
    )
}

function PlayerDeVideo({ seeingVideo, setSeeingVideo }) {
    const ps5InfoVideoPath = "/assets/media/ps5.mp4";
    return (
        <div>
            {/* Video */}

            <div
                className="flex w-full h-full  z-[52] bg-opacity-50 justify-center items-center p-10">
                <video
                    className=" w-[900px] h-auto rounded-lg border-8 border-white shadow-2xl shadow-blue-600"
                    src={ps5InfoVideoPath}

                    controls
                    onEnded={() => {
                        setSeeingVideo({ ...seeingVideo, ps5InfoVideo: false })
                        /* Mexendo no vídeo */
                    }}
                ></video>
            </div>
        </div>
    )
}