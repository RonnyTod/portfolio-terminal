<template>
  <div id="app">
    <router-view />
    <Copyright />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
  background-color: black;
  color: lawngreen !important;
}

#app {
  text-transform: uppercase;
  font-family: "vt323", sans-serif;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  > div:first-child {
    flex: 1;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  header {
    font-size: 2rem;
    text-align: left;
  }

  hr {
    width: 30px;
    float: left;
    border: lawngreen solid 2px;
  }

  h4 {
    margin: 0;
    padding: 0;
    text-align: left;
    font-weight: lighter;
  }

  @media screen and (min-width: 800px) {
    width: 800px;
    margin: auto;
  }

  > div {
    hr {
      width: 30px;
      float: left;
      border: lawngreen solid 2px;
    }
    .content {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 100%;
      background-color: black;
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
    .text {
      text-align: left;
      width: 100%;
      background-color: black;
      font-size: 1.5rem;
      p {
        margin: 0;
      }
    }
  }
}
</style>
<script>
import Copyright from "@/components/Copyright";
export default {
  components: { Copyright }
};
</script>
