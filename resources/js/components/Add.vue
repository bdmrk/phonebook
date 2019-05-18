<template>
    <div class="modal" :class='openmodal'>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click='closeModal'></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button" @click='closeModal'>Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
  export default {
    //to pass data we use props
    props:['openmodal'],
    methods:{
      closeModal(){
        this.$emit('closeRequest')
      }
    },
  }

</script>
