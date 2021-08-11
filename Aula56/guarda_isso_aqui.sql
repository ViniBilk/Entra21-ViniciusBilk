-- DROP TABLE IF EXISTS pedido_produtos;
-- DROP TABLE IF EXISTS pedidos;
-- DROP TABLE IF EXISTS produtos;

CREATE TABLE IF NOT EXISTS pedidos (
	id SERIAL PRIMARY KEY,
	total_pedido numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS produtos(
	id SERIAL PRIMARY KEY,
	nome text NOT NULL UNIQUE,
	preco numeric NOT NULL CHECK (preco > 0)
);

CREATE TABLE IF NOT EXISTS pedido_produtos (
	id_pedido integer,
	id_produto integer,
	quantidade integer NOT NULL,
	PRIMARY KEY (id_pedido, id_produto),
	FOREIGN KEY (id_pedido) REFERENCES pedidos,
	FOREIGN KEY (id_produto) REFERENCES produtos
);

-- INSERT INTO produtos (nome,preco) VALUES
-- ('lapis',1),
-- ('caneta',2.5),
-- ('regua',4);

-- INSERT INTO pedidos (total_pedido) VALUES
-- (10),(16),(30),(6);

-- INSERT INTO pedido_produtos VALUES
-- (1,1,10),
-- (2,2,4),
-- (3,3,10),
-- (3,2,2);

-- SELECT ped.id, sum(prod.preco * pp.quantidade) total_produto
-- FROM pedido_produtos pp
-- INNER JOIN pedidos ped ON ped.id = pp.id_pedido
-- INNER JOIN produtos prod ON prod.id = pp.id_produto;
-- GROUP BY ped.id;

CREATE TABLE IF NOT EXISTS vendas (
	id SERIAL PRIMARY KEY,
	nome_vendedor text NOT NULL,
	quantidade integer,
	produto text NOT NULL,
	cidade text NOT NULL
);

-- INSERT INTO vendas (nome_vendedor, quantidade,produto,cidade) VALUES 
-- 	('Jorge',10,'Mouse','São Paulo'),
-- 	('Ana',6,'Teclado','Rio de Janeiro'),
-- 	('Mario',23,'Mouse','Blumenau'),
-- 	('Felipe',25,'Webcam','Blumenau'),
-- 	('João',2,'Teclado','Recife'),
-- 	('Pedro',3,'Monito','São Paulo'),
-- 	('João',5,'Monitor','Rio de Janeiro');

SELECT cidade, sum(quantidade)
FROM vendas
GROUP BY cidade