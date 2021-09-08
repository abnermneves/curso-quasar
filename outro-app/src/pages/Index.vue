<template>
  <q-page class="container" padding>
    <p class="text-h5">Formulário</p>
    <q-form
    class="row q-col-gutter-md"
    @submit.prevent.stop="onSubmit"
    @reset="onReset"
    ref="myForm">
      <q-input
      square
      outlined
      clearable
      clear-icon="close"
      color="deep-purple"
      v-model="form.nome"
      label="Nome"
      class="col-md-12 col-12"
      :rules="[
        val => val && val.length > 0 || 'Nome obrigatório'
      ]"
      >
        <template v-slot:prepend>
          <q-icon name="person"></q-icon>
        </template>
      </q-input>

      <q-input
      square
      outlined
      clear-icon="close"
      color="deep-purple"
      v-model.number="form.idade"
      type="number"
      label="Idade"
      class="col-md-12 col-12"
      :rules="[
        val => val && val != null && val != '' || 'Idade obrigatória',
        val => val > 0 && val < 100 || 'Idade inválida'
      ]"
      >
        <template v-slot:prepend>
          <q-icon name="person"></q-icon>
        </template>
      </q-input>

      <q-input
      square
      outlined
      clearable
      clear-icon="close"
      color="deep-purple"
      v-model="form.email"
      label="E-mail"
      class="col-md-12 col-12"
      :rules="[
        val => val && val.length > 0 || 'E-mail obrigatório'
      ]"
      sufix="@mail.com"
      >
        <template v-slot:prepend>
          <q-icon name="mail"></q-icon>
        </template>
      </q-input>

      <q-input
      square
      outlined
      clearable
      clear-icon="close"
      color="deep-purple"
      v-model="form.telefone"
      label="Telefone"
      class="col-md-12 col-12"
      mask="(##) #####-####"
      unmasked-value
      :rules="[
        val => val && val !== null || 'Telefone obrigatório'
      ]"
      >
        <template v-slot:prepend>
          <q-icon name="phone"></q-icon>
        </template>
      </q-input>

      <q-input
      square
      outlined
      clearable
      clear-icon="close"
      color="deep-purple"
      v-model="form.password"
      label="Senha"
      class="col-md-12 col-12"
      >
        <template v-slot:prepend>
          <q-icon name="key"></q-icon>
        </template>
      </q-input>

      <q-select
      square
      outlined
      color="deep-purple"
      label="Tipo de pessoa"
      v-model="form.tipoPessoa"
      :options="optionsTipoPessoa"
      class="col-md-12 col-12"
      emit-value
      map-options
      option-label="text"
      option-value="parametro"
      :rules="[
        val => val && val.length > 0 || 'Selecione um tipo de pessoa'
      ]" />
      <div class="col">
        <span class="text-bold">Sexo</span>
        <q-option-group
        :options="optionsSexo"
        type="radio"
        v-model="form.sexo"
        />
      </div>

      <div class="col">
        <span class="text-bold">Possui dificuldades físicas?</span>
        <q-option-group
        :options="optionsDificuldades"
        type="checkbox"
        v-model="form.dificuldades">
        </q-option-group>
      </div>

      <div class="col-12 flex justify-end">
        <q-btn
        type="reset"
        label="Resetar"
        class="q-mr-md"
        >
        </q-btn>

        <q-btn
        type="submit"
        label="Cadastrar"
        color="primary"
        class=""
        >
        </q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      form: {
        nome: 'zé',
        idade: 21,
        email: 'a@a.a',
        telefone: 31999999999,
        password: '12345',
        tipoPessoa: '',
        sexo: 'O',
        dificuldades: []
      },
      optionsTipoPessoa: [
        { text: 'Pessoa física', parametro: 'pf' },
        { text: 'Pessoa jurídica', parametro: 'pj' }
      ],
      optionsSexo: [
        { label: 'Masculino', value: 'M' },
        { label: 'Feminino', value: 'F' },
        { label: 'Outro', value: 'O' }
      ],
      optionsDificuldades: [
        { label: 'Motoras', value: 'motoras', color: 'green' },
        { label: 'Visuais', value: 'visuais', color: 'orange' },
        { label: 'Respiratórias', value: 'respiratorias', color: 'purple' }
      ]
    }
  },

  methods: {
    onSubmit () {
      console.log(this.form)
      this.$q.notify({
        message: 'Cadastro realizado com sucesso!',
        color: 'positive',
        icon: 'check_circle_outline'
      })
      this.onReset()
    },
    async onReset () {
      await this.resetForm()
      this.$refs.myForm.resetValidation()
    },
    resetForm () {
      this.form = {
        nome: '',
        idade: null,
        email: '',
        telefone: null,
        password: '',
        tipoPessoa: '',
        sexo: 'O',
        dificuldades: []
      }
    }

  }
})
</script>
