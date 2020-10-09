<template>
  <div id="login">
    <h1>Mi App</h1>

    <img alt="Vue logo" class="logo" src="../assets/logo.png">
    <form action="/Home" method="GET" class="login-form">
      <div class="container">

        <label for="uname"><b>Usuario</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>

        <label for="psw"><b>Contraseña</b></label>
        <input type="text" placeholder="Enter Password" name="psw" required>
            
        <button type="submit">Ingresar</button>

      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {  //Este método contiene la información que se quiere mostrar
      return {
          username: 'Ingrese su nombre de usuario',

      }
  }
}
</script>