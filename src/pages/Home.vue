<template>
    <h1>Hello World</h1>
        <h4>Priject Vue Pertama saya</h4>
        <h4>Nama Saya {{ nama }}</h4>
        <h4>Umur Saya {{ tahunlahir }} tahun </h4>
        <input v-model="kotalahir"/>
        <h5>Kota Lahir Saya : {{ kotalahir }} </h5>
        <button v-on:click="next">Next</button>
</template>

<script>
 export default {
     data (){
         return{
             nama: "Muhammad Fikri",
             tahunlahir : 1999,
             kotalahir : "cimahi"
         }
     },
     methods:{
         next(){
             this.tahunlahir += 1;
         }
     },
     mounted(){
         this.tahunlahir = 2021 - this.tahunlahir; 
     }
 }
 </script>