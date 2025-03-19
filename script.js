function calcularPrecio(){
    let cpu = parseInt(document.getElementById("cpu").value);
    let gpu = parseInt(document.getElementById("gpu").value);
    let ram = parseInt(document.getElementById("ram").value);


let total = cpu + gpu + ram;

document.getElementById("precioTotal").innerText = total;

fetch("CalculadoraServlet", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `cpu=${cpu}&gpu=${gpu}&ram=${ram}`
})
.then(response => response.text())
.then(data => alert("Compatibilidad: " + data));
}