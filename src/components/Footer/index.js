import Image from "next/image";
import { TbWorld } from "react-icons/tb"
export default function Footer() {
    const pathLogoSony = "/assets/images/icons/ps-bug.svg"
    const pathSie = "/assets/images/icons/sie.svg"
    return (
        <footer className="text-white flex flex-wrap justify-center py-10 px-30 space-x-10 md:px-60">
            <div className="flex-1">
                {/* Left */}
                <div className="mb-10 space-y-2">
                    <Image src={pathLogoSony} width={40} height={40} />
                    <span className="text-sm font-light flex items-center gap-2"><TbWorld /> Country/Region: Brazil</span>
                </div>
                <div className="flex flex-col space-y-2 ">
                    <Image src={pathSie} width={100} height={100} />
                    <span className="text-sm font-light">© 2021 Sony Interactive Entertainment LLC</span>
                </div>

            </div>
            <div className="flex-1">
                {/* Right */}
                <div className="flex space-x-10">
                    <ul className="flex flex-col font-light text-xs space-y-2">
                        <li>Suporte</li>
                        <li>Política de privacidade</li>
                        <li>Termos de serviço</li>
                        <li>PlayStation Studios</li>
                        <li>Termos de serviço</li>
                        <li>Sobre a SIE</li>
                        <li>PlayStation e o meio ambiente</li>
                    </ul>
                    <ul className="flex flex-col font-light text-xs space-y-2">
                        <li>Termos de serviço e contrato do usuário</li>
                        <li>Política de cancelamento da PS ™Store</li>
                        <li>Avisos sobre saúde</li>
                        <li>Classificacao</li>
                        <li>Carreiras</li>
                        <li>Desenvolvedores</li>
                        <li>Mapa do Site</li>
                    </ul>
                    <ul className="flex flex-col font-light text-xs space-y-2">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                        <li>Instagram</li>
                        <li>Twitch</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}