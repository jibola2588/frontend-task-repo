<template>
  <div>
    <div v-if="showData">
      <p class="text-center mt-5">Loading data...</p>
    </div>
    <div v-else>
        <div class="grid md:grid-cols-2 gap-3 mt-10 px-5">
          <div class='shadow-md w-[400px] p-5 space-y-4'>
          <h3>Company</h3>
          <p>Name : {{ company.name }}</p>
           <p>Email : {{ company.email }}</p>
           <p>Number : {{ company.phoneNumber }} </p>
           <p>Address : {{ company.address }}</p>
           <p>City : {{ company.city }}</p>
        </div>
          <div class='shadow-md w-[400px] p-5 space-y-4'>
          <h3>Wallet : </h3>
           <p>Type : {{ wallet.walletType }}</p>
           <p>Balance :  {{ wallet.balance }}</p>
           <p>Credit limit : {{ wallet.creditLimit }}</p>
           <p>Daily limit : {{ wallet.dailyLimit }}</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { authAxios } from '../authAxios';


export default {
  name: 'company',

  data() {
    return {
      company:{},
      wallet:{},
      showData:true
    };
  },
  async mounted() {
    try {
      const response = await authAxios.get('/Company/Details');
      this.showData = false;
      console.log(response.data.data)
      this.company = {...response.data.data.company}
      this.wallet = {...response.data.data.wallet}
      console.log(this.company)
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
