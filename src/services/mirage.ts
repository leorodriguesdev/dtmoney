import { createServer, Model } from 'miragejs'

export function makeServer() {
  return createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelancer de website',
            type: 'deposit',
            category: 'Dev',
            amount: 900,
            createdAt: new Date('2021-08-31 17:00:00'),      
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Casa',
            amount: 600,
            createdAt: new Date('2021-08-31 17:00:00'),      
          }
        ],
      })
    },

    routes() {
      this.namespace = 'api';
      
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
      
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        const transaction = schema.create('transaction', data)
        return transaction
      })
    },

    // Configuração adicional para garantir interceptação
    timing: 400
  })
} 