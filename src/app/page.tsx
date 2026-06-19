import Contato from '@/components/Contato';
import Hero from '@/components/Hero';
import PorqueSite from '@/components/PorqueSite';
import Projetos from '@/components/Projetos';
import Servicos from '@/components/Servicos';
import Sistemas from '@/components/Sistemas';
import Sobre from '@/components/Sobre';

export default function Home() {
  return (
    <main>
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre">
        <Sobre />
      </section>
      <PorqueSite />
      <section id="projetos">
        <Projetos />
      </section>
      <section id="sistemas">
        <Sistemas />
      </section>
      <section id="servicos">
        <Servicos />
      </section>
      <Contato />
    </main>
  );
}
