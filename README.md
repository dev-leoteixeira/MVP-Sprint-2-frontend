# Apresentação 

MVP, projeto final do 2° módulo da Pós-Graduação em Desenvolvimento Full-Stack da PUC-RIO.

Desenvolver uma aplicação utilizando componentização.

Necessário o desenvolver 03 componentes:

> COMPONENTE A: 
Desenvolver uma API REST implementada em Python e Flask ou uma interface do usuário, utilizando HTML, CSS e JavaScript com alguma biblioteca ou framework de sua preferência (Angular, React, Vue, etc).

> COMPONENTE B:
Uso de uma API externa pública, que ofereça um serviço não pago.

> COMPONENTE C: API REST ou GraphQL. 
Nesse contexto foi utilizado todo o conteúdo apresentado ao longo das matérias de Desenvolvimento full-stack e Projeto de Software, Arquitetura de Microsserviços e Arquitetura de Nuvem e DevOps.


<img src="src\assets\img\fluxograma.png">

## Componentes desenvolvido nesse projeto:

> COMPONENTE A: 
Frontend em Angular.


> COMPONENTE B:
PokeApi, API pública onde é possível consultar todos os pokemons, juntamente com seus atributos como: imagens, habilidades, tipos, altura, peso, fraquezas. Documentação: https://pokeapi.co/

> COMPONENTE C: API REST desenvolvida com Python e Flask. 
Repositório: https://github.com/dev-leoteixeira/MVP2-frontend

## Sobre este repositório

Esse repositório é referente ao Componente A, o frontend da aplicação, desenvolvido em Angular. Através dele, realizamos chamadas para o Componente C, o backend da aplicação, e também para o Componente B, a PokeApi.

O intuito desse sistema foi realizar um cadastro de treinadores Pokemon, onde é possível realizar seu cadastro e adicionar pokemons a sua pokédex.

Login/Cadastro: <img src="src\assets\img\login.png">

Após isso, o treinador pode adicionar e remover pokemons de sua pokédex.

Na página onde são listados todos os Pokemons, foi usado os seguintes endpoints:

Endpoint onde é possível consultar uma determinada quantidade de pokemons, informando a quantidade no parâmetro "limit"
    
    Exemplo: https://pokeapi.co/api/v2/pokemon/?limit=100

Com essa chamada, é realizada a listagem inicial, mostrando todos os pokemons disponíveis para o treinador adicionar a sua pokédex.

Lista de Pokemos: <img src="src\assets\img\pokemons.png">


Após a chamada de todos, é possível realizar uma chamada indivídual, clicando no ícone de informações.

    Exemplo: https://pokeapi.co/api/v2/pokemon/1

Com essa chamada, passando o código do pokemon, é realizada a consulta de informações como: tipos, fraquezas, peso, altura, habilidades, e imagens.

Dessa forma, é exibido o seguinte modal na tela:

Informações do Pokemon: <img src="src\assets\img\pokemon-info.png">


## Como iniciar via Docker

1° - Criar imagem Docker:

    No diretório raiz do projeto, execute o seguinte comando:
    
        docker build -t frontend .

2° - Executar container

        docker run -p 8080:80 frontend



