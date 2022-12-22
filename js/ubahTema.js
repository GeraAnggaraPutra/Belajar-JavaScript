      const button = document.getElementById("button")
      const icon = document.getElementById("icon")
      const navbar = document.getElementById("navbar")
      const col1 = document.getElementById("col1")
      const col2 = document.getElementById("col2")
      button.onclick = () => {
        document.body.classList.toggle("dark-mode")
        if(document.body.classList.contains("dark-mode")){
          col1.className = "col md-6 coltext bg-black text-white"
          col2.className = "col md-6 coltext bg-light text-black"
          button.className = "button-dark"
          navbar.className = "navbar fixed-top navbar-expand-lg bg-dark navbar-dark"
          icon.className = "fas fa-sun text-white"
        }else{
          col2.className = "col md-6 coltext bg-black text-white"
          col1.className = "col md-6 coltext bg-light text-black"
          button.className = "button"
          icon.className = "fas fa-moon text-dark"
          navbar.className = "navbar fixed-top navbar-expand-lg bg-light"
        }
      }