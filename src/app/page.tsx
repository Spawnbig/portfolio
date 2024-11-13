import { HeaderComponent, SocialsComponent, WorkComponent } from "@/components";
import ProjectsComponent from "@/components/projects";
import { WorkData } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen py-16 animated-background grid gap-12">
      <HeaderComponent />
      <section className="flex flex-col mt-20 gap-8">
        <h1 id="about" className="text-4xl font-bold ">
          Nicolas Sanhueza Soto
        </h1>
        <h2 className="text-2xl font-bold text-neutral-content ">
          Ingeniero Informático
        </h2>
        <SocialsComponent />
      </section>
      <section className="gap-7">
        <h3 className="text-lg font-medium my-6">Sobre mi</h3>
        <p className="text-sm">
          Ingeniero Informático, especializado en el desarrollo de aplicaciones
          web. Mi experiencia laboral abarca desde el frontend hasta el backend,
          utilizando tecnologías modernas como Next.js, Angular, NestJS y React
          Native con Expo. Me apasiona enfrentar desafíos técnicos y explorar
          continuamente nuevas tecnologías para aportar soluciones innovadoras.
        </p>
        &nbsp;
        <p className="text-sm">
          He trabajado en proyectos que no solo cumplen con los requisitos
          técnicos, sino que también ofrecen una experiencia de usuario
          intuitiva y atractiva. Prefiero desarrollar aplicaciones que puedan
          integrarse en el mundo real, brindando valor y usabilidad a los
          usuarios finales. Cada proyecto en el que me involucro es una
          oportunidad para aprender y aplicar el conocimiento adquirido, me
          motiva mantener un enfoque constante en la mejora continua.
        </p>
        &nbsp;
        <p className="text-sm">
          Estoy comprometido con el aprendizaje continuo, el autoaprendizaje y
          la innovación en cada proyecto que desarrollo. Mi objetivo es seguir
          creciendo profesionalmente y contribuir a la creación de productos
          digitales impactantes y de alto rendimiento.
        </p>
        &nbsp;
      </section>
      <section className="grid mt-5 gap-5">
        <h3 id="experience" className="text-lg font-medium">
          Experiencia Laboral
        </h3>
        <ol>
          {WorkData.map((work, index) => (
            <WorkComponent key={index} {...work} />
          ))}
        </ol>
      </section>
      <section id="projects" className="gap-12">
        <h3 className="text-lg font-medium my-6">
          Otros Proyectos
        </h3>
        <ProjectsComponent />
      </section>
      <footer className="justify-center gap-5 mt-10 text-neutral-500 text-sm">
        <p>
          Página Web diseñada con la herramienta Figma e implementada a
          través de Next.js y TailwindCSS. Para el despliegue se ha utilizado Vercel.
        </p>
        <p>
          Puedes acceder al repositorio a través del siguiente enlace{" "}
          <a href="https://github.com/Spawnbig/portfolio" target="_blank">
            <span className="text-white">AQUI</span>
          </a>
        </p>
      </footer>
    </main>
  );
}
