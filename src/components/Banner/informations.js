import Image from "next/image";

const ssdImage = "/assets/images/ssd.png"
const ioImage = "/assets/images/io.png"

export const informations = [
    <div className="absolute">
        <h3 className="text-3xl font-extrabold">Jogar Não Tem Limites</h3>
        <p className="font-light m-4">
            Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation®.
        </p>
        <span className="block text-xs font-extralight"> *Áudio em 3D com headphones compatíveis</span>
    </div>,
    <div className="absolute">
        <h3 className="text-3xl font-extrabold">Veloz como um raio</h3>
        <p className="font-light m-4">
            Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer.
        </p>
    </div>,
    <div className="flex absolute">
        <div className="flex-1 flex flex-col justify-center items-center">
            <Image src={ssdImage}
                width={50}
                height={50} />
            <h3 className="text-2xl font-extrabold">SSD ultrarrápido</h3>
            <p className="font-extralight text-sm">
                Maximize suas sessões de jogo com tempos de carregamento praticamente instantâneos para jogos do PS5™ instalados.
            </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
            <Image src={ioImage}
                width={50}
                height={50} />
            <h3 className="text-2xl font-extrabold">E/S integrada</h3>
            <p className="font-extralight text-sm">
                A integração personalizada dos sistemas de console PS5 permite que os criadores extraiam dados do SSD tão rápido que eles podem desenvolver jogos de formas que antes seriam impossíveis.
            </p>
        </div>
    </div>,
    <div className="absolute">
        <h3 className="text-3xl font-extrabold">Jogos impressionantes</h3>
        <p className="font-light m-4">
            Maravilhe-se com os gráficos incríveis e experimente os recursos do novo PS5.
        </p>
    </div>,
    <div className="absolute">
        <h3 className="text-3xl font-extrabold">Imersão de tirar o fôlego</h3>
        <p className="font-light m-4">
            Descubra uma experiência de jogos mais profunda com compatibilidade com resposta tátil, gatilhos adaptáveis e tecnologia de áudio em 3D!.
        </p>
    </div>
]






