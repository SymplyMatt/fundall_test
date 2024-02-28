<template>
  <router-view/>
</template>

<style>
  body{
    background: hsl(228, 22%, 95%);
    padding: 30px;
    font-family: "Circular Std", system-ui;
  }
  #app{
    height: 100%;
  }
  .page{
    border: 10px solid #FFFFFF;
    border-radius: 40px;
    height: 100%;
    width: 100%;
    background: #FCFBFC;
    padding: 10px;
  }
  .box-shadow_ {
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  }

  @media only screen and (max-width: 1000px) {
        body {
            height: 100%;
        }
    }
  @media only screen and (min-height: 1100px) {
        body {
            height: 100vh !important;
        }
    }

  @media only screen and (max-width: 350px) {
        body {
          padding: 7px;
        }
    }

    @media only screen and (min-width: 1000px) {
        body {
            height: 100vh;
        }
    }

</style>