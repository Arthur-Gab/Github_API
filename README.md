# OmniStack-10
Uma aplicação WEB que cadastrar desenvolvedores utilizando da API do Github e do própio servidor Express com arquitetura MVC.

## Sobre a API
1. A aplicação é criada utilizando a **arquitetura MVC e os padrões REST**, ou seja, recebendo requisições em JSON e respondendo em JSON.
2. **Os Models e Controllers são de responsabilidade do Back-End**, assim como a conexão com o banco de dados MongoDB via mongoose. **A parte de Views é responsabilidade do Front-End montado em ReactJs** junto da API Axios para facilitar as requisições ao Back-End
3. **A API trabalha junto com a API do Github** para abstrair os demais dados, tais como a bio, a foto do perfil no Github e o link para o site do Github.
4. **Possui somente 1 porta "/devs"**, pela qual é criado o metódo de criação (store), de remoção (destroy) e de recuperação dos dados (index), os quais são utilizados respectivamente no formulário (CreateDev), no butão "X" do Card (DevCard) e na primeira renderização da página (useEffect ai App.jsx).

## Pacotes Usados
 ### Back-End
      1. "axios": "^1.5.0",
	  2. "cors": "^2.8.5",
	  3. "express": "^4.18.2",
	  4. "mongoose": "^7.4.5"
### Front-End
    1. "axios": "^1.5.0",
    2. "react": "^18.2.0",
    3. "react-dom": "^18.2.0",
    4. "react-icons": "^4.10.1"


## UI
![Overview](https://github.com/Arthur-Gab/OmniStack-10/assets/89430618/9e6ae7e2-9d51-422f-8fea-3a7641ff2a1c)
