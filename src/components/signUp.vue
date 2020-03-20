<template>
  <div class="signup">
    <form>
      <h2>SIGN UP</h2>
      <p class="email">
        <label for="mail">
          <div class="label">Email:</div>
          <div v-show="disableErrMail" class="err">Please type email!</div>
        </label>
        <input
          type="email"
          name="mail"
          id="mail"
          class="input"
          v-model="email"
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
          class="input"
          v-model="password"
          placeholder="Password..."
        />
      </p>
      <input type="button" v-on:click="signUp" value="SIGN UP" />
    </form>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      password: "",
      email: "",
      disableErrMail: false,
      disableErrPass: false
    };
  },
  methods: {
    signUp() {
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
        //mail and pass is typed
        this.$store
          .dispatch("check", this.email)
          .then((result) => {
            if(result) {
              alert("Exist Account");
            } else {
              this.$store.dispatch("register", object);
              this.$router.push("/home");
            }
          })
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
