const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
  // TESTES COMPLEMENTARES PARA MATAR MUTANTES DO STRYKER

describe('Casos adicionais para matar mutantes', () => {

  // --- Casos-limite em funções básicas ---
  test('divisão deve lançar erro ao dividir por zero', () => {
    expect(() => divisao(10, 0)).toThrow();
  });

  test('raizQuadrada deve lançar erro para número negativo', () => {
    expect(() => raizQuadrada(-9)).toThrow();
  });

  test('fatorial deve lançar erro para número negativo', () => {
    expect(() => fatorial(-1)).toThrow();
  });

  test('fatorial de 0 deve retornar 1', () => {
    expect(fatorial(0)).toBe(1);
  });

  // --- Casos de comparação (mutantes de >, <, >=, <=) ---
  test('isMaiorQue retorna false quando valores são iguais', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });

  test('isMenorQue retorna false quando valores são iguais', () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });

  // --- Arrays e valores extremos ---
  test('mediaArray deve retornar 0 para array vazio', () => {
    expect(mediaArray([])).toBe(0);
  });

  test('maximoArray deve lançar erro para array vazio', () => {
    expect(() => maximoArray([])).toThrow();
  });

  test('minimoArray deve lançar erro para array vazio', () => {
    expect(() => minimoArray([])).toThrow();
  });

  test('produtoArray deve retornar 1 para array vazio', () => {
    expect(produtoArray([])).toBe(1);
  });

  test('medianaArray deve lançar erro para array vazio', () => {
    expect(() => medianaArray([])).toThrow();
  });

  test('medianaArray deve retornar média correta para array par', () => {
    expect(medianaArray([2, 4, 6, 8])).toBe(5);
  });

  // --- Testes de clamp e comparadores ---
  test('clamp deve retornar o valor mínimo se abaixo do intervalo', () => {
    expect(clamp(-10, 0, 5)).toBe(0);
  });

  test('clamp deve retornar o valor máximo se acima do intervalo', () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });

  test('clamp deve retornar o próprio valor se dentro do intervalo', () => {
    expect(clamp(3, 0, 5)).toBe(3);
  });

  // --- Testes de divisibilidade e inverso ---
  test('isDivisivel retorna false quando não for divisível', () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });

  test('inverso deve lançar erro para 0', () => {
    expect(() => inverso(0)).toThrow();
  });

  // --- Logaritmos e trigonometria ---
  test('logaritmoNatural de 1 deve retornar 0', () => {
    expect(logaritmoNatural(1)).toBe(0);
  });

  test('logaritmoBase10 de 1 deve retornar 0', () => {
    expect(logaritmoBase10(1)).toBe(0);
  });

  test('grausParaRadianos e radianosParaGraus são inversos', () => {
    const graus = 60;
    expect(radianosParaGraus(grausParaRadianos(graus))).toBeCloseTo(graus);
  });

  // --- Números primos e Fibonacci ---
  test('isPrimo deve retornar false para 0 e 1', () => {
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(1)).toBe(false);
  });

  test('isPrimo deve retornar false para número composto', () => {
    expect(isPrimo(9)).toBe(false);
  });

  test('fibonacci(0) e fibonacci(1) devem retornar o próprio valor', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  // --- Testes de porcentagem ---
  test('aumentarPorcentagem com 0% deve retornar o mesmo valor', () => {
    expect(aumentarPorcentagem(100, 0)).toBe(100);
  });

  test('diminuirPorcentagem com 0% deve retornar o mesmo valor', () => {
    expect(diminuirPorcentagem(100, 0)).toBe(100);
  });

  // --- Testes geométricos ---
  test('areaCirculo com raio 0 deve ser 0', () => {
    expect(areaCirculo(0)).toBe(0);
  });

  test('perimetroRetangulo deve calcular corretamente', () => {
    expect(perimetroRetangulo(5, 10)).toBe(30);
  });

  // --- Outras funções simples ---
  test('metade deve retornar valor negativo corretamente', () => {
    expect(metade(-8)).toBe(-4);
  });

  test('isEqual deve retornar false para números diferentes', () => {
    expect(isEqual(4, 5)).toBe(false);
  });

  test('valorAbsoluto deve retornar positivo mesmo para número negativo', () => {
    expect(valorAbsoluto(-7)).toBe(7);
  });

  test('arredondar deve arredondar meio para cima', () => {
    expect(arredondar(2.5)).toBe(3);
  });

  test('arredondarParaBaixo e arredondarParaCima devem funcionar corretamente', () => {
    expect(arredondarParaBaixo(2.9)).toBe(2);
    expect(arredondarParaCima(2.1)).toBe(3);
  });
  });

  // === Testes adicionais para matar mutantes sobreviventes ===

  test('raizQuadrada deve lançar erro para número negativo', () => {
    expect(() => raizQuadrada(-1))
      .toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test('fatorial deve lançar erro para número negativo', () => {
    expect(() => fatorial(-5))
      .toThrow('Fatorial não é definido para números negativos.');
  });

  test('fatorial deve retornar 1 para 0 e 1', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
  });

  test('maximoArray deve lançar erro para array vazio', () => {
    expect(() => maximoArray([]))
      .toThrow('Array vazio не possui valor máximo.');
  });

  test('minimoArray deve lançar erro para array vazio', () => {
    expect(() => minimoArray([]))
      .toThrow('Array vazio не possui valor mínimo.');
  });

  test('isPar deve retornar false para números ímpares', () => {
    expect(isPar(3)).toBe(false);
  });

  test('isImpar deve retornar false para números pares', () => {
    expect(isImpar(4)).toBe(false);
  });

  test('produtoArray deve retornar 1 para array vazio', () => {
    expect(produtoArray([])).toBe(1);
  });

  test('clamp deve limitar valores fora do intervalo', () => {
    expect(clamp(-5, 0, 10)).toBe(0);   // menor que min
    expect(clamp(15, 0, 10)).toBe(10);  // maior que max
  });

  test('celsiusParaFahrenheit deve converter corretamente', () => {
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212);
  });

  test('fahrenheitParaCelsius deve converter corretamente', () => {
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);
  });

  test('inverso deve lançar erro ao tentar inverter 0', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  test('medianaArray deve lançar erro para array vazio', () => {
    expect(() => medianaArray([]))
      .toThrow('Array vazio не possui mediana.');
  });

  test('medianaArray deve funcionar corretamente com arrays fora de ordem', () => {
    expect(medianaArray([5, 1, 3])).toBe(3);
  });

  test('medianaArray deve funcionar com quantidade par de elementos', () => {
    expect(medianaArray([4, 2, 6, 8])).toBe(5);
  });

  // === Testes adicionais para os últimos mutantes sobreviventes ===

  test('divisao deve lançar erro com a mensagem correta ao dividir por zero', () => {
    expect(() => divisao(10, 0))
      .toThrow('Divisão por zero não é permitida.');
  });

  test('raizQuadrada deve lançar erro apenas para números negativos, não para zero', () => {
    // Zero é permitido, raizQuadrada(0) deve ser 0
    expect(raizQuadrada(0)).toBe(0);
    // Negativo deve lançar o erro exato
    expect(() => raizQuadrada(-4))
      .toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test('fatorial deve retornar 1 apenas para 0 e 1, e valores diferentes para outros', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(2)).toBe(2);
    expect(fatorial(3)).toBe(6);
  });

  test('produtoArray deve retornar 1 somente quando o array estiver vazio', () => {
    expect(produtoArray([])).toBe(1);
    expect(produtoArray([5])).toBe(5);
  });

  test('clamp deve retornar exatamente o limite quando o valor é igual ao min ou max', () => {
    expect(clamp(0, 0, 10)).toBe(0);   // Igual ao min
    expect(clamp(10, 0, 10)).toBe(10); // Igual ao max
  });

  test('clamp deve retornar o limite correto quando valor é igual ao min ou max', () => {
    expect(clamp(0, 0, 10)).toBe(0);   // valor igual ao min
    expect(clamp(10, 0, 10)).toBe(10); // valor igual ao max
  });


});