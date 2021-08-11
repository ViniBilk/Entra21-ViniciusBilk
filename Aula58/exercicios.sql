-- 1 Ex: a
SELECT id_nf,id_item,cod_prod,valor_unit FROM vendas WHERE desconto is null;
-- 1 Ex: b
SELECT id_nf,id_item,cod_prod,valor_unit,desconto , ROUND(sum(valor_unit*(desconto/100))) valor_vendido
FROM vendas WHERE desconto is not null
GROUP BY id_nf,id_item,cod_prod,valor_unit,desconto;
-- 1 Ex: c
UPDATE vendas SET desconto = 0 WHERE desconto is null;
SELECT * FROM vendas;
-- 1 Ex: d
SELECT
	id_nf,
	id_item,
	cod_prod,
	valor_unit,
	quantidade,
	QUANTIDADE * VALOR_UNIT valor_total,
	ROUND (VALOR_UNIT - (VALOR_UNIT*(DESCONTO/100)),2) valor_vendido
FROM vendas;
-- 1 Ex: e
SELECT
	id_nf,
	id_item,
	cod_prod,
	valor_unit,
	quantidade,
	QUANTIDADE * VALOR_UNIT valor_total
FROM vendas
ORDER BY valor_total DESC;
-- 1 Ex: f
SELECT
	id_nf,
	id_item,
	cod_prod,
	valor_unit,
	quantidade,
	ROUND (VALOR_UNIT - (VALOR_UNIT*(DESCONTO/100)),2) valor_vendido
FROM vendas
ORDER BY valor_vendido DESC;
-- 1 Ex: g
SELECT cod_prod, sum(quantidade)
FROM vendas
GROUP BY cod_prod
ORDER BY cod_prod DESC
;
-- 1 Ex: h
SELECT id_nf,
	   cod_prod,
	   quantidade, sum(quantidade)
FROM vendas
WHERE quantidade > 10
GROUP BY id_nf,cod_prod,quantidade
ORDER BY quantidade DESC
;
-- 1 Ex: i
SELECT id_nf,
	   SUM (QUANTIDADE * VALOR_UNIT)
FROM vendas
GROUP BY id_nf
HAVING SUM (QUANTIDADE * VALOR_UNIT) > 500
;
-- 1 Ex: j
SELECT id_nf,
	   SUM (QUANTIDADE * VALOR_UNIT)
FROM vendas
GROUP BY id_nf
HAVING SUM (QUANTIDADE * VALOR_UNIT) > 500
;











