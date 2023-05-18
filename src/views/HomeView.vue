<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 flex items-center h-screen">
    <div class="mx-auto max-w-[500px] w-[500px]">
      <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4" v-if="showError">
        <div class="flex items-center gap-2 text-red-800">
          <strong class="block font-medium">{{ errorMessage }}</strong>
        </div>
      </div>

      <form class="mb-0 mt-6 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" @submit="submitForms">
        <p class="text-center text-lg font-medium">Sign in</p>

        <div>
          <label for="email" class="sr-only">Email</label>
          <div class="relative">
            <input
              type="email"
              class="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              v-model="formDatas.email"
              required
              name="email"
              @focus="resetError"
            />
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input
              type="password"
              class="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              v-model="formDatas.password"
              required
              name="password"
              @focus="resetError"
            />
          </div>
        </div>

        <button
          type="submit"
          class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import {authAxios} from '../authAxios'

export default {
  name: 'HomeView',
  data() {
    return {
      formDatas: {
        email: '',
        password: '',
      },
      errorMessage: '',
      showError: false,
    };
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),

    async submitForms(e) {
      e.preventDefault();
      console.log(this.formDatas);

      if (!this.formDatas.email || !this.formDatas.password) {
        this.errorMessage = 'Invalid credentials';
        return;
      }
      try {
        const res = await authAxios.post('Login', this.formDatas);
        console.log(res);
        console.log(res.data.token);
        const token = res.data.token;
        authAxios.defaults.headers.Authorization = ` Bearer ${token}`
        console.log(authAxios.defaults.headers.Authorization);
        this.SET_TOKEN(token);
        localStorage.setItem('token', JSON.stringify(token));
        if(token){
          this.$router.push('/dashboard/companyOverview')
        }
        this.formDatas.email = ''
        this.formDatas.password = ''
      } catch (error) {
        console.log(error.response.data.message);
        this.showError = true;
        this.errorMessage = error.response.data.message;
      } 
    },
    
    resetError() {
      this.showError = false;
      this.errorMessage = '';
    },
  },
  
  mounted() {
    
  }
};
</script>
