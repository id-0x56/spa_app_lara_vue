<template>
    <div class="card">
        <div class="card-body">
            <table class="table text-nowrap table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items.data">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.created_at.substr(0, 10) + ' ' + item.created_at.substr(11, 8) }}</td>
                        <td>
                            <button class="btn" @click="show(item.id)" style="padding: 0px 5px"><i class="fa fa-edit"></i></button>
                            <button class="btn" @click="destroy(item.id)" style="padding: 0px 5px"><i class="fa fa-trash-o"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination :data="items" :show-disabled="true" :limit="1" @pagination-change-page="index"></pagination>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {

        mounted() {
            this.index();
        },

        computed: {
            ...mapGetters(['items']),
        },

        methods: {
            ...mapActions(['index', 'show', 'destroy']),
        },

    }
</script>
