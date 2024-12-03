
let estado = "Feliz";
let energia = 100;
let hambre = 100; 
let sed = 100; 
let sueño = 100; 
let humor = 50;

let intervaloHambre;
let intervaloSed;
let intervaloSueño;
let intervaloEnergia;

let modoArmario = false;

function actualizarEstado() {
  if (modoArmario) return; 

  const estadoTexto = document.getElementById("estado");
  const mascotaEstado = document.getElementById("mascotaEstado");
  const requisitosTexto = document.getElementById("requisitos");

  energia = Math.min(Math.max(energia, 0), 100);
  hambre = Math.min(Math.max(hambre, 0), 100);
  sed = Math.min(Math.max(sed, 0), 100);
  sueño = Math.min(Math.max(sueño, 0), 100);

  if (energia <= 0 || hambre <= 0 || sed <= 0) {
    estado = "Triste";
    mascotaEstado.innerHTML = '<img src="img/1000215257-1024x1024-removebg-preview.png" alt="Triste" width="100px">';
  } else if (energia >= 95 && hambre > 30 && sed > 30 && sueño > 30) {
    estado = "Muy Feliz";
    mascotaEstado.innerHTML = '<img src="img/descargar-removebg-preview.png" alt="Muy Feliz" width="100px">';
  } else if (energia >= 80 && hambre > 30 && sed > 30 && sueño > 30) {
    estado = "Feliz";
    mascotaEstado.innerHTML = '<img src="img/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png" alt="Feliz" width="100px">';
  } else {
    estado = "Normal";
    mascotaEstado.innerHTML = '<img src="img/6199d6Z-hcL-removebg-preview.png" alt="Normal" width="100px">';
  }

  estadoTexto.textContent = estado;
  requisitosTexto.textContent = `Para ser muy feliz, necesita más energía, menos hambre y menos sed.`;

  document.getElementById("energiaBar").style.width = energia + "%";
  document.getElementById("hambreBar").style.width = hambre + "%";
  document.getElementById("sedBar").style.width = sed + "%";
  document.getElementById("sueñoBar").style.width = sueño + "%";
}

function mostrarComida() {
  document.getElementById("foodContainer").style.display = "flex"; 
  document.getElementById("drinkContainer").style.display = "none"; 
}

function mostrarBebidas() {
  document.getElementById("drinkContainer").style.display = "flex"; 
  document.getElementById("foodContainer").style.display = "none"; 
}

function alimentar(comida) {
  if (comida === 'hamburguesa') {
    hambre = Math.min(hambre + 30, 100); 
  } else if (comida === 'manzana') {
    hambre = Math.min(hambre + 20, 100);
  } else if (comida === 'comida_balanceada') {
    hambre = Math.min(hambre + 40, 100);
  } else if (comida === 'pizza') {
    hambre = Math.min(hambre + 35, 100); 
  } else if (comida === 'ensalada') {
    hambre = Math.min(hambre + 25, 100); 
  } else if (comida === 'pastel') {
    hambre = Math.min(hambre + 50, 100); 
  }
  document.getElementById("foodContainer").style.display = "none";
  actualizarEstado();
}

function darBebida(bebida) {
  if (bebida === 'agua') {
    sed = Math.min(sed + 30, 100); 
  } else if (bebida === 'jugo') {
    sed = Math.min(sed + 25, 100); 
  } else if (bebida === 'te') {
    sed = Math.min(sed + 20, 100); 
  } else if (bebida === 'refresco') {
    sed = Math.min(sed + 35, 100); 
  } else if (bebida === 'cafe') {
    sed = Math.min(sed + 40, 100); 
  } else if (bebida === 'leche') {
    sed = Math.min(sed + 30, 100); 
  } else if (bebida === 'smoothie') {
    sed = Math.min(sed + 45, 100); 
  }
  document.getElementById("drinkContainer").style.display = "none";
  actualizarEstado();
}

function hacerReir() {
  energia = Math.min(energia + 20, 100);
  actualizarEstado();
  reiniciarTemporizadorEnergia(); 
}

