import Image from "next/image";

export default function About() {
    return (
        <div id="About" className="h-svh w-full flex bg-white flex-col md:flex-row">
            <div className="flex-1">
                <Image src="/marcacao.png" alt="img" width={0} height={0} className="flex-[1] w-full h-full"></Image>
            </div>
            <div className="flex-[2] md:flex-1 flex flex-col justify-center items-center p-4 text-center">
                <h1 className="text-4xl mb-4">Sobre Mim</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestias, ad eius ducimus magnam sint quos minus! Quis, iusto provident perferendis ex cupiditate itaque architecto obcaecati, impedit nemo laboriosam nihil!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate perferendis, facere magni id itaque odio corrupti veniam harum quis aperiam reprehenderit, voluptatum et. Iusto rem dolorum fugit molestiae, omnis explicabo.</p>
            </div>
        </div>
    )
}