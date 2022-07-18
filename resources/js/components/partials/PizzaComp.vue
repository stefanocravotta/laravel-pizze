<template>
        <div class="card mb-4" style="width: calc(100% / 2 - 30px);">
            <img :src="pizza.immagine ? '/image/' + pizza.immagine : '/image/scatola_pizza.png' " class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{pizza.nome}}</h5>
                <p class="card-text">{{pizza.descrizione ? pizza.descrizione : 'Nessuna descrizione'}}</p>
                <!-- <router-link :to="{name: 'details' , params {slug: pizza.slug}}">Mostra</router-link> -->
                <!-- Pizza.slug da aggiungere -->
            </div>
        </div>
</template>

<script>
    export default {
        name: 'PizzaComp',
        props: {
            pizza: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>