function dormir() {
  sueño = Math.min(sueño + 30, 100);
  actualizarEstado();
  reiniciarTemporizadorSueño(); 
}

function toggleModoArmario() {
  const armarioContainer = document.getElementById("armarioContainer");
  const modoArmarioStatus = document.getElementById("modoArmarioStatus");

  if (armarioContainer.style.display === "none") {
    armarioContainer.style.display = "block";
    modoArmarioStatus.innerText = "Modo Armario: Activado";
    modoArmario = true;
  } else {
    armarioContainer.style.display = "none";
    modoArmarioStatus.innerText = "Modo Armario: Desactivado";
    modoArmario = false;
    reiniciarTemporizadores(); // Reanudar los temporizadores
  }
}

function cambiarImagenArmario(modo) {
  let imagenSeleccionada = "";

  if (modo === 'modo1') {
    imagenSeleccionada = "img/PIG2Gvn-removebg-preview.png";
  } else if (modo === 'modo2') {
    imagenSeleccionada = "img/sym1lm1pkmo31-removebg-preview.png";
  } else if (modo === 'modo3') {
    imagenSeleccionada = "img/descargar.jpg";
  } else if (modo === 'modo4') {
    imagenSeleccionada = "img/descargar (1).jpg";
  } else if (modo === 'modo5') {
    imagenSeleccionada = "img/Rei Chiquita.jpg";
  } else if (modo === 'modo6') {
    imagenSeleccionada = "img/_Arre__rei_chikita_en_pochita-removebg-preview.png";
  } else if (modo === 'modo7') {
    imagenSeleccionada = "img/Rei_chiquita_xd-removebg-preview.png";
  } else if (modo === 'modo8') {
    imagenSeleccionada = "img/94e67590-9b2c-487f-818b-541bd569c78f.jpg";
  } else if (modo === 'modo9') {
    imagenSeleccionada = "img/Rei chikita subrealista.jpg";
  }

  const mascotaImagen = document.getElementById("mascotaEstado").getElementsByTagName("img")[0];
  mascotaImagen.src = imagenSeleccionada;

  // Cerrar el emergente y mantener la imagen visible durante 5 segundos
  document.getElementById("armarioContainer").style.display = "none";
  document.getElementById("modoArmarioStatus").innerText = "Modo Armario: Desactivado";
  
  setTimeout(() => {
    modoArmario = false;
    reiniciarTemporizadores(); // Reanudar los temporizadores
    actualizarEstado();
  }, 5000); // Cambia este valor a 10000 para 10 segundos
}

function reiniciarTemporizadores() {
  reiniciarTemporizadorHambre();
  reiniciarTemporizadorSed();
  reiniciarTemporizadorSueño();
  reiniciarTemporizadorEnergia();
}


function reiniciarTemporizadorHambre() {
  if (intervaloHambre) clearInterval(intervaloHambre);
  intervaloHambre = setInterval(() => {
    if (!modoArmario) {
      hambre = Math.max(hambre - 5, 0);
      actualizarEstado();
    }
  }, 10000);
}

function reiniciarTemporizadorSed() {
  if (intervaloSed) clearInterval(intervaloSed);
  intervaloSed = setInterval(() => {
    if (!modoArmario) {
      sed = Math.max(sed - 5, 0);
      actualizarEstado();
    }
  }, 12000);
}

function reiniciarTemporizadorSueño() {
  if (intervaloSueño) clearInterval(intervaloSueño);
  intervaloSueño = setInterval(() => {
    if (!modoArmario) {
      sueño = Math.max(sueño - 3, 0);
      actualizarEstado();
    }
  }, 15000);
}

function reiniciarTemporizadorEnergia() {
  if (intervaloEnergia) clearInterval(intervaloEnergia);
  intervaloEnergia = setInterval(() => {
    if (!modoArmario) {
      energia = Math.max(energia - 2, 0);
      actualizarEstado();
    }
  }, 8000);
}

reiniciarTemporizadores();
actualizarEstado();


