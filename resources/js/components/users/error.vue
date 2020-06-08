<template>
    <div class="alert alert-danger" role="alert" v-if="errors.length">
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {

        data: function () {
            return {
                //
            }
        },

        mounted() {
            //
        },

        computed: {
            ...mapGetters(['errors']),
        },

        methods: {
            //
        },

    }
</script>
