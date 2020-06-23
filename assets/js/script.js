function load() {
  document.getElementById("show").style.display = "none";
  var anio = new Date().getFullYear();
  document.getElementById("anio").innerHTML = "(" + anio + ")";
  var edad = this.calcularEdad("1992/04/02");
  document.getElementById("edad").innerHTML = edad + " años";

  this.obtenerSkills();
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


function showResumen() {
  var content = document.getElementById("content_resumen");
  if (content.style.display === "block" || content.style.display === "") {
    content.style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("hide").style.display = "none";
  } else {
    content.style.display = "block";
    document.getElementById("hide").style.display = "block";
    document.getElementById("show").style.display = "none";
  }

};


function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

function obtenerSkills() {

  fetch("./assets/data/skills.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      var skills = data[0];
      var html = '';
      for (i in skills) {
        html += `
              <div class="col mb-4">
              <div class="card skills" style="text-align: center;">
                <img src="${skills[i].img}" class="" alt="..." style="width: 80px;">
                <div class="card-body"  style="justify-content: center;">
                  <h7 class="card-title">${skills[i].nombre}</h7>
                </div>
              </div>
            </div>
          `;
      }
      document.getElementById("skills").innerHTML = html;
    });
}