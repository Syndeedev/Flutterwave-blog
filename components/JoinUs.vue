<template>
  <div class="join_us">
    <h1>Join our Team of Writers</h1>

    <div class="join_us__text">
      <h3>On dasdas, writers earn a living doing what they love.</h3>
      <h3>
        Getting started is easy. Just pay a one time
        <b> $25 fee</b> and everything is ready to go.
      </h3>
    </div>
    <div class="button__center">
      <button @click="joinUs" aria-label="Join Us">Join Us</button>
    </div>
  </div>
</template>

<script></script>
<script>
export default {
  name: "JoinUs",
  methods: {
    joinUs() {
      const publicKey = this.$config.FLUTTERWAVE_PUBLIC_KEY;
      if (!publicKey) {
        return alert("Payment Provider currently not available");
      }

      FlutterwaveCheckout({
        public_key: publicKey,
        tx_ref: "titanic-48981487343hMDI0NzMx",
        amount: 25,
        currency: "USD",
        payment_options: "card",
        redirect_url: "https://cynthia-flutterwave-blog.netlify.app/",
        customer: {
          email: "syndee@mail.com",
          phone_number: "08063453425",
          name: "Rose DeWitt Bukater",
        },
        customizations: {
          title: "Dasdas News",
          description: "Payment for awesome news",
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.join_us {
  margin: 10rem 0 15rem;
  text-align: center;
  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: $color-fl-black;
    margin-bottom: 12px;
  }
  &__text {
    margin: 12px 0 35px;
    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 32px;
      color: #6e6e6e;
    }
  }
  button {
    padding: 12px 55px;
    color: #ffffff;
    background-color: #000000;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
  }
  .button__center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
