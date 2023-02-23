show databases;
USE studentMaster;

SHOW tables;
CREATE TABLE studentData(
	StudentId INT PRIMARY KEY auto_increment,
	FirstName VARCHAR(45),
    LastName varchar(45),
    ContactNumber varchar(10),
    Email VARCHAR(45),
    City VARCHAR(25),
    CollegeName VARCHAR(45)
);

INSERT INTO studentData(FirstName,LastName,ContactNumber,Email,City,CollegeName)
VALUES
('Sagar','Khatri','5465846545','khatrisagar404@gmail.com','Ahmedabad','Saffrony Institute of technology'),
('vivek','parekh','1234567890','vivekparekh@gmail.com','Khambhat','GHpatel'),
('meet','vardiwale','5468574454','meet@gmail.com','Ahmedabad','Alpha');
	

SELECT * FROM studentData;

SELECT City FROM studentData group by city;

use studentMaster;

create table student_express(
	student_id int primary key auto_increment,
    first_name varchar(25),
    last_name  varchar(25),
    date_of_birth varchar(40),
    contact_number varchar(10),
    email varchar(30),
    city varchar(30),
    clg_name varchar(40)
);
select * from student_express;

insert into student_express(first_name,last_name,date_of_birth,contact_number,email,city,clg_name)values('vivek','parekh','2000-02-23','4345364326','vivek@abc.in','khambhat','GH');

select * from student_express where student_id limit 0,10;
select * from student_express where student_id limit 10,10;
select * from student_express where student_id limit 20,10;
select * from student_express where student_id limit 30,10;
select * from student_express where student_id limit 40,10;
select * from student_express where student_id limit 50,10;
select * from student_express where student_id limit 60,10;
select * from student_express where student_id limit 70,10;
select * from student_express where student_id limit 80,10;
select * from student_express where student_id limit 90,10;




