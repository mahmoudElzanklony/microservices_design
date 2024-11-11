<template>
<!-- dont forget this at config script =================================> https://www.google.com/recaptcha/api.js-->
  <div class="g-recaptcha mb-2"
       data-sitekey="6Ld2TEclAAAAANpPyGp_2WsRbnOosh29smJPP9uB"
       data-callback="verify_recaptha"
  ></div>
</template>


<script>
  export default {
    name:'RecaptchaComponent',
    props:['stop_execute'],
    methods:{
      loadRecaptcha() {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      },
      verify_recaptha() {
        document.querySelector('*[type="submit"]').removeAttribute('disabled');
        grecaptcha.ready(function() {
          grecaptcha.execute('6Ld2TEclAAAAANpPyGp_2WsRbnOosh29smJPP9uB', {action: 'submit'}).then(function(token) {
            // Add your logic to submit to your backend server here.
            console.log(token)
          });
        });
      },
    },
    mounted() {
      this.loadRecaptcha()
      if(this.stop_execute){
        return false;
      }

      document.querySelector('*[type="submit"]').setAttribute('disabled',true);
      var com = this;
      window.verify_recaptha = function (){
        com.verify_recaptha();
      }

    },
  }
</script>


<style scoped lang="scss">

</style>
