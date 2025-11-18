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
          Fundada em 03 de abril de 2006, desde então a Comanost Engenharia e Construção Ltda., 
          vem atuando na elaboração de projeto legal para aprovação junto aos órgãos publicos
          de edificações industriais, comerciais e residenciais na região da 
          Grande São Paulo.
      </p>
      <p>
        Dedica-se ainda à prestação de serviços de construção, reforma, manutenção e estruturação 
        de edificações civis e comerciais, assistencia, assessoria, consultoria de trabalho técnico. 
        Assessoria Jurìdica...
      </p>
      </div>
    </section>
    <section class="main-projects">
      <h4>Principais Projetos</h4>
      <MainProjects></MainProjects>
    </section>
    <section class="services">
      <div class="text-img-cols">
        <div>
          <h4>Assessoria Completa e Acompanhamento Durante Todo o Processo</h4>
          <p>
            Entendemos que a jornada de construção pode ser complexa e desafiadora. 
            Por isso, nossos especialistas estão sempre disponíveis para orientar e aconselhar em cada etapa do processo. 
            Nosso compromisso é estar ao seu lado desde o planejamento inicial, passando pelo desenvolvimento do projeto, 
            até a execução final, garantindo que todas as suas expectativas sejam atendidas com excelência.
          </p>
          <p>
            A nossa equipe está preparada para gerenciar todos os aspectos do seu projeto, 
            assegurando que cada detalhe seja cuidadosamente considerado e implementado. 
            Oferecemos um acompanhamento contínuo, facilitando a comunicação entre todas as partes envolvidas e 
            garantindo que os prazos sejam cumpridos e os custos sejam controlados de forma eficiente.
          </p>
        </div>
        <div class="services-img">
          <img src="/images/help.jpg" alt="opinions">
        </div>
      </div>
    </section>
    <section class="testimonials">
      <h4>O que nossos clientes dizem</h4>
      <Testimonials />
      <ContactBanner class="mt-50"/>
    </section>
    <section class="main-clients">
      <h4>Nossos clientes</h4>
      <div class="carousel-cont">
        <!-- <MiniCarousel /> -->
      </div>
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
  margin: 0 auto;
  padding: toRem(25);
  margin-top: toRem(50);
  margin-bottom: toRem(50);

  @include tablet-portrait-up {
    max-width: toRem(1200);
    padding: toRem(50);
    margin-top: toRem(80);
    margin-bottom: toRem(80);
  }

  .services-img img{
    width: 100%;
    @include tablet-portrait-up {
      width: unset;
    }
  }
} 

// .carousel-cont {
//   @include tablet-portrait-up {
//     margin: 0 auto;
//     border: 1px solid red;
//     }
// }

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
