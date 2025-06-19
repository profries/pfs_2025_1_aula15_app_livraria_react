import CardLivro from "./CardLivro"
import LivroApiService from "../service/LivroApiService"
import { useState } from "react";
import { useEffect } from "react";

export default function ListCardLivros() {
    const [listaLivros, setListaLivros] = useState([]);

    useEffect(() => {
        LivroApiService.listarLivros().then(
            livros => setListaLivros(livros)
        )
    }, [])

    console.log(listaLivros);
    return (
        listaLivros.map(livro => 
            <CardLivro key={livro.id} livro={livro} />
        )    
    )
}