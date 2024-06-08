<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bf-dark text-white text-center">
                    Registrar
                </div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="d-grid col-6 mx-auto mb-3">
                            <img v-if="this.foto" style="height: 100px !important;" :src="this.foto" id="fotoimg"
                                class="img-thumbnail" alt="">
                            <img v-else style="height: 100px !important;"
                                src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-grin-beam-256.png"
                                class="img-thumbnail" id="fotoimg" alt="">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-user"></i>
                            </span>
                            <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese nombre" required
                                maxlength="50" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-user"></i>
                            </span>
                            <input type="text" v-model="apellido" id="apellido" placeholder="Ingrese apellido" required
                                maxlength="50" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-gift"></i>
                            </span>
                            <input v-on:change="previsualizarFoto" type="file" accept="image/png, image/jpeg, image/gif" class="form-control">
                        </div>
                        <div class="d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk">Registrar</i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '../functions.js'
import store from '../store/index.js';


export default {
    data() {
        return {
            nombre: '',
            apellido:'',
            foto:'',
            url:'http://localhost:8000/v1/estudiantes',
            cargando: false,
        }
    },
    methods: {
        guardar() {
            event.preventDefault();
            let miFoto = document.getElementById('fotoimg');
            this.foto = miFoto.src;

            if(this.nombre.trim()===''){
                mostrarAlerta('Ingrese un nombre', 'warning','nombre')
            }else if(this.apellido.trim()===''){
                mostrarAlerta('Ingrese un apellido', 'warning','apellido')
            }else{
                let parametros = {
                    nombre:this.nombre.trim(),
                    apellido:this.apellido.trim(),
                    foto:this.foto.trim(),
                }
                enviarSolicitud('POST',parametros,this.url,'Registrado')
            }
        },
        previsualizarFoto(event){
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function(){
                let miFoto = document.getElementById('fotoimg');
                miFoto.src = reader.result;
                this.foto =  miFoto.src;
            }
        }
    },
}
</script>