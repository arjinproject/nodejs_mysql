# nodejs_mysql
NodeJS, JWT, Sequelize, Mysql CRUD

Nodejs ile RestFul api geliştirme

********************************************************************************************************


not ekleme-silme güncelleme işlemleri oturum açılırken alınan token ile yetkilendirmeler sayesinde yapılmaktadır.


Oluşturulan servisler şu şekildedir.

********************************************************************************************************

1 - http://localhost:3000/signup => (POST) kullanıcı oluşturmak için kullanılıyor. 

{

	"name": "user1",

	"username": "user1",

	"email": "user1@gmail.com",

	"roles": ["user"],  // admin ve pm rolleri de var

	"password": "123456"

}


********************************************************************************************************

2 - http://localhost:3000/signIn => (POST) oturum açmak için kullanılıyor. Geriye token veriyor

{

	"email": "user1@gmail.com",

	"password": "123456"

}


********************************************************************************************************

3 - http://localhost:3000/notes => Not ekleme (POST) ve not listeleme (GET) işlemleri yapılabiliyor. Ekleme sadece Admin; görüntüleme herkese tanımlanmıştır.

{

	"title": "5.. notum dur",

	"detail": "güncel "

}

*** Headers kısmında 

x-access-token: [giriş yaparken alınan token]


********************************************************************************************************

4 - http://localhost:3000/note/:id => Not güncelleme (PUT) ve silme (DELETE) işlemleri yapılabiliyor. Güncelleme Pm ve Admin; silme sadece admin yetkisine tanımlanmıştır.

Put

{

	"name": "user1",

	"username": "user1",

	"email": "user1@gmail.com",

	"roles": ["user"],

	"password": "123456"

}

*** Headers kısmında 

x-access-token: [giriş yaparken alınan token]

********************************************************************************************************
