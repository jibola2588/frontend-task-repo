<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div v-if="data.length === 0">
      <p>Loading data...</p>
    </div>
    <div v-else>
       <div class="max-w-[400px] mx-auto p-5 space-y-3 shadow-md">
            <p>Wallet : {{data.balance  }}</p>  
            <p>Outflow : {{data.outflow  }}</p>
            <p>Inflow : {{data.inflow  }}</p>
            <p>Wallet id : {{data.walletId  }}</p>
       </div>
    </div>
  </div>
</template>

<script>
import { authAxios } from '../authAxios';


export default {
  name: 'dashboard',
  data() {
    return {
      data: {},
    };
  },
  async mounted() {
    try {
      const response = await authAxios.get('Dashboard/CompanyOverview')
      console.log(response.data.data.dashboard)
      const resData = response.data.data.dashboard
      this.data = {...resData}
      console.log(this.data)
    } catch (error) {
      console.error(error);
    }
  },

};
</script>
