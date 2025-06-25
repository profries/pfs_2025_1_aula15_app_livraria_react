import { useState } from "react";
import LivroApiService from "../service/LivroApiService";

export default function FormLivros() {

    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);

    function cadastrarLivro(event) {
        event.preventDefault();
        LivroApiService.inserirLivro({
            titulo: titulo,
            imagem:"pequenoprincipe.jpg",
            preco: preco
        })
        .then(livro => {
            alert(`Livro ${titulo} cadastrado com sucesso!`)
            setTitulo('');
            setPreco(0);
        })
    }
    return (
        <form onSubmit={cadastrarLivro}>
            <label>Titulo:</label>
            <input type="text" name="titulo" value={titulo} 
                onChange= {(ev) => setTitulo(ev.target.value)}/>
            <br />
            <label>Preço:</label>
            <input type="number" name="preco" value={preco}
                onChange= {(ev) => setPreco(ev.target.value)} />
            <br />
            <input type="submit" value="Salvar" />            
        </form>
    )
}