CREATE table test(
 id varchar(20) not null primary key,
 pw varchar(20) not null,
 nickname varchar(20) not null,
 email varchar(100),
 regist_day date,
 level tinyint(4),
 point varchar(120)
 );
 

select * from test;
