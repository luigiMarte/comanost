<template>
  <section class="main-projects">
    <div class="one-column">
      <h2>Política da qualidade</h2>
      <p>
        O compromisso com nossos clientes deve refletir no atendimento do que
        foi contratado, construindo empreendimentos que garantam qualidade de
        vida, respeitando a comunidade, o meio ambiente e os requisitos
        regulamentares da construção civil, sempre em harmonia com os objetivos
        de desenvolvimento e rentabilidade da empresa.
      </p>
      <p>Para isso, temos dois fundamentos:</p>
      <ul>
        <li>Cliente satisfeito</li>
        <li>Melhoria continua</li>
      </ul>
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
  .one-column {
    margin-bottom: toRem(50);
    @include tablet-portrait-up {
      margin-bottom: toRem(100);
    }
    ul {
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
