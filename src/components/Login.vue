<template>
  <div id="login">
    <h1>Mi App</h1>

    <img alt="Vue logo" class="logo" src="../assets/logo.png">
    <form action="/Home" method="GET" class="login-form">
      <div class="container">

        <label for="uname"><b>Usuario</b></label>
        <input type="text" :placeholder="username" name="uname" required> <!-- asi se imprimie una variable dentro de atributos html -->

        <label for="psw"><b>Contraseña</b></label>
        <input type="text" :placeholder="pass" name="psw" required>
        
        <button type="submit">Ingresar</button>

      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {  
      return { //Este método retorna la información que se quiere mostrar
          username: 'Ingrese su usuario',
          pass: 'Ingrese su contraseña'
      }
  }
}
</script>