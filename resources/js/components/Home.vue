
<template>

    <div>

        <nav class="panel column is-offset-2 is-8">
            <p class="panel-heading">
                VueJs Phone Book
                <button class="button is-primary  is-outlined" @click="openAdd">
                    Add New
                </button>
                <span class="is-pulled-right" v-if="loading">
                    <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>
                </span>
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" placeholder="search">
                    <span class="icon is-small is-left">
      <i class="fa fa-search"></i>
      </span>
                </p>
            </div>

            <a class="panel-block" v-for="item, key in lists">

                <div class="column is-9">
                    {{item.name}}

                </div>
                <span class="panel-icon column _is-1">
      <i class="has-text-danger fa fa-trash" aria-hidden="true" @click="del(key,item.id)"></i>
    </span>
                <span class="panel-icon column _is-1">
      <i class=" has-text-info fa fa-edit" aria-hidden="true" @click="openUpdate(key)"></i>
    </span>
                <span class="panel-icon column _is-1">
      <i class="has-text-success fa fa-eye" aria-hidden="true" @click="openShow(key)"></i>
    </span>
            </a>

        </nav>
        <Add :openmodal ='addActive' @closeRequest='closeModal'></Add>
        <Show :openmodal ='showActive' @closeRequest='closeModal'></Show>
        <Update :openmodal ='updateActive' @closeRequest='closeModal'></Update>

    </div>


</template>

<script>
    let Add =Vue.component('Add', require('./Add.vue').default);
    let Show =Vue.component('Show', require('./Show.vue').default);
    let Update =Vue.component('Update', require('./Update.vue').default);


    export default {
        components:{Add, Show, Update},
        data() {
            return{
                addActive: '',
                showActive: '',
                updateActive: '',
                lists: {}, //to get data
                errors:{}, //to get error
                loading:false, //for loading
            }
        },
        mounted(){
            axios.post('/getData')
                .then((response)=> this.lists = response.data) //to get data
                .catch((error) => this.errors = error.response.data.errors) //if there is error
        },
        methods: {

            openAdd() {
                this.addActive = 'is-active'
            },

            openShow(key) {
                this.$children[1].list = this.lists[key]
                this.showActive = 'is-active'
            },

            openUpdate(key) {
                this.$children[2].list = this.lists[key] //to get updatable data key 2 is use
                this.updateActive = 'is-active'
            },

            del(key,id) {

                if(confirm("Are you sure ?")) {
                    this.loading = !this.loading
                    console.log(`${key} ${id}`)
                    axios.delete(`/phonebook/${id}`)
                            .then((response)=> {
                            this.lists.splice(key, 1);
                            this.loading = !this.loading
                        })
                        .catch((error) => this.errors = error.response.data.errors)
                }

                console.log(`${key} ${id}`)

            },

            closeModal()
            {

                this.addActive = this.showActive = this.updateActive = ''
            },

        },
    }
</script>

