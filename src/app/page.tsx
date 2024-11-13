import { HeaderComponent, SocialsComponent, WorkComponent } from "@/components";
import { WorkData } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen py-16 animated-background">
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
      <section>
        <h3 id="projects" className="text-lg font-medium mt-6">
          Otros Proyectos
        </h3>
      </section>
    </div>
  );
}
