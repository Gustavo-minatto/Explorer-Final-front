# Olá a todos!

FoodExplorer é um projeto desenvolvido como o desafio final da plataforma RocketSeat, desenvolvido por mim. Esta aplicação é um site completo para restaurantes, onde o cliente pode buscar pratos ou ingredientes, adicioná-los ao carrinho e acompanhar seu pedido. Como administrador, você também pode adicionar, editar ou remover pratos, fazer upload de imagens, entre outras funcionalidades.

Como não é possível criar um usuário administrador normalmente, vou passar as informações abaixo:

*Login:* adm@adm.com

*Senha:* admin123

## Vamos começar


_Instruções para iniciar o ambiente de desenvolvimento._

- Baixe o projeto no GitHub.
- Abra a pasta do projeto no VSCode arrastando a pasta, ou, navegue pelo terminal com o comando "cd caminhodapasta".
- Ainda no console, execute o comando "npm install".

- Agora, sempre que quiser iniciar a aplicação, basta executar o comando "npm run dev".

**Obs.:**
Este projeto é apenas o frontend do aplicativo. Para que o aplicativo funcione corretamente, é necessário baixar e executar o backend também. O link está abaixo:
**Backend Link**: https://github.com/Gustavo-minatto/Explorer-Final-Back

## O Website


**Login**

Primeiro, temos a tela de login, onde o usuário ou administrador pode autenticar-se.


**Cadastro**

Aqui é onde o usuário pode se registrar, basta preencher todos os campos e clicar para criar a conta.

Obs: A senha é salva de forma criptografada no banco. Além disso, ao fazer login, a comunicação é totalmente segura por meio de um token JWT.

**Página Inicial**

Esta é a página principal do nosso projeto.
Vamos dividir esta página principal em 2 seções, o cabeçalho e o conteúdo principal.

_Cabeçalho_

No cabeçalho, temos a barra de pesquisa para buscar pratos ou ingredientes. Também temos o botão para ver os pedidos (só é possível vê-lo quando você está logado como cliente), o botão para adicionar pratos (só é possível vê-lo quando você está logado como administrador), e, finalmente, o botão de logout.

_Principal_

Aqui temos a exibição de todos os pratos separados por categorias. Além disso, os pratos são distribuídos em forma de carrossel.

**Pedidos**

Aqui você pode ver todos os pedidos feitos, bem como a data e hora em que foram feitos e seu status.

**Adicionar Pratos**

Aqui é onde o administrador pode inserir novos pratos, informando o preço, descrição, ingredientes e imagem.

**Detalhes**

Ao clicar em qualquer prato na tela inicial, você será redirecionado para uma página mais detalhada sobre o prato, para que o cliente possa entender claramente do que se trata.
