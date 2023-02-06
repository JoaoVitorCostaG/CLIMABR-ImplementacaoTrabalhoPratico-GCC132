# ClimaBR

Aplicação web para consulta da previsão do tempo de cidades brasileiras.

# Como utilizar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `key` para a sua chave de API):

```ts
export const openWeatherConfig = {
    key: '<sua-chave-de-api>',
    URL: 'https://api.openweathermap.org/data/2.5/onecall',
    iconURL: 'http://openweathermap.org/img/wn',
}
```

Para abrir a aplicação, execute o comando:

`ionic serve`

Enjoy!