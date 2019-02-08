-- Migration to crete the initial structure 
create table application(
	id bigserial not null,
	name varchar(200) not null
);

alter table application add constraint pk_application primary key (id);

create table keyword(
	id bigserial not null,
	description varchar(200) not null
);

alter table keyword add constraint pk_keyword primary key (id);

create table application_keyword(
	id_application bigserial not null,
	id_keyword bigserial not null
);

alter table application_keyword add constraint pk_app_keyword primary key (id_application, id_keyword);
alter table application_keyword add constraint fk_application foreign key (id_application) references application (id);
alter table application_keyword add constraint fk_keyword foreign key (id_keyword) references keyword (id);

--//@UNDO

drop table application_keyword;
drop table keyword;
drop table application;