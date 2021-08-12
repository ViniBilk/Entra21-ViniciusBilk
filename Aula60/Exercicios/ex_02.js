
// 2) Faça um script que crie as seguintes tabelas no banco de dados:

// clientes(id, nome, email, telefone, numero_documento, tipo_pessoa, pontos)
// enderecos(id, rua, numero, cidade, estado, cep, id_cliente)
// livros(isbn, nome_autor, assunto, quantidade_estoque, preco, id_editora)
// compras(id_cliente, id_livro, data, valor)
// editoras(id, nome_gerente, telefone)

const db = require("../db")

const createTableText = `
    CREATE TABLE IF NOT EXISTS clientes
    (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome text NOT NULL,
        email text NOT NULL,
        telefone integer NOT NULL,
        numero_documento integer NOT NULL,
        tipo_pessoa text NOT NULL,
        pontos integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS editoras
    (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome_gerente text NOT NULL,  
        telefone integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS enderecos
    (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        rua text NOT NULL,  
        numero integer NOT NULL,
        cidade text NOT NULL,
        estado char(2) NOT NULL,
        cep integer NOT NULL,
        id_cliente UUID REFERENCES clientes
    );

    CREATE TABLE IF NOT EXISTS livros
    (
        isbn UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome_autor text NOT NULL,
        assunto text NOT NULL,
        quantidade_estoque integer NOT NULL,
        preco integer NOT NULL,
        id_editora UUID REFERENCES editoras
    );

    CREATE TABLE IF NOT EXISTS compras
    (
        isbn UUID DEFAULT gen_random_uuid(),
        id_cliente UUID ,
        id_livro UUID ,
        PRIMARY KEY (isbn,id_cliente,id_livro),
        FOREIGN KEY (id_cliente) REFERENCES clientes,
        FOREIGN KEY (id_livro) REFERENCES livros
    );
`;

(async () => {
        try {
            await db.query(createTableText)
            console.log("Tabelas criadas com sucesso")        
        } catch (err) {
            console.log(err.menssage)
        } finally {
            db.end()
        }
})();


