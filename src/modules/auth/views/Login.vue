<template>

    <v-row>
        <v-col cols="12" md="6" class="d-none d-md-block ">
            <v-img src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                alt=""
                max-height="550"
                contain
                class="box">
            </v-img>
        </v-col>

        <v-col cols="12" md="6" class="py-16">

            <h1 class="text-center mb-10">Inicio de Sesion</h1>

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field
                    append-icon="mdi-email"
                    v-model="loginForm.email"
                    :rules="rules.emailRules"
                    label="Correo electronico"
                    clearable
                    required
                ></v-text-field>

                <v-text-field
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="rules.passwordRules"
                    :type="show ? 'text' : 'password'"
                    name="input-10-2"
                    label="Contraseña"
                    v-model="loginForm.password"
                    @click:append="show = !show"
                    clearable
                >
                </v-text-field>

                <v-btn block color="success" class="mr-4" @click="validate">
                    Entrar
                </v-btn>

                <p class="text-center mr-4 mt-4">
                    ¿No tienes cuenta?<router-link :to="{ name: 'register' }"> !Registrate ya aqui!...</router-link>
                </p>
                
                <p class="text-center mr-4 mt-4">
                    <router-link :to="{ name: 'recovery' }">¿Olvidaste tu contraseña? </router-link>
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
        
        const show = ref(false)
        const valid = ref(true)
        const form = ref(null)



        const router = useRouter()

        const { loginUser } = useAuth()

        const loginForm = ref(
            {
                email: "",
                password: "",
            }
        )

        const onSubmit = async() => {
            const { ok, message } = await loginUser( loginForm.value )
            
            if ( !ok ) {
                Swal.fire({
                    title: 'Error',
                    text: message,
                    icon:'error'
                    })
            } 
            else  {
                Swal.fire(
                {
                    title:'Inicio Exitoso',
                    text:'Bienvenido a G-BACKTEST',
                    icon:'success',
                    allowEscapeKey:false,
                    allowOutsideClick:false
                }
                ).then((result) => 
                    {
                        if (result.isConfirmed) {
                            router.push({ name: 'backtesting' }) 
                        } 
                    }
                )
            }
        }

        return {
            show,
            valid,
            form,
            loginForm,

            validate() {
                form.value.validate().then(val => {
                    if(val.valid){
                        onSubmit()
                    }
                })
            },

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
            
            
        }
    }

}
</script>

<style scoped>

.box{
    background-color: black;
    border-radius: 10px;

}

.box v-img {
   width: 100%;
    max-height: 80vh; 
    object-fit: cover;
}

img{
    border-radius: 5px;
}

</style>