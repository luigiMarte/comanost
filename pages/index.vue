<template>
  <main>
    <div class="background-image-container">
      <img
        class="background-image"
        src="/images/foto-capa-cor.jpg"
        alt="Background Image"
        ref="backgroundImage"
      />
      <div class="centered-slogan">Transformando espaços, inspirando vidas.</div>
    </div>
    <div class="arrow-anchor"><a href="#wellcome"><span class="bounce-arrow"> &#8595</span></a></div>
    <section class="text-home-container">
      <h2 id="wellcome">Bem-vindo à COMANOST</h2>
      <div>
        <p>
          Fundada em 03 de abril de 2006, a Comanost Projeto Ltda., dedica-se à prestação de serviços
          de desenvolvimento, elaboração e assessoria de trabalho técnico para aprovação de projeto
          em todos os órgãos públicos afins na região do Município de São Paulo.
      </p>
      <p>
        Ainda atuamos na elaboração de Projetos de Arquitetura de obra nova, reforma, manutenção,
        restauro, e estruturação de edificações.
      </p>
      </div> 
    </section>
    <section class="text-home-container">
      <h4>Assessoria Jurídica Especializada</h4>
      <div>
        <p>
          A COMANOST também conta com equipe jurídica especializada, com ampla atuação em
          processos administrativos e judiciais relacionados ao direito urbanístico, imobiliário e
          regulatório.
      </p>
      <p>
        Nossa atuação envolve o acompanhamento estratégico de procedimentos perante a Prefeitura
        Municipal, incluindo demandas junto à SMUL, Subprefeituras e demais órgãos municipais, bem
        como atuação especializada perante órgãos de preservação do patrimônio histórico e cultural,
        como o CONPRESP e o CONDEPHAAT.
      </p>
      <p>A equipe jurídica presta assessoria completa em questões relacionadas a:</p>
      <ul>
        <li>aprovação e regularização de projetos;</li>
        <li>processos administrativos municipais;</li>
        <li>autos de infração, multas e embargos;</li>
        <li>imóveis tombados e áreas de preservação;</li>
        <li>transferência de potencial construtivo;</li>
        <li>parcelamento, uso e ocupação do solo;</li>
        <li>acompanhamento de licenciamentos e autorizações;</li>
        <li>ações judiciais envolvendo a municipalidade e órgãos públicos.</li>
      </ul>
      <p>Além da atuação contenciosa e administrativa, a COMANOST realiza análise técnica e jurídica
        da legislação aplicável a cada empreendimento, oferecendo suporte estratégico para tomada
        de decisões, mitigação de riscos e viabilidade jurídica dos projetos.
      </p>
        
      <p>
        Nosso objetivo é proporcionar segurança jurídica, agilidade e soluções integradas, conciliando
        os aspectos técnicos, arquitetônicos e legais de cada demanda.
      </p>
      </div>
    </section> 
    <section class="main-projects">
      <h4>Principais Projetos</h4>
      <MainProjects></MainProjects>
    </section>

    <section class="testimonials">
      <!-- <h4>O que nossos clientes dizem</h4> -->
      <!-- <Testimonials /> -->
      <ContactBanner class="mt-50"/>
    </section>

    <section class="main-clients">
      <h4>Nossos clientes</h4>
      <ul class="clients-list">
        <li>ROBELI</li>
        <li>REDHOUSE</li>
        <li>HOSPITAL ADVENTISTA</li>
        <li>MATUSHITA</li>
        <li>CASA DO RASPADOR</li>
        <li>DIZ ARQUITETURA</li>
        <li>MBIGUCCI CONSTRUTORA</li>
        <li>ITAGUÁ ARQUITETURA E URBANISMO</li>
      </ul>
      <!-- <div class="carousel-cont">
        <MiniCarousel /> 
      </div> -->
    </section>

  </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
.background-image-container {
  position: static;
  top: toRem(100); 
  left: 0;
  width: 100%;
  height: calc(100vh - toRem(100)); 
  overflow: hidden;

  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
  }

.centered-slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $corporate-white; 
    font-size: toRem(30); 
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    padding: toRem(10) toRem(20); 
    border-radius: toRem(8);
  }
}

.text-img-cols {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap:0;
  p {
    margin: toRem(25) 0;
  }
  @include tablet-portrait-up {
    display: flex;
    flex-direction: row;
    max-width: toRem(1200);
    gap: toRem(40);
    p {
      margin: toRem(50) 0;
    }
  }
}

.text-home-container, 
.main-projects,
.services, 
.testimonials,
.main-clients {
  margin: toRem(50) auto;
  padding: 0 toRem(25);

  @include tablet-portrait-up {
    margin: toRem(80) auto;
    padding: 0 toRem(50);
    max-width: toRem(1200);
  }

  .services-img img{
    width: 100%;
    @include tablet-portrait-up {
      width: unset;
    }
  }
}

.text-home-container ul {
  list-style-type: disc;
  padding-left: toRem(20);
  margin: toRem(16) 0 toRem(24);

  li {
    margin-bottom: toRem(8);
  }

  li::marker {
    color: $corporate-golden; // o $corporate-brown, el que encaje con la marca
  }
}

// .carousel-cont {
//   @include tablet-portrait-up {
//     margin: 0 auto;
//     border: 1px solid red;
//     }
// }
.main-clients {
  text-align: center;

  h4 {
    margin-bottom: toRem(24);
  }
}

.clients-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: toRem(16) toRem(32);
  padding: 0;
  margin: 0;

  li {
    color: $corporate-grey;
    font-size: $font-medium;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
}

.arrow-anchor {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  top: toRem(-150);
  a {
    color:$corporate-white ;
    display:flex;
    flex-direction: column;
    span {
      font-size: large;
      align-self: center;
      padding-top: toRem(10);
    }
  }

  .bounce-arrow {
    width: toRem(45);
    height: toRem(30);
    line-height: toRem(14);
    text-align: center;
    font-size: toRem(20);
    animation: bounce-arrow 2.5s ease infinite;
}
  @keyframes bounce-arrow {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
  }
}
</style>
