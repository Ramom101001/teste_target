        async function fetchFaturamento() {
            const response = await fetch('dados.json');
            const data = await response.json();
            return data;
        }

        document.addEventListener('DOMContentLoaded', calcularFaturamento , false);
        
        async function calcularFaturamento() {
            
            const dados = await fetchFaturamento();

                // Inicializar as variáveis com valores iniciais
            let menorValor = Infinity;
            let maiorValor = -Infinity;
            let somaValores = 0;
            let numDiasAcimaMedia = 0;
            let numDiasValidos = 0;
          
            // Calcular a soma dos valores e encontrar o menor e maior valor
            for (let i = 0; i < dados.length; i++) {
              const valor = dados[i].valor;
          
              if (valor > 0) { // Desconsiderar dias sem faturamento
                somaValores += valor;
                numDiasValidos++;
          
                if (valor < menorValor) {
                  menorValor = valor;
                }
          
                if (valor > maiorValor) {
                  maiorValor = valor;
                }
              }
            }
          
            // Calcular a média e o número de dias acima da média
            const media = somaValores / numDiasValidos;
            for (let i = 0; i < dados.length; i++) {
              const valor = dados[i].valor;
          
              if (valor > media) {
                numDiasAcimaMedia++;
              }
            }

         

            document.getElementById('menor-faturamento').innerText = menorValor;
            document.getElementById('maior-faturamento').innerText = maiorValor;
            document.getElementById('dias-acima-media').innerText = numDiasAcimaMedia;
          }
          
          