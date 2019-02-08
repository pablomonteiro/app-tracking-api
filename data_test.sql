select * from application;
select * from keyword;
select * from application_keyword;

insert into application(name) values ('Produto');
insert into application(name) values ('Ncm');

insert into keyword (description) values ('ncm');
insert into keyword (description) values ('imposto federal');
insert into keyword (description) values ('seção');
insert into keyword (description) values ('grupo');
insert into keyword (description) values ('subgrupo');

insert into application_keyword values (1, 1), (1, 2), (1, 3), (1, 4), (1, 5);
insert into application_keyword values (2, 1);