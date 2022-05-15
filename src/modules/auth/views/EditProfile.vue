<template>

    <v-row>
        <v-col cols="12" md="6" class="d-none d-md-block">
            <v-img src="@/assets/profile.svg" 
                alt=""
                max-height="500"
                max-width="500"
                contain
                class="mt-15 pt-5">
            </v-img>
        </v-col>

        <v-col cols="12" md="6" class="py-16">

            <h1 class="text-center mb-10">Mi cuenta</h1>

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-card title="Correo electronico" :subtitle="email" class="mb-7" append-icon="mdi-email"></v-card>

                <v-text-field
                    append-icon="mdi-account"
                    v-model="username"
                    :rules="rules.nameRules"
                    label="Nombre de Usuario"
                    clearable
                    required
                ></v-text-field>

                <v-btn block color="success" class="mr-4 mb-4" @click="validate">
                    Actualizar
                </v-btn>

                <v-btn block color="error" class="mr-4 mb-4" @click="onDelete">
                    Eliminar Cuenta
                </v-btn>

            </v-form>
        </v-col>

    </v-row>

</template>

<script setup>
import { computed, ref } from 'vue'
import useAuth from "../composables/useAuth"
import Swal from 'sweetalert2'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

    const valid = ref(true)
    const form = ref(null)
    const username = ref("")

    const store = useStore()
    const router = useRouter()
    const { updateUsername, deleteUser } = useAuth()

    const email = computed( () => store.state.auth.email)
    const usernameValue = computed( () => store.state.auth.username)
    username.value = usernameValue.value


    const validate = () => {
        form.value.validate().then(val => {
            if(val.valid){
                onSubmit()
            }
        })
    }

    const onSubmit = async() => {
        const userData = {
            email: email.value,
            username: username.value
        }

        const { ok, message } = await updateUsername( userData )
        
        if ( !ok ) {
            Swal.fire({
                title: 'Error',
                text: message,
                icon:'error'
            })
        } 
        else  {
            Swal.fire({
                title:'Actualizado',
                text:'Se ha cambiado su nombre de usuario correctamente!...',
                icon:'success',
                allowEscapeKey:false,
                allowOutsideClick:false
            })
        }
    }




    const onDelete = async() => {

        const userData = {
            email: email.value,
        }

        Swal.fire({
            title: 'Estas seguro?',
            text: "Tu cuenta sera eliminada permanentemente!...",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
        })
        .then( async(result) => {
            if (result.isConfirmed) {

                const { ok, message } = await deleteUser( userData )
        
                if ( !ok ) {
                    Swal.fire({
                        title: 'Error',
                        text: message,
                        icon:'error'
                    })
                }
                else {
                    Swal.fire({
                        title:'Eliminado',
                        text: message,
                        icon:'success',
                        allowEscapeKey:false,
                        allowOutsideClick:false
                    })
                    router.push({ name: 'login' }) 
                }  
            }
        })
    }

    const rules = {
        nameRules: [
            value => !!value || 'Nombre de usuario es requerido.',
            value => (value && value.length <= 10) || 'Name must be less than 10 characters',
        ],
    }
                
</script>

<style scoped>

.box v-img {
   width: 100%;
    max-height: 80vh; 
    object-fit: cover;
}

</style>