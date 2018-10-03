drop database dvcipm;
create database dvcipm;

use dvcipm;
create table pastor(
id int auto_increment not null primary key,
dvprs int null,
pain_interference float(6,3) null);