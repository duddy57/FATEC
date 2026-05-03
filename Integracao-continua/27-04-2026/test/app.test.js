const request = require('supertest');
const app = require('../app'); // Certifique-se de que o caminho esteja correto

describe('Testes de Rotas de Contatos', () => {
  it('Deve listar todos os contatos (GET /contatos)', async () => {
    const response = await request(app).get('/contatos');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('Deve criar um novo contato com campos válidos (POST /contatos)', async () => {
    const newContact = {
      nome: 'John Doe',
      email: 'johndoe@example.com',
      telefone: '123-456-7890',
      endereco: '123 Main St',
      foto: 'john.jpg',
    };

    const response = await request(app)
      .post('/contatos')
      .send(newContact);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('_id');
  });

  it('Deve retornar erro ao criar um novo contato com campos inválidos (POST /contatos)', async () => {
    const invalidContact = {
      telefone: '123-456-7890',
      endereco: '123 Main St',
      foto: 'john.jpg',
    };

    const response = await request(app)
      .post('/contatos')
      .send(invalidContact);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty('message');
  });

  it('Deve retornar erro ao acessar uma rota inexistente (GET /rota-inexistente)', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.statusCode).toEqual(404);
    expect(response.body).toHaveProperty('message');
  });
});