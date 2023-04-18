# Este é um código JavaScript que define três funções: "login()", "testJwt()" e "clearToken()". Essas funções estão relacionadas à autenticação e autorização em uma API, que usa JSON Web Tokens (JWT) como método de autenticação.

# A função "login()" é responsável por enviar uma solicitação POST para a API com as credenciais de login do usuário (username e password), fornecidas por meio de dois campos de entrada HTML com os IDs "username" e "password". A solicitação POST é enviada para o URL "http://localhost:3000/api/authenticate", que é o endpoint da API para autenticação. A solicitação inclui o cabeçalho "Content-Type: application/json" e o corpo da solicitação é um objeto JSON com as credenciais do usuário.

# Se a autenticação for bem-sucedida, a API retornará um objeto JSON que contém um token JWT, que é armazenado localmente no navegador do usuário por meio da API "localStorage". A função também exibe uma mensagem de sucesso e o objeto JSON de resposta da API é registrado no console do navegador.

# A função "testJwt()" é responsável por testar o token JWT armazenado localmente no navegador. Ele envia uma solicitação POST para o endpoint "http://localhost:3000/api/test" da API, com o cabeçalho "Authorization: {token}" que inclui o token JWT armazenado localmente. O corpo da solicitação é um objeto JSON com uma propriedade "student" definida como "188502".

# Se o token JWT for válido, a API retornará um objeto JSON com uma propriedade "message" definida como "success". A função exibirá uma mensagem de sucesso e o objeto JSON de resposta da API será registrado no console do navegador.

# A função "clearToken()" é responsável por remover o token JWT armazenado localmente no navegador. Ele usa a API "localStorage" para remover o item com a chave "upf" e exibe uma mensagem de sucesso.
