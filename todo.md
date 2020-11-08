- [X] Layout Login
- [X] Layout Tarefas
- [X] Tarefas com state
- [X] Auth context
- [X] Task context
- [X] Toast e validation
- [ ] Testes
- [ ] Storybook

- [ ] Melhorar layout?
- [ ] Controle de usuários



   Notas

authContext

Para simular uma api, optei por colocar os usuários no contexto de auth. Mas numa aplicação real, estes dados e validações seriam todos tratados no backend, e o authContext ficaria responsável apenas por signIn, e signOut.

GitFlow

Entendo que fiz todas os commits na develop, e mandei para master. Fiz isso puramente devido ao meu tempo escasso. Em um fluxo natural de trabalho, eu cuidaria de cada funcionalidade mantendo os seguintes passos:
* Criaria uma branch feature/xxxx baseada na develop.
* Após finalizá-la, abriria um Pull Request para a develop.
* Para o caso de bugs, hotfix/xxxx

TryCatch

Novamente devido ao tempo, não coloquei try catch onde poderia. Por exemplo, em cada handleSubmit da minha aplicação haveria um try catch. 
