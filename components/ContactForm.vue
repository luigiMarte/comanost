<template>
  <form @submit.prevent="handleSubmit(onSubmit)" class="form-container">
    <div>
      <label for="name">Seu Nome:</label>
      <input
        v-model="formData.name"
        type="text"
        id="name"
        name="name"
        placeholder="nome"
        :class="{
          'is-invalid': v$.name.$error,
          'is-invalidt': !v$.name.$invalid,
        }"
        @change="v$.name.$touch"
      />
      <div v-if="v$.name.$error">
        {{ v$.name.$errors[0].$message }}
      </div>

      <label for="email">Seu email:</label>
      <input
        v-model="formData.email"
        type="text"
        id="email"
        name="email"
        placeholder="example@email.com"
        :class="{
          'is-invalid': v$.email.$error,
          'is-invalidt': !v$.email.$invalid,
        }"
        @change="v$.email.$touch"
      />
      <div v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message }}
      </div>

      <label for="textarea">Sua mensajem:</label>
      <textarea
        v-model="formData.textarea"
        type="textarea"
        id="textarea"
        name="textarea"
        placeholder="sua mensajem"
        :class="{
          'is-invalid': v$.textarea.$error,
          'is-invalidt': !v$.textarea.$invalid,
        }"
        @change="v$.textarea.$touch"
      ></textarea>
      <div v-if="v$.textarea.$error">
        {{ v$.textarea.$errors[0].$message }}
      </div>
      <button type="submit" @click="handleSubmit">Enviar</button>
    </div>
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers, minLength } from "@vuelidate/validators";

const formData = reactive({
  name: "",
  email: "",
  textarea: "",
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("The name field is required", required),
      minLength: helpers.withMessage(
        "The name must be at least 3 characters long",
        minLength(3)
      ),
    },
    email: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    textarea: {
      required: helpers.withMessage("The messajem field is required", required),
      minLength: helpers.withMessage(
        "The name must be at least 3 characters long",
        minLength(3)
      ),
    },
  };
});
const v$ = useVuelidate(rules, formData);

const handleSubmit = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    console.log("Form Data:", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
  } else {
    console.log("Form is invalid");
  }
};
</script>

<style scoped lang="scss">
.form-container {
  //border: 1px solid red;
}
.is-invalid {
  border-color: red;
}
.is-invalidt {
  border-color: rgb(173, 195, 12);
}

form div {
  display: flex;
  flex-direction: column;
  gap: toRem(20);
  max-width: toRem(400);
  margin: auto;
}

label {
  font-weight: bold;
  margin-top: toRem(20);
  margin-bottom: toRem(-10);
}

input,
textarea {
  padding: toRem(10);
  border: toRem(1) solid #ccc;
  border-radius: toRem(5);
}

button {
  padding: toRem(10);
  margin-top: toRem(40);
  background-color: #030303;
  color: white;
  border: toRem(1) solid #ccc;
  border-radius: toRem(5);
  cursor: pointer;
}

button:hover {
  background-color: #888888;
}
</style>
