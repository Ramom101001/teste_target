    // Script que calcula o percentual de representação do faturamento por estado

		// Valor do faturamento mensal por estado
		const faturamentoPorEstado = {
			SP: 67836.43,
			RJ: 36678.66,
			MG: 29229.88,
			ES: 27165.48,
			Outros: 19849.53
		};

		// Calcula o valor total mensal da distribuidora
		const valorTotalMensal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor);

		// Calcula o percentual de representação do faturamento por estado
		const percentualPorEstado = {};
		for (const estado in faturamentoPorEstado) {
			const percentual = (faturamentoPorEstado[estado] / valorTotalMensal) * 100;
			percentualPorEstado[estado] = percentual.toFixed(2);
		}
		// Exibe os resultados na tabela
    console.log(document.getElementById("faturamento-sp"));
		document.getElementById("faturamento-sp").textContent = faturamentoPorEstado.SP.toFixed(2);
		document.getElementById("percentual-sp").textContent = percentualPorEstado.SP + "%";

		document.getElementById("faturamento-rj").textContent = faturamentoPorEstado.RJ.toFixed(2);
		document.getElementById("percentual-rj").textContent = percentualPorEstado.RJ + "%";

		document.getElementById("faturamento-mg").textContent = faturamentoPorEstado.MG.toFixed(2);
		document.getElementById("percentual-mg").textContent = percentualPorEstado.MG + "%";
