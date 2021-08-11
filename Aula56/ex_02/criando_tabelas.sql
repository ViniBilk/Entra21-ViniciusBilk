DROP TABLE IF EXISTS venda;
DROP TABLE IF EXISTS livro;
DROP TABLE IF EXISTS editora;
DROP TABLE IF EXISTS cliente;

CREATE TABLE IF NOT EXISTS cliente (
	id SERIAL PRIMARY KEY,
	endereco text NOT NULL,
	telefone integer NOT NULL,
	cpf_cnpj integer NOT NULL,
	tipo_pessoa text NOT NULL,
	pontos integer NOT NULL
);

CREATE TABLE IF NOT EXISTS editora (
	codigo SERIAL PRIMARY KEY,
	nome_gerente text NOT NULL,
	endereco text NOT NULL,
	telefone integer NOT NULL
);

CREATE TABLE IF NOT EXISTS livro (
	isbn SERIAL PRIMARY KEY,
	nome_autor text NOT NULL,
	assunto text NOT NULL,
	quantidade integer,
	codigo_livraria integer REFERENCES editora
);

CREATE TABLE IF NOT EXISTS venda (
	id_cliente integer REFERENCES cliente,
	isbn_livro integer REFERENCES livro
);