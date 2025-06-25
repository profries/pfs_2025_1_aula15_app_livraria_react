import axios from "axios"

const URI = "http://localhost:3000/livros";

async function listarLivros() {
    const response = await axios.get(URI);
    return response.data;
}

async function inserirLivro(livro) {
    const response = await axios.post(URI, livro);
    return response.data;
}

export default {
    listarLivros,
    inserirLivro
}