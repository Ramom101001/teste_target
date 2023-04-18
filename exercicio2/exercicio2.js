    function calcularSequencia() {
        const numero = parseInt(document.getElementById('numero').value);
        let aux1 = 0, aux2 = 1;
        let existe = false;

        while (aux2 <= numero) {
          if (aux2 === numero) {
            existe = true;
          }
          const temp = aux1 + aux2;
          aux1 = aux2;
          aux2 = temp;
        }

        if (existe) {
          document.getElementById('resultado').textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
        } else {
          document.getElementById('resultado').textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
        }
      }