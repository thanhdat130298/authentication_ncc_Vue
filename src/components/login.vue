<template>
  <div class="login">
    <form>
      <h2>LOGIN</h2>
      <p class="email">
        <label for="mail"
          ><div class="label">Email:</div>
          <div v-show="disableErrMail" class="err">
            Please type email!
          </div></label
        >
        <input
          type="email"
          name="mail"
          id="mail"
          v-model="email"
          class="input"
          placeholder="Email..."
        />
      </p>
      <p class="password">
        <label for="pass"
          ><div class="label">Password:</div>
          <div v-show="disableErrPass" class="err">
            Please type Password!
          </div></label
        >
        <input
          type="password"
          name="pass"
          id="pass"
          v-model="password"
          class="input"
          placeholder="Password..."
        />
      </p>
      <button v-on:click.prevent="log">LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      password: "",
      email: "",
      disableErrMail: false,
      disableErrPass: false
    };
  },
  methods: {
    log() {
      let object = {
        email: this.email,
        pass: this.password
      };
      if (this.email == "" && this.password == "") {
        this.disableErrMail = true;
        this.disableErrPass = true;
      } else if (this.email == "") {
        this.disableErrMail = true;
        this.disableErrPass = false;
      } else if (this.password == "") {
        this.disableErrPass = true;
        this.disableErrMail = false;
      } else {
        this.$store.dispatch("login", object).then (()=> {
            this.$router.push("/home"); 
          }
        )
        .catch (()=> {            
             alert("Login false");
          }
        )
        this.disableErrMail = false;
        this.disableErrPass = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.err {
  color: red;
}
label {
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  width: 30%;
  background-color: #4caf50;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  color: white;
  border: 1px solid #fff1;
  border-radius: 4px;
  box-sizing: border-box;
}
input {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 30%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
