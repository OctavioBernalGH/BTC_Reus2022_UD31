      
        /** Se genera el valor del dado de forma aleatoria con rango */
        function dadoAleatorio(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
      
        var totalTiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var coincidenciasSinRepetir = [];
      
        /** Se lanza el dado 36000 veces mediante un bucle for */
        for (i = 0; i <= 36000; i++) {
            /** Se lanzan los dos dados de forma aleatoria con la función definida. */
            let numeroDado1 = dadoAleatorio(1, 6);
            let numeroDado2 = dadoAleatorio(1, 6);
            let valorTotalDados = numeroDado1 + numeroDado2;

            totalTiradas[valorTotalDados - 2]++;
            let elemento = tiradas[valorTotalDados - 2];

            if (!coincidenciasSinRepetir.includes(totalTiradas[valorTotalDados - 2])) {
                coincidenciasSinRepetir.push(elemento);
            }
        }

        for (x = 0; x < totalTiradas.length; x++) {
            console.log(`Numero (${x} + 2) repetido ${totalTiradas[x]}`);
        }