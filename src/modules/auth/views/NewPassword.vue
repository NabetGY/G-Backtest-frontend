<template>

    <v-row justify="center">

        <v-col cols="12" md="6" class="py-16">

            <div class="text-center">
                <v-img
                    height="200"
                    src="https://openclipart.org/download/247320/abstract-user-flat-4.svg"
                ></v-img>
            </div>

            <h1 class="text-center mb-10">Restaurar contraseña</h1>


            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="rules.passwordRules"
                    :type="show ? 'text' : 'password'"
                    name="input-10-2"
                    label="Contraseña"
                    v-model="pass1"
                    @click:append="show = !show"
                    clearable
                >
                </v-text-field>

                <v-text-field
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="rules.passwordRules"
                    :type="show ? 'text' : 'password'"
                    name="input-10-2"
                    label="Repita la contraseña"
                    v-model="pass2"
                    @click:append="show = !show"
                    clearable
                >
                </v-text-field>


                <v-btn block color="success" class="mr-4" @click="validate">
                    Restablecer
                </v-btn>

                <p class="text-center mr-4 mt-4">
                    <router-link :to="{ name: 'login' }">Inicia Sesion</router-link>
                </p>


            </v-form>
        </v-col>

    </v-row>

</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useAuth from "../composables/useAuth"
import Swal from 'sweetalert2'


export default{

    setup() {   
        
        const show = ref(false)
        const valid = ref(true)
        const form = ref(null)
        const pass1 = ref('')
        const pass2 = ref('')

const route = useRoute()
const token = route.query.token


        const router = useRouter()

        const { reset } = useAuth()

        const onSubmit = async() => {

            if ( pass1.value !== pass2.value) {
                Swal.fire({
                    title: 'Error',
                    text: 'Las contraseñas no coiciden!...',
                    icon:'error'
                    })
            }else{

            const { ok, message } = await reset( {password: pass1.value, token } )

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
                        title:'Contraseña restaurada exitosamente!',
                        text:'Ahora inicia sesion en la plataforma.',
                        icon:'success',
                        allowEscapeKey:false,
                        allowOutsideClick:false
                    }
                    ).then((result) => 
                        {
                            if (result.isConfirmed) {
                                router.push({ name: 'login' }) 
                            } 
                        }
                    )
                }
            }
        }

        return {
            show,
            valid,
            form,
            reset,
            pass1,
            pass2,

            validate() {
                form.value.validate().then(val => {
                    if(val.valid){
                        onSubmit()
                    }
                })
            },

            rules: {
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

.box v-img {
   width: 100%;
    max-height: 80vh; 
    object-fit: cover;
}
.icon-size{
    height: 1000px;
}

</style>