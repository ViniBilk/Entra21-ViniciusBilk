-- 2 Ex: a
SELECT * FROM funcionario WHERE salario > 1000;
-- 2 Ex: b
SELECT (nome,sobrenome), sum(2021 - ano_nascimento) idade
FROM funcionario
GROUP BY nome,sobrenome
ORDER BY idade  DESC;
-- 2 Ex: c
SELECT sum(salario) total_salario FROM funcionario;
-- 2 Ex: d
SELECT d.nome, g.nome
FROM departamento d
INNER JOIN gerente g ON g.id = d.id_gerente;
-- 2 Ex: f


