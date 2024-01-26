import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-[#2f2f2f] h-svh text-white flex flex-col">
            <div className="w-full h-10 flex justify-around items-center">
                <Image src="/marcacao.png" alt="logo" width={100} height={100} />
                <div className="flex gap-4">
                    <a href="#About">Sobre mim</a>
                    <a href="">Link 2</a>
                    <a href="">Link 3</a>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row flex-1 items-center justify-evenly md:justify-around">
                <div>
                    <h1 className="text-4xl">Vivicius Freiberger</h1>
                    <p>Designer e modelador 3d</p>
                    <button className="bg-green-500 py-2 px-4 rounded-md mt-4">Sobre mim</button>
                </div>
                <div>
                    <Image src="/marcacao.png" alt="user" width={300} height={300} />
                </div>
            </div>
        </div>
    )
}