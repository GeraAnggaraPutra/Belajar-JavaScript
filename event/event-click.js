<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Event Klik</title>
</head>
<body>
  <button onclick="hello()">Hello</button>
  <button id="hello-bang">Hello Senor</button>

  <script>
    function hello(){
      alert("Hello World");
    }

    const btnLogin = document.getElementById("hello-bang");
    btnLogin.addEventListener("click", function(){
      alert("Hello Gera Anggara");
    });
  </script>
</body>
</html>
