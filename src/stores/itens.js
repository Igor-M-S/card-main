import { defineStore } from "pinia";

export const itensStores = defineStore('itens', {
  state: () =>{
    return {
    itemsEstoque:  [
            {   message: 'fone de ouvido sangsung preto',
                url:'https://imgs.casasbahia.com.br/55014134/1xg.jpg?imwidth=130',
                preco:45 },

            {   message: 'fone de ouvido sangsung branco', 
                url:'https://imgs.casasbahia.com.br/55019501/1xg.jpg?imwidth=292', 
                preco:40,
              },
              {   message: 'fone de ouvido sangsung preto',
                url:'https://imgs.casasbahia.com.br/55014134/1xg.jpg?imwidth=130',
                preco:45 },

            {   message: 'fone de ouvido sangsung branco', 
                url:'https://imgs.casasbahia.com.br/55019501/1xg.jpg?imwidth=292', 
                preco:40,
              },
              
                
            ],
    itemsCarrinho: [
            {   message: 'fone de ouvido sangsung preto',
                url:'https://imgs.casasbahia.com.br/55014134/1xg.jpg?imwidth=130',
                preco:45 },

            {   message: 'fone de ouvido sangsung branco', 
                url:'https://imgs.casasbahia.com.br/55019501/1xg.jpg?imwidth=292', 
                preco:40,
              },
              {   message: 'fone de ouvido sangsung preto',
                url:'https://imgs.casasbahia.com.br/55014134/1xg.jpg?imwidth=130',
                preco:45 },

            {   message: 'fone de ouvido sangsung branco', 
                url:'https://imgs.casasbahia.com.br/55019501/1xg.jpg?imwidth=292', 
                preco:40,
              },
  ]
}
},
})