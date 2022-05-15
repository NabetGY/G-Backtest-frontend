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
                    append-icon="mdi-email"
                    v-model="recoveryForm.email"
                    :rules="rules.emailRules"
                    label="Ingresa tu correo electronico"
                    clearable
                    required
                ></v-text-field>


                <v-btn block color="success" class="mr-4" @click="validate">
                    Enviar
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
import { useRouter } from 'vue-router'
import useAuth from "../composables/useAuth"
import Swal from 'sweetalert2'


export default{

    setup() {   
        
        const show = ref(false)
        const valid = ref(true)
        const form = ref(null)



        const router = useRouter()

        const { recovery } = useAuth()

        const recoveryForm = ref(
            {
                email: "",
            }
        )

        const onSubmit = async() => {

            const { ok, message } = await recovery( recoveryForm.value )
            
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
                    title:'Solicitud enviada exitosamente!',
                    text:'Ahora revisa tu correo electronico para restaurar tu contraseña.',
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
            recoveryForm,

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