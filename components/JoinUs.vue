<template>
  <div class="marketing">
    <h1>Join our Team of Writers</h1>

    <div class="marketing__text">
      <h3>On dasdas, writers earn a living doing what they love.</h3>
      <h3>
        Getting started is easy. Just pay a one time
        <b class="price"> $25 fee</b> and everything is ready to go.
      </h3>
    </div>
    <div class="button__center">
      <button @click="joinUs">Join Us</button>
    </div>
  </div>
</template>

<script></script>
<script>
export default {
  name: "JoinUs",
  methods: {
    joinUs() {
      FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: 25,
        currency: "USD",
        payment_options: "card",
        redirect_url:
          "https://luxury-clafoutis-82d7e8.netlify.app/blog-listing",
        customer: {
          email: "surfersdevelopers@gmail.com",
          phone_number: "09063431256",
          name: "Surfers Developers",
        },
        customizations: {
          title: "Original News",
          description: "Payment for awesome news",
        },
      });
    },
  },
};
</script>

<style>
.marketing {
  margin-bottom: 239px;
  margin-top: 140px;
}

.marketing h1 {
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #2c2c2c;
  margin-bottom: 12px;
}

.marketing h3 {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #6e6e6e;
}

.marketing button {
  padding: 12px 55px;
  color: #ffffff;
  background-color: #000000;
  text-align: center;
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
}

.marketing__text {
  margin-bottom: 35px;
}

.marketing__price {
  font-weight: bold;
}

.button__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
