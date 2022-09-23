<template>
    <v-app>
        <v-app-bar app color="primary" dark>ÓPTICA UMG</v-app-bar>
        <v-container>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>INICIAR SESIÓN</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form ref="form" v-model="valida" lazy-validation>
                                <v-text-field v-model="email" label="Ingrese usuario" :rules="mailRules" required
                                    hint="Ingrese correo">
                                </v-text-field>
                                <v-text-field v-model="password" :type="show?'text':'password'" :counter="10"
                                    label="Ingrese password" required :append-icon="show?'mdi-eye':'mdi-eye-off'"
                                    @click:append="show=!show" hint="Password" :rules="passwordRules">
                                </v-text-field>
                                <v-btn color="red" @click="validar">
                                    valida
                                </v-btn>
                                <v-btn color="info" @click="Reset">
                                    Reset
                                </v-btn>
                                <v-btn color="info" @click="resetForm">
                                    Reset Validation
                                </v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>

export default {
    data() {
        return {
            valida: true,

            email: '',
            password: '',
            show: false,
            nameRules: [
                v => !!v || 'Nombre requerido',
                v => (v && v.length <= 10) || 'El nombre tiene que ser menor a 10 caracteres',
            ],
            mailRules: [
                v => !!v || 'E-mail inválido',
                v => /.+@.+\..+/.test(v) || 'E-mail inválido'
            ],
            passwordRules: [
                v => /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(v) || 'Password incorrecto'
            ]
        }
    },
    methods: {
        validar() {
            this.$refs.form.validate()
        },
        Reset() {
            this.$refs.form.reset()
        },
        resetForm() {
            this.$refs.form.resetValidation()
        }
    }
}
</script>