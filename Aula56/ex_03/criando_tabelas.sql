DROP TABLE IF EXISTS projeto_colaborador;
DROP TABLE IF EXISTS dependente;
DROP TABLE IF EXISTS colaborador;
DROP TABLE IF EXISTS departamento;
DROP TABLE IF EXISTS gerente;
DROP TABLE IF EXISTS projeto;




CREATE TABLE IF NOT EXISTS departamento (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL
);

CREATE TABLE IF NOT EXISTS gerente (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL
);

CREATE TABLE IF NOT EXISTS projeto (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL
);

CREATE TABLE IF NOT EXISTS colaborador (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	horas_trabalhadas integer NOT NULL,
	tipo_colaborador text NOT NULL,
	valor_hora integer,
	salario integer,
	total_vendas integer,
	percentual_comissao integer,
	id_departamento integer REFERENCES departamento,
	id_gerente integer REFERENCES gerente
);

CREATE TABLE IF NOT EXISTS projeto_colaborador (
	id_projeto integer REFERENCES projeto,
	id_colaborador integer REFERENCES colaborador
);

CREATE TABLE IF NOT EXISTS dependente (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	id_colaborador integer REFERENCES colaborador
);

