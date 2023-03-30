# Descrição
Este código é uma aplicação Node.js utilizando o framework Express e a biblioteca dd-trace para fazer o tracing de operações. O objetivo da aplicação é receber requisições POST na rota '/orders' contendo informações sobre pedidos, e então processá-las. O tracing é feito para coletar informações sobre a performance e comportamento da aplicação durante a execução dessas operações.

## Instalação
Antes de executar a aplicação, é necessário instalar as dependências. Isso pode ser feito utilizando o gerenciador de pacotes npm:

```bash 
npm install
```

## Utilização
Para iniciar a aplicação, basta executar o seguinte comando:

```bash 
node index.js
```

Isso irá iniciar o servidor na porta 80. É possível modificar a porta alterando o valor da constante 'port' no arquivo index.js.

A rota '/orders' espera uma requisição POST contendo um JSON no seguinte formato:

```bash
{
  "orderID": "string",
  "reprocessamento": "boolean",
  "origem": "string",
  "destino": "string",
  "status": "string"
}
```

A aplicação então processa as informações contidas nesse JSON e envia uma resposta para o cliente.

O tracing é feito utilizando a biblioteca dd-trace. Ao receber uma requisição POST na rota '/orders', a aplicação cria um span para coletar informações sobre a execução dessa operação. O span é finalizado quando a operação é concluída. As informações coletadas são enviadas para o Datadog, onde podem ser analisadas e utilizadas para monitorar a performance da aplicação.

## Contribuição
Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, sinta-se livre para abrir uma issue ou enviar um pull request.
