<template>
    <div class="card card-body mt-4">
      <form @submit.prevent="onSubmit">
        <div class="form-group col-md-4">
          <label>Name</label>
          <input v-model="form.name" class="form-control" required />
        </div>
  
        <div class="form-group mt-3 col-md-4">
          <label>Email</label>
          <input
            v-model="form.email"
            class="form-control"
            type="email"
            required
          />
        </div>
  
        <button type="submit" class="btn btn-success mt-3">
          Create User
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { createUser } from '../firebase/init'
  import { reactive } from 'vue'
  
  export default {
    setup() {
      const form = reactive({ name: '', email: '' })
  
      const onSubmit = async () => {
        await createUser({ ...form })
        form.name = ''
        form.email = ''
      }
  
      return { form, onSubmit }
    }
  }
  </script>
  