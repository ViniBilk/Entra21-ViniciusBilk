INSERT INTO departamento (nome) VALUES 
	('Suporte'),
	('Administração'),
	('Gerenciamento');
	
INSERT INTO gerente (nome) VALUES
	('Paulo'),
	('Jorge'),
	('Carlos');
	
INSERT INTO colaborador (nome, horas_trabalhadas,tipo_colaborador,id_departamento,id_gerente) VALUES
	('Thyago', 10, 'horista',1,2),
	('Rodrigo',20, 'comissionado',2,1),
	('Saulo',40, 'assalariado',3,1);
	
INSERT INTO projeto (nome) VALUES
	('Projeto_1'),
	('Projeto_2'),
	('Projeto_3');
	
INSERT INTO projeto_colaborador (id_projeto,id_colaborador) VALUES
	(2,3),
	(1,3),
	(2,2);
	
INSERT INTO dependente (nome,id_colaborador) VALUES
	('Maria',2),
	('Tales',3),
	('Paulin',1);
	

	
