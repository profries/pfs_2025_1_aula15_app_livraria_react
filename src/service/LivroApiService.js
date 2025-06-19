import axios from "axios"

const URI = "http://localhost:3000/livros";

async function listarLivros() {
    const response = await axios.get(URI);
    return response.data;
}

export default {
    listarLivros
}