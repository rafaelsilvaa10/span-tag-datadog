const express = require('express');
const app = express();
const port = 80;
const ddTrace = require('dd-trace');
const tracer = ddTrace.init({
  service: 'appteste',
  env: 'teste',
});

app.use(express.json());

app.post('/orders', (req, res) => {
  const { orderID, reprocessamento, origem, destino, status } = req.body;

  const span = tracer.startSpan('orders.post', {
    tags: {
      'http.method': 'POST',
      'teste.orderID': orderID,
      'teste.reprocessamento': reprocessamento,
      'teste.origem': origem,
      'teste.destino': destino,
      'teste.status': status,
      'teste.tag.array': JSON.stringify([100, 200, 700])
    }
  });

  if (orderID.toString().startsWith('999')) {
    span.setTag('error', true);
    span.setTag('http.status_code', 500);
    span.finish();
    res.status(500).send('Erro 500: OrderID inválido.');
  } else if (status.startsWith('error')) {
    span.setTag('error', true);
    span.setTag('http.status_code', 500);
    span.finish();
    res.status(500).send('Erro 500: status de erro recebido.');
  } else {
    span.setTag('http.status_code', 200);
    span.finish();
    res.send('Pedido recebido com sucesso!');
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
