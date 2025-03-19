function calcularPrecio() {
    let cpu = parseInt(document.getElementById("cpu").value);
    let gpu = parseInt(document.getElementById("gpu").value);
    let ram = parseInt(document.getElementById("ram").value);
  
    let total = cpu + gpu + ram;
    document.getElementById("precioTotal").innerText = total;
  
    fetch("/CalculadoraServlet", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `cpu=${cpu}&gpu=${gpu}&ram=${ram}`
    })
    if (cpu >= 200 && gpu < 300) {
        compatibilidad = "Posible cuello de botella en la GPU";
      } else if (ram < 100 && gpu > 300) {
        compatibilidad = "Podría necesitar más RAM para la GPU";
      } else {
        compatibilidad = "Configuración óptima";
      }
      
  }
  