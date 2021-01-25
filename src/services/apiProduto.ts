export async function getProduct(produto: string): Promise<any>{


    const produtos = await fetch(produto)

        if(produtos.status === 200){
            var produtoJson = await produtos.json()

        }

        return produtoJson
}