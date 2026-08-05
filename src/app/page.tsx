import {
  HeaderComponent,
  SocialsComponent,
  WorkComponent,
  CertificationComponent,
} from "@/components";
import ProjectsComponent from "@/components/projects";
import { WorkData, CertificationsData } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen py-16 animated-background flex flex-col gap-16">
      <HeaderComponent />
      <section className="flex flex-col gap-8">
        <h1 id="about" className="text-4xl font-bold ">
          Nicolas Sanhueza Soto
        </h1>
        <h2 className="text-2xl font-bold text-neutral-content ">
          Ingeniero Informático
        </h2>
        <SocialsComponent />
      </section>
      <section className="space-y-4">
        <h3 className="text-xl font-medium">Sobre mi</h3>
        <p className="text-sm">
          Ingeniero Informático, especializado en el desarrollo de aplicaciones
          web. Mi experiencia laboral abarca desde el frontend hasta el backend,
          utilizando tecnologías modernas como Next.js, Angular, NestJS y React
          Native con Expo. Me apasiona enfrentar desafíos técnicos y explorar
          continuamente nuevas tecnologías para aportar soluciones innovadoras.
        </p>
        <p className="text-sm">
          He trabajado en proyectos que no solo cumplen con los requisitos
          técnicos, sino que también ofrecen una experiencia de usuario
          intuitiva y atractiva. Prefiero desarrollar aplicaciones que puedan
          integrarse en el mundo real, brindando valor y usabilidad a los
          usuarios finales. Cada proyecto en el que me involucro es una
          oportunidad para aprender y aplicar el conocimiento adquirido, me
          motiva mantener un enfoque constante en la mejora continua.
        </p>
        <p className="text-sm">
          Estoy comprometido con el aprendizaje continuo, el autoaprendizaje y
          la innovación en cada proyecto que desarrollo. Mi objetivo es seguir
          creciendo profesionalmente y contribuir a la creación de productos
          digitales impactantes y de alto rendimiento.
        </p>
      </section>
      <section className="grid gap-6">
        <h3 id="experience" className="text-xl font-medium">
          Experiencia Laboral
        </h3>
        <ol>
          {WorkData.map((work, index) => (
            <WorkComponent key={index} {...work} />
          ))}
        </ol>
      </section>
      <section className="grid gap-6">
        <h3 id="certifications" className="text-xl font-medium">
          Certificaciones
        </h3>
        <ol>
          {CertificationsData.map((cert, index) => (
            <CertificationComponent key={index} {...cert} />
          ))}
        </ol>
      </section>
      <section id="projects" className="gap-8 w-full grid">
        <h3 className="text-xl font-medium">Otros Proyectos</h3>
        <ProjectsComponent />
      </section>
      <footer className="justify-center gap-5 pt-10 text-base-content/60 text-sm">
        <p>
          Página Web diseñada con la herramienta Figma e implementada a través
          de Next.js y TailwindCSS. Para el despliegue se ha utilizado Vercel.
        </p>
        <p>
          Puedes acceder al repositorio a través del siguiente enlace{" "}
          <a
            href="https://github.com/Spawnbig/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">AQUI</span>
          </a>
        </p>
      </footer>
    </main>
  );
}
