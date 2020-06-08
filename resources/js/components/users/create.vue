<template>
    <div class="card">
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="add_name">Name</label>
                    <input name="name" v-model="item.name" id="add_name" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="add_email">Email</label>
                    <input name="email" v-model="item.email" id="add_email" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="add_password">Password</label>
                    <input name="password" v-model="item.password" id="add_password" type="password" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="store(item)">Добавить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {

        data: function () {
            return {
                item: {
                    name: '',
                    email: '',
                    password: '',
                },
            }
        },

        mounted() {
            //
        },

        computed: {
            //
        },

        methods: {
            ...mapActions(['store']),
        },

    }
</script>
