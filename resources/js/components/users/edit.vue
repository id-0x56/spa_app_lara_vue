<template>
    <div class="card">
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="edit_id">ID</label>
                    <input name="id" v-model="item.id" id="edit_id" type="text" class="form-control" readonly>
                </div>
                <div class="form-group">
                    <label for="edit_name">Name</label>
                    <input name="name" v-model="item.name" id="edit_name" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="edit_email">Email</label>
                    <input name="email" v-model="item.email" id="edit_email" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="edit_created_at">Created at</label>
                    <input name="created_at" v-model="item.created_at" id="edit_created_at" type="text" class="form-control" readonly>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="update(item)">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {

        mounted() {
            //
        },

        computed: {
            ...mapGetters(['item']),
        },

        methods: {
            ...mapActions(['update']),
        },

    }
</script>
