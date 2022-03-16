<template>

    <v-row>
        <v-col cols="12" md="6" class="d-none d-md-block">
            <v-img src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                alt=""
                max-height="550"
                contain
                class="">
            </v-img>
        </v-col>

        <v-col cols="12" md="6" class="py-16">

            <h1 class="text-center mb-10">Registro de Usuario</h1>

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field
                    append-icon="mdi-account-circle"
                    v-model="registerForm.username"
                    :counter="10"
                    :rules="rules.nameRules"
                    label="Nombre de Usuario"
                    clearable
                    required
                ></v-text-field>

                <v-text-field
                    append-icon="mdi-email"
                    v-model="registerForm.email"
                    :rules="rules.emailRules"
                    label="Correo electronico"
                    clearable
                    required
                ></v-text-field>

                <v-text-field
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="rules.passwordRules"
                    :type="show4 ? 'text' : 'password'"
                    name="input-10-2"
                    label="Contraseña"
                    v-model="registerForm.password"
                    @click:append="show4 = !show4"
                    clearable
                >
                </v-text-field>

                <v-btn block color="success" class="mr-4" @click="validate">
                    Registrate
                </v-btn>

                <p class="text-center mr-4 mt-4">
                    ¿Tienes cuenta?<router-link :to="{ name: 'login' }"> !Ingresa ya aqui!...</router-link>
                </p>

            </v-form>
        </v-col>

    </v-row>

              
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from "../composables/useAuth"
import Swal from 'sweetalert2'


export default{

    setup() {   
        
        const show4 = ref(false)
        const valid = ref(true)
        const form = ref(null)

        const router = useRouter()

        const { createUser } = useAuth()

        const registerForm = ref(
            {
                email: "",
                username: "",
                password: "",
            }
        )
        
        const onSubmit= async() => {

            const { ok, message } = await createUser( registerForm.value )
            
            if ( !ok ) {
                Swal.fire('Error', message, 'error')
            } 
            else  {
                Swal.fire(
                {
                    title:'Registro Exitoso',
                    text:'Ahora inicia sesion',
                    icon:'success',
                    allowEscapeKey:false,
                    allowOutsideClick:false
                }
                ).then((result) => 
                    {
                        if (result.isConfirmed) {
                            router.push('login') 
                        } 
                    }
                )
            }
        }

        return {
            show4,
            valid,
            form,
            registerForm,

            rules: {
                emailRules: [
                    value => !!value || 'Correo electronico requerido!',
                    value => /.+@.+\..+/.test(value) || 'El correo tiene que ser valido',
                ],
                nameRules: [
                    value => !!value || 'Nombre de usuario es requerido.',
                    value => (value && value.length <= 10) || 'Name must be less than 10 characters',
                ],
                passwordRules: [
                    value => !! value || 'Requerido.',
                    value => value.length >= 8 || 'Minimo 8 caracteres.',
                    /* value => (`The email and password you entered don't match`), */
                ],
            },

            

            validate() {
                form.value.validate().then(val => {
                    console.log(val.valid)
                    if(val.valid){
                        onSubmit()
                    }
                })
            },
        }
    }

}
</script>

<style scoped>

.box img {
   width: 100%;
    max-height: 100vh; 
    object-fit: cover;
}

</style>