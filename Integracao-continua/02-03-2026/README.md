# ATIVIDADE 02/03/2026

### 1 - Crie um arquivo chamado math.js
Na raiz do projeto crie um arquivo math.js utilize o npm init para ter uma estrutura basica

### 2 - Desenvolvimento do Projeto
Vamos criar um simples programa em Node.js que realiza operações matemáticas. O objetivo é aplicar testes automatizados para garantir a qualidade do código.
Crie um arquivo chamado math.js e implemente as seguintes funções:
    - add(a, b): Retorna a soma de a e b.
    - subtract(a, b): Retorna a diferença entre a e b.
    - multiply(a, b): Retorna o produto de a e b.
    - divide(a, b): Retorna a divisão de a por b.

### 3 - Configuração dos Testes Automatizados
Instale o framework de testes Jest usando o seguinte comando:

```shell

npm install --save-dev jest 

```

Crie uma pasta chamada tests no seu projeto.
Dentro da pasta tests, crie um arquivo chamado math.test.js para escrever os testes.

### 4 - Desenvolvimento dos Testes Automatizados
No arquivo math.test.js, escreva testes automatizados para as funções que você implementou em math.js. Certifique-se de testar diferentes cenários, como entradas positivas e negativas, além de casos especiais.
Exemplo de teste para a função add:
```typescript

const math = require('../math');
test('soma 2 + 3 igual a 5', () => { 
expect(math.add(2, 3)).toBe(5); 
});

```

### 5 - Executando os Testes
Abra o terminal e navegue até o diretório do seu projeto.
Execute os testes usando o seguinte comando:
```shell

npx jest

```

### 6 - Integração Contínua com GitHub Actions
Crie um arquivo para rodar os testes usando o github actions

### 7 - Testando a Integração Contínua
Faça um push das alterações no arquivo .github/workflows/tests.yml para o repositório.
Observe a execução da ação na aba "Actions" do seu repositório no GitHub. Certifique-se de que os testes são executados com sucesso.

