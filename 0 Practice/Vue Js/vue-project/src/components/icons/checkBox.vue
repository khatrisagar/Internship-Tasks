<script>
export default{
    data(){
        return{
            tech:[],
            post: '',
        }
    },
    methods:{
        async fetchData(){
        let response = await fetch(`https://random-data-api.com/api/users/random_user/`)
        let data = await response.json()
        this.post =  data  
        }
    }
}


</script>

<template>
    <h1>Tech: {{ tech }}</h1>
    <!-- <input type="checkbox" value="Node" v-model="tech" id="node">Node -->
    <!-- <input type="checkbox" value="React" v-model="tech" id="react">React -->

    <input type="radio" value="Node" v-model="tech" id="node">Node
    <input type="radio" value="React" v-model="tech" id="react">React
    <input type="radio" value="Java" v-model="tech" id="react">Java
    <input type="radio" value="Vue" v-model="tech" id="vue">Vue

    <p>API DATA:- {{post.first_name}}</p>
    <img :src="`${ post.avatar }`" alt="">
    <button @click="fetchData()">Fetch Data From API</button>

</template>