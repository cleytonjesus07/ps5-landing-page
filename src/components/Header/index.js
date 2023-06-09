import { navMenus, navTopMenus } from "@/utils/navMenus";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const psBlueLogo = "/assets/images/blueLogo.png";
    const ps5Logo = "/assets/images/ps5_logoBlack.png";

    return (
        <header className="block bg-white ">
            <div className="flex px-14">
                {/* Parte 1 do nav */}
                <div
                    style={{ backgroundImage: `url(${psBlueLogo})` }}
                    className="bg-no-repeat bg-center bg-contain w-6 h-6"
                ></div>
                <nav >
                    <ul className="flex items-center h-full gap-4 px-4">
                        {navTopMenus.map((menu, i) => <li key={i}><Link href="#" as={"#"} className="text-[.7em] font-semibold text-gray-500 hover:text-blue-600">{menu} v </Link></li>)}
                    </ul>
                </nav>
            </div>
            <div className="flex px-20 ">
                {/* Parte 2 do nav */}
                <div className="relative w-40 ">
                    <Image src={ps5Logo} fill={true} sizes="10rem" priority={true} className="object-contain right-0" alt="logo PS5"></Image>
                </div>

                <nav className="w-full flex justify-center">
                    <ul className=" flex gap-8 items-center h-20 ">
                        {navMenus.map((menu, i) => <li key={i}><Link href="#" as={"#"} className="flex flex-col justify-center text-sm font-extrabold text-gray-800 hover:text-blue-600  h-20 w-full relative">{menu}<span className={`${(i === 0) && "w-full bg-blue-600 h-1 absolute bottom-0"}`}></span></Link></li>)}
                    </ul>
                </nav>
            </div>
        </header>
    )
}