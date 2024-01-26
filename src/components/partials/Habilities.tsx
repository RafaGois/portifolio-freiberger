import Image from "next/image";

export default function Habilities() {
    return (
        <div className="h-svh w-full bg-white flex flex-col md:flex-row">
            <div className="flex-1 bg-red-200">
                <h1 className="text-4xl">Habilidades</h1>
                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ol>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at soluta velit eaque doloremque, dolorem, alias, atque voluptatibus ab nostrum rem quo sapiente. Aspernatur odit dignissimos pariatur voluptatum optio aperiam.</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <Image src="/marcacao.png" alt="img" width={300} height={300}/>
            </div>
        </div>
    )
}