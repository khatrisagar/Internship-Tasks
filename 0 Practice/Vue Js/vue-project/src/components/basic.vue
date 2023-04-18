
<!-- <script setup>
import { ref } from 'vue'
    const count =  ref(0)
</script> -->

<script>
    export default {
        b: 10,

        // interpolation of vue js
        data(){
            return{
                a: 10,
                email: '',
                password: '',
                check(){
                    return "checked from function check"
                }
            }
        },

        methods:{
            getName(){
                return {
                    fName: "--Test",
                    lNamw: "--lName",
                    a : this.a
                }
            },
            showData(){
                console.log(this.password)
                return {
                    pass: this.password,
                    name: this.email,
                }
            }
        }
    }
</script>


<template>
    <!-- <button @click="count++">Click = {{ count }}</button> -->
    <!-- <p>This is the value of a {{ a }}</p> -->
    <!-- <p>This is the value of check {{ check() }}</p> -->
    <p>This is From method {{ getName() }}</p>

    <input type="text" v-model="email">
    <br />
    <br />
    <input type="text" v-model="password">
    <br />
    <br />
    <button @click="showData"> Display Data</button>
    <p>{{ showData().name }}</p>
    <p>{{ showData().pass }}</p>

</template>


<!-- to pass the value from script to template we have to define a data function and return it -->