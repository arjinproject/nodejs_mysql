# nodejs_mysql
NodeJS, JWT, Sequelize, Mysql CRUD

Nodejs ile RestFul api geliştirme

**********************************************************************************************************


not ekleme-silme güncelleme işlemleri oturum açılırken alınan token ile yetkilendirmeler sayesinde yapılmaktadır.


Oluşturulan servisler şu şekildedir.

********************************************************************************************************

1 - http://localhost:3000/signup => (POST) kullanıcı oluşturmak için kullanılıyor. 

{

	"name": "user1",

	"username": "user1",

	"email": "user1@gmail.com",

	"roles": "user",  // admin ve pm rolleri de var

	"password": "123456"

}


********************************************************************************************************

2 - http://localhost:3000/signIn => (POST) oturum açmak için kullanılıyor. Geriye token veriyor

{

	"email": "user1@gmail.com",

	"password": "123456"

}


***********************************************************************************************************


3 -  http://localhost:3000/api/test/user => (GET)  Kullanıcı rolünü test etmek için kullanılıyor.

*** Headers kısmında 

x-access-token: giriş yaparken alınan token 



***********************************************************************************************************

4 -  http://localhost:3000/api/test/admin => (GET)  Admin rolünü test etmek için kullanılıyor.

*** Headers kısmında 

x-access-token: giriş yaparken alınan token 