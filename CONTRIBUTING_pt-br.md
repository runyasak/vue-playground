[EN](CONTRIBUTING.md) | [ES](CONTRIBUTING_es.md) | PT-BR
# Colaboração

Depois de clonar o projeto, instale as dependências.

```
$ npm install
```

A seguir, você pode rodar o ambiente de desenvolvimento com o comando `serve`.

```
$ npm run serve
```

Você pode adicionar suas explicações criando uma pasta com arquivos em `src/views/`, como especificado na estrutura de árvore abaixo:

```
HelloWorld
│   code.js
│   index.vue
│   README.md
```

* `code.js`: Código que você quer visualizar com a string de exportação.
* `index.vue`: O resultado do exemplo que você quer mostrar.
* `README.md`: A descrição do tópico em formato Markdown.

Então, adicione uma rota para seu tópico em `src/router.js`.

```javascript
{
  path: '/hello-world',
  name: 'HelloWorld',
  meta: { title: 'Hello World!' }
}
```

* `name`: O nome da sua pasta.
* `title`: O texto que você quer que seja exibido na navegação.

Por último, crie um pull request para a branch `master`.

# Solicitações de Funcionalidades

Ideias e feedbacks são bem vindos. Por favor, crie uma issue com alguma explicação das suas ideias. Suas ideias são inestimáveis para desenvolvedores no futuro.
