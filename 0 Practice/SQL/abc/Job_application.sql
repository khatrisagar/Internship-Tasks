show databases;
use job_application_form;

create table candidate_basic(
	candidate_id int primary key auto_increment,
	firstname varchar(20),
    middlename varchar(20),
    surname varchar(20),
    date_of_birth date,
    age int,
    gender varchar(10),
    email varchar(30),
    contact varchar(10),
    address varchar(100),
    city varchar(20),
    state varchar(20),
    created_at timestamp default current_timestamp not null 
);
show tables;

select * from candidate_basic;

insert into candidate_basic(firstname, middlename, surname,date_of_birth,age, gender, email, contact, address, city, state)
values('sdf','xydsfz','idgwek','2000-12-23','23','female','contact@esb.com','4841545158','18/445,near tghdf,rtee','ahmedabad','gujrat' );
		

create table academics(
	academics_id int primary key auto_increment,
    candidate_id int,
	ssc_name_of_board varchar(50),
    ssc_passing_year int,
    ssc_score float,
    hsc_name_of_board varchar(50),
    hsc_passing_year int,
    hsc_score float,
    graduation_course_name varchar(30),
    graduation_university_name varchar(30),
    graduation_passing_year int,
    graduation_cgpa float,
    post_graduation_course_name varchar(30),
    post_graduation_university_name varchar(30),
    post_graduation_passing_year int,
    post_graduation_cgpa float,
    foreign key(candidate_id) references candidate_basic(candidate_id),
    created_at timestamp default current_timestamp not null 
);
show tables;

insert into academics(candidate_id,ssc_name_of_board,ssc_passing_year,ssc_score,hsc_name_of_board,hsc_passing_year,hsc_score,graduation_course_name,graduation_university_name,graduation_passing_year,graduation_cgpa,post_graduation_course_name,post_graduation_university_name,post_graduation_passing_year,post_graduation_cgpa)
values('1','gseb','2017','75.00','gseb','2019','65','BE','GTU','2023','8.09','ME','GTU','2025','9.09');
	
select * from academics;


select candidate_basic.candidate_id, candidate_basic.firstname, academic.graduation_course_name 
from academics 
left join candidate_basic 
on academics.candidate_id = candidate_basic.candidate_id;

create table experience(
	experience_id int primary key auto_increment,
    candidate_id int,
    company_name varchar(40),
    designation varchar(40),
    start_date date,
	end_date date,
    foreign key(candidate_id) references candidate_basic(candidate_id),
    created_at timestamp default current_timestamp not null 
);
select * from experience;

create table languages(
	languages_id int primary key auto_increment,
    candidate_id int,
	language_name varchar(20),
    language_read varchar(20),
    language_write varchar(20),
    language_speak varchar(20),
    foreign key (candidate_id) references candidate_basic(candidate_id),
    created_at timestamp default current_timestamp not null 
);

select * from languages;

create table technologies(
	technologies_id int primary key auto_increment,
    candidate_id int,
    technology_name varchar(20),
    tech_beginner varchar(20),
    tech_mediater varchar(20),
    tech_expert varchar(20),
    foreign key (candidate_id) references candidate_basic(candidate_id),
    created_at timestamp default current_timestamp not null 
);

select * from technologies;

create table reference_contact(
	reference_id int primary key auto_increment,
    candidate_id int,
	reference_name varchar(20),
    reference_contact_number varchar(10),
    reference_releation varchar(20),
    foreign key (candidate_id) references candidate_basic(candidate_id),
    created_at timestamp default current_timestamp not null 
);

select * from reference_contact;

create table prefrences(
	prefrence_id int primary key auto_increment,
    candidate_id int,
    prefered_location varchar(20),
    notice_period varchar(2),
    current_ctc decimal(2,2),
    expected_ctc decimal(2,2),
    department varchar(20),
    foreign key (candidate_id) references candidate_basic(candidate_id),
    created_at timestamp default current_timestamp not null 
);
 
select * from prefrences;