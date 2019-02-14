select * from application;
select * from keyword;
select * from application_keyword;

insert into application(name) values ('Produto'); --1
insert into application(name) values ('Ncm'); --2
insert into application(name) values ('Cest'); --3
insert into application(name) values ('Nota Fiscal de Venda'); --4
insert into application(name) values ('Nota Fiscal de Compra'); --5
insert into application(name) values ('ABC de Compra'); --6
insert into application(name) values ('ABC de Venda'); --7
insert into application(name) values ('Rendimento'); --8
insert into application(name) values ('Subida de Venda'); --9

insert into keyword (description) values ('ncm'); --1
insert into keyword (description) values ('imposto federal'); --2
insert into keyword (description) values ('seção'); --3
insert into keyword (description) values ('grupo'); --4
insert into keyword (description) values ('subgrupo'); --5
insert into keyword (description) values ('cest'); --6
insert into keyword (description) values ('produto'); --7
insert into keyword (description) values ('rendimento'); --8

insert into application_keyword values (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7);
insert into application_keyword values (2, 1), (2, 6);
insert into application_keyword values (3, 6);
insert into application_keyword values (4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7);
insert into application_keyword values (5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (5, 7);
insert into application_keyword values (6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6), (6, 7);
insert into application_keyword values (7, 1), (7, 2), (7, 3), (7, 4), (7, 5), (7, 6), (7, 7);
insert into application_keyword values (8, 7), (8, 8);
insert into application_keyword values (9, 1), (9, 2), (9, 3), (9, 4), (9, 5), (9, 6), (9, 7);
