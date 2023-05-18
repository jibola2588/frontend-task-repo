<template>
  <div>
    <div v-if="loading">
      <p class="text-center mt-5">Loading data...</p>
    </div>
    <div v-else>
        <!-- data : {{ data }} -->
        <p v-if="errorMessage" class="text-center text-red-600 mt-5">{{ errorMessage}}</p>
        <div>
             data
        </div>
    </div>
  </div>
</template>

<script>
import { authAxios } from '../authAxios';



export default {
  name: 'staffList',

  data() {
    return {
      data:[],
      loading:true,
      errorMessage:''
    };
  },
  async mounted() {
    try {
      const response = await authAxios.get('/CompanyUser/All');
      if(response){
        this.loading = false
      }
      console.log(response)
    } catch (error) {
      console.error(error.message);
      this.loading =  false
      this.errorMessage = error.message
    }
  },
};
</script>
