<script setup>
import Hello from './Hello.vue'
</script>
<script>
export default {
    data() {
        return {
            count: 0,
            number1: 0,
            number2: 0,
        }
    },
    components: {
        Hello
    },
    methods: {
        // increment() {
        //     console.log("test")
        //     console.log("this.number1")
        // },
        // num1(){
           
        // },
        num2(){
            console.log(this.$refs.ids.value)
        }
    },
    mounted() {
        console.log(this.$refs.ids.value)
    }
}
// defineProps({
//     val: {
//         type: String
//     }
// })

</script>

<template>
    <!-- <input @input="num1" v-model.number="number1" id="text1">
    <select name="" ref="">
        <option value="+">+</option>
        <option value="-">-</option>
    </select> -->
    <!-- <Hello /> -->
    <input @input="num2" type="text" ref="ids" />
    <!-- <h1 @input="increment">Hello from test {{ count }}</h1> -->
</template>