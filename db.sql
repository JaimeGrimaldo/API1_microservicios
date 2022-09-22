CREATE DATABASE AlumnosUP;

use AlumnosUP;

create table alumnos(
	id int(11) not null auto_increment,
    nombre VARCHAR(45) default null,
    matricula int(6),
    primary key (id)
    
);

describe alumnos;


insert into alumnos values (1,"Jaime Grimaldo",191214),
(2,"Matuz Tamayo",191209);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
flush privileges;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Current-Root-Password';
FLUSH PRIVILEGES;

SELECT user,authentication_string,plugin,host FROM mysql.user;


insert into alumnos values (3, "Ana Sofia",19999);
select * from alumnos;
update alumnos set nombre = nombre , matricula = 30200 where id = 20


