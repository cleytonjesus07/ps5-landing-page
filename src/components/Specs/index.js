"use client"
import Image from "next/image"
import { useState } from "react"

export default function Specs() {
    const [changeSpecs, setChangeSpecs] = useState(false);
    const ps5Front = "/assets/images/ps5frente.png"
    return (
        <section className="bg-white">
            <h2 className="block text-center p-10 text-4xl font-light ">Escolha uma edição de console para saber mais</h2>
            <div className="flex justify-center items-center gap-4">
                <button className={`relative ${!changeSpecs && "border-b-4 !text-black"} border-blue-600 text-gray-500`} onClick={() => setChangeSpecs(false)}>
                    Console PS5
                </button>
                <button className={`relative ${changeSpecs && "border-b-4 !text-black"} border-blue-600 text-gray-500`} onClick={() => setChangeSpecs(true)}>
                    PS5 Edição Digital
                </button>
            </div>
            <div className="flex justify-center items-center p-10">
                <div className={`flex flex-col md:flex-row ${changeSpecs && "!flex-row-reverse"}`}>
                    <div className="relative hidden md:block flex-1  w-[500px] h-[500px]">
                        <Image alt="Imagem do console PS5 visto de frente" src={ps5Front} fill={true} className="object-contain" sizes="500px" />
                    </div>
                    <div className="flex-1 py-10">
                        <ul className=" md:px-40 space-y-10">
                            {changeSpecs ? <PS5EdicaoDigital /> : <ConsolePS5 />}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ConsolePS5() {
    return (
        <>
            <li>
                <h3 className="font-bold">Mais recursos do console PS5</h3>
                <p className="text-xs mt-2">
                    Compatibilidade regressiva Jogue uma variedade de jogos do PS4™ em seu console PS5.
                </p>
            </li>
            <li>
                <h3 className="font-bold">Jogo turbinado</h3>
                <p className="text-xs mt-2">
                    Curta taxas de quadros mais rápidas e uniformes em jogos selecionados do PS4 e do PS VR.
                </p>
            </li>
            <li>
                <h3 className="font-bold">Atualize jogos do PS4 para jogos digitais do PS5</h3>
                <p className="text-xs mt-2">
                    O console PS5 oferece aos editores de jogos a possibilidade de permitir que os jogadores atualizem seus jogos em disco e digitais do PS4 para jogos digitais do PS5.
                </p>
            </li>
            <li>
                <h3 className="font-bold">Integração do PlayStation®VR</h3>
                <p className="text-xs mt-2">
                    Conecte seu PlayStation VR ao console PS5 para curtir jogos compatíveis com o PS VR. Para configurar seu PS VR com o console PS5, você precisará da PlayStation Camera2 para PS4 e do adaptador para PlayStation Camera (não é necessário comprar).
                </p>
            </li>
        </>
    )
}

function PS5EdicaoDigital() {
    return (
        <>
            <li>
                <h3 className="font-bold">Mais recursos do PS5 Edição Digital</h3>
                <p className="text-xs mt-2">
                    O PS5 Edição Digital é uma versão totalmente digital do console PS5 sem unidade de disco. Entre em sua conta para a PlayStation Network e acesse a PlayStation®Store para comprar e baixar jogos.
                </p>
            </li>
            <li>
                <h3 className="font-bold">Compatibilidade regressiva</h3>
                <p className="text-xs mt-2">
                    Jogue uma variedade de jogos digitais do PS4 em seu PS5 Edição Digital.
                </p>
            </li>
            <li>
                <h3 className="font-bold">Jogo turbinado</h3>
                <p className="text-xs mt-2">
                    Curta taxas de quadros mais rápidas e uniformes em jogos digitais selecionados do PS4 e do PS VR.
                </p>
            </li>
            <li>
                <h3 className="font-bold">Atualize jogos digitais do PS4 para jogos digitais do PS5</h3>
                <p className="text-xs mt-2">
                    O PS5 Edição Digital oferece aos editores de jogos a possibilidade de permitir que os jogadores atualizem seus jogos digitais do PS4 para jogos digitais do PS5.
                </p>
            </li>
        </>
    )
}
