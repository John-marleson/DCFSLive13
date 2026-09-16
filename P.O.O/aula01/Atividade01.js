class Livro {
    #status;

    constructor(titulo, autor, anoPublicado, status = 'disponivel') {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
        this.#status = status;
    }

    getStatus() {
        return this.#status;
    }

    setStatus(status) {
        this.#status = status;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        if (!(livro instanceof Livro)) {
            throw new Error('livro não é valido');
        }
        this.livros.push(livro);
    }

    listarLivros() {
        return this.livros;
    }

    emprestarLivro(livro) {
        if (livro.getStatus() === 'disponivel') {
            livro.setStatus('emprestado');
        } else {
            throw new Error('livro esta indisponivel');
        }
    }

    devolverLivro(livro) {
        if (livro.getStatus() === 'emprestado') {
            livro.setStatus('disponivel');
        } else {
            throw new Error('livro ja esta disponivel');
        }
    }
}

// Execução correta:
const livro1 = new Livro('teste', 'junio', '2026', 'disponivel');
const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro(livro1);
console.log(minhaBiblioteca.listarLivros());