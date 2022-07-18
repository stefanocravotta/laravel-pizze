<template>
    <div>

        <div v-if="isLoading">
            <LoaderComp />
        </div>

        <div class="d-flex justify-content-between flex-wrap pt-3" v-else>
            <PizzaComp
                v-for="pizza in pizzas"
                :key="`pizza${pizza.id}`"
                :pizza="pizza"
            />
        </div>

    </div>
</template>

<script>
import PizzaComp from '../partials/PizzaComp.vue';
import LoaderComp from '../partials/LoaderComp.vue';
import { apiUrl } from '../../data/config';
    export default {
    name: "ProductsComp",
    components: { PizzaComp, LoaderComp },
    data() {
        return {
            apiUrl,
            pizzas: [],
            ingredients: [],
            pagination: {
                current : null,
                last : null
            },
            isLoading: false
        }
    },
    mounted() {
        this.getApi()
    },
    methods: {
        getApi(){
            axios.get(this.apiUrl)
            .then(r => {
                this.pizzas = r.data.pizzas.data;
                this.ingredients = r.data.ingredients.data;
                this.pagination = {
                    current : r.data.pizzas.current_page,
                    last : r.data.pizzas.last_page,
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
