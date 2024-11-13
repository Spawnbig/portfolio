import { Projects } from "@/interfaces/projects";

const ProjectsData: Projects[] = [
  {
    image: "/assets/rfra/front.png",
    name: "RutaFronteRA",
    url: "https://rutafrontera.innovalabufro.cl/",
    description:
      "Aplicación de Realidad Aumentada desarrollada para el Instituo del Medio Ambiente de la Universidad de la FronteRA",
    keywords: ["Unity", "Next.JS", "C++", "NestJS"],
  },
  {
    image: "/assets/pokesnapdex/front.png",
    name: "Pokesnapdex",
    url: "https://github.com/Spawnbig/pokesnapdex",
    description:
      "Simulador de Pokedex con un modelo reconocedor de imágenes que trabaja de manera local en el dispositivo móvil",
    keywords: ["React Native", "Expo", "Tensorflow", "Keras"],
  },
];

export default ProjectsData;
