<template>
  <section class="main-projects">
    <div class="two-columns">
      <div>
        <h4>Assessoria Completa e Acompanhamento Durante Todo o Processo</h4>
        <p>
          Entendemos que a jornada de construção pode ser complexa e
          desafiadora. Por isso, nossos especialistas estão sempre disponíveis
          para orientar e aconselhar em cada etapa do processo. Nosso
          compromisso é estar ao seu lado desde o planejamento inicial, passando
          pelo desenvolvimento do projeto, até a execução final, garantindo que
          todas as suas expectativas sejam atendidas com excelência.
        </p>
        <p>
          A nossa equipe está preparada para gerenciar todos os aspectos do seu
          projeto, assegurando que cada detalhe seja cuidadosamente considerado
          e implementado. Oferecemos um acompanhamento contínuo, facilitando a
          comunicação entre todas as partes envolvidas e garantindo que os
          prazos sejam cumpridos e os custos sejam controlados de forma
          eficiente.
        </p>
      </div>
      <div>
        <img src="/images/help.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-projects {
  max-width: 100%;
  margin: 0 auto;
  padding: toRem(20);
  margin-top: toRem(40);
  margin-bottom: toRem(80);

  @include tablet-portrait-up {
    max-width: toRem(1200);
    margin-top: toRem(80);
    padding: toRem(50);
  }

  .two-columns {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
    p {
      margin: toRem(50) 0;
    }
    img {
      width: 100%;
    }
    @include tablet-portrait-up {
      display: flex;
      flex-direction: row;
      gap: toRem(40);
      p {
        margin: toRem(50) 0;
      }
      img {
        width: unset;
      }
    }
  }
}
</style>
