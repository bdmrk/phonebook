<template>
    <div class="modal" :class='openmodal'>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click='closeModal'></button>
    </header>
    <section class="modal-card-body">


      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.name}" type="text" placeholder="Type Name Here" v-model="list.name">
        </div>
        <small v-if="errors.name" class="has-text-danger">{{ errors.name [0] }}</small>
      </div>

      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.phone}" type="number" placeholder="Type Phone Number Here" v-model="list.phone">
        </div>
        <small v-if="errors.phone" class="has-text-danger">{{ errors.phone [0] }}</small>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.email}" type="email" placeholder="Type Your Email Here" v-model="list.email">
        </div>
        <small v-if="errors.email" class="has-text-danger">{{ errors.email [0] }}</small>
      </div>



    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click='saveContact'>Save changes</button>
      <button class="button" @click='closeModal'>Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
  export default {
    //to pass data we use props
    props:['openmodal'],

    data() {
        return {
          list: {
            name: '',
            phone: '',
            email: '',
          },

          errors: {},
        }
    },
    methods:{
      closeModal(){
        this.$emit('closeRequest')
      },
      saveContact() {
        axios.post('/phonebook', this.$data.list).then((response) => this.closeModal())
                .catch((error) => this.errors = error.response.data.errors)
      },
    },
  }

</script>
