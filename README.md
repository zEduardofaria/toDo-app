## Todo App

Esse é um projeto React usando o LocalStorage como armazenamento.

### Setup

- Clone esse repositório
- Execute o comando `yarn` na raíz do projeto para instalar as dependências

### Run

- Execute o comando `yarn start`
- Após ter sido executado, os app iniciará na porta `3000`,

### Observations

- Desconsidere boas práticas de segurança relacionados as informações expostas por essa abordagem de salvar informações no LocalStorage.
- Boas práticas de Gitflow foram ignoradas pelo projeto ser pessoal.

### What comes next?

- [ ] Adicionar try catch em cada ação que simula uma chamada de API.
- [ ] Passar as responsabilidades de verificação de valores para dentro do próprio Context, deixando os Submits de cada Form responsáveis apenas por enviar a requisição e em seguida history.push.
- [ ] Centralizar o uso do useToast, possibilitando o uso do Throw Error para gerenciar as notificações de erro.
- [ ] Arrumar config-overrides
- [ ] Adicionar testes em cada action do app