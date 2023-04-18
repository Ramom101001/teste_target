function inverterString() {
	const input = document.getElementById("input-string").value;
	let resultado = "";
	for (let i = input.length - 1; i >= 0; i--) {
	  resultado += input[i];
	}
	document.getElementById("resultado").textContent = resultado;
  }