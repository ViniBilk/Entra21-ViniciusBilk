DROP TABLE funcionario;
DROP TABLE departamento;
DROP TABLE gerente;

CREATE TABLE IF NOT EXISTS gerente (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL
);
	
CREATE TABLE IF NOT EXISTS departamento (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	localizacao text NOT NULL,
	id_gerente integer,	 
	FOREIGN KEY (id_gerente) REFERENCES gerente (id)
);

CREATE TABLE IF NOT EXISTS funcionario (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	sobrenome text NOT NULL,
	ano_nascimento integer NOT NULL,
	cpf integer NOT NULL,
	rg integer NOT NULL,
	logradouro text NOT NULL,
	cep integer NOT NULL,
	cidade text NOT NULL,
	telefone integer NOT NULL,
	funcao text NOT NULL,
	salario integer NOT NULL,
	id_departamento integer NOT NULL,
	FOREIGN KEY (id_departamento) REFERENCES departamento (id)
);

INSERT INTO gerente (nome) VALUES 
	('Gerente_1'),
	('Gerente_2'),
	('Gerente_3'),
	('Gerente_4'),
	('Gerente_5');
	
INSERT INTO departamento (nome,localizacao,id_gerente) VALUES 
	('Departamento_1','Rua 1',1),
	('Departamento_2','Rua 2',2),
	('Departamento_3','Rua 3',3),
	('Departamento_4','Rua 4',4),
	('Departamento_5','Rua 5',5);
	
INSERT INTO funcionario (nome,sobrenome,ano_nascimento,cpf,rg,logradouro,cep,cidade,telefone,funcao,salario,id_departamento) VALUES
	('Func','Ionario_1',1910,123456789,123456789,'Rua_1',89120000,'Cidade_1',999999999,'Scrum Master',1230,1),
	('Func','Ionario_2',1920,123456789,123456789,'Rua_2',89120000,'Cidade_2',999999999,'Scrum Master I',1240,2),
	('Func','Ionario_3',1930,123456789,123456789,'Rua_3',89120000,'Cidade_3',999999999,'Scrum Master II',1250,3),
	('Func','Ionario_4',1940,123456789,123456789,'Rua_4',89120000,'Cidade_4',999999999,'Scrum Master III',1260,4),
	('Func','Ionario_5',1950,123456789,123456789,'Rua_5',89120000,'Cidade_5',999999999,'Scrum Master IV',1270,5);

