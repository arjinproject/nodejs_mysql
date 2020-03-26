# nodejs_mysql
NodeJS, JWT, Sequelize, Mysql CRUD

Nodejs ile RestFul api geliştirme


not ekleme-silme güncelleme işlemleri oturum açılırken alınan token ile yetkilendirme
yapılarak işlemler yapılmıştır.


Oluşturulan servisler şu şekildedir.

http://localhost:3000/signup => (POST) kullanıcı oluşturmak için kullanılıyor. 

http://localhost:3000/signIn => (POST) oturum açmak için kullanılıyor. Geriye token veriyor

http://localhost:3000/notes => Not ekleme (POST) ve not listeleme (GET) işlemleri yapılabiliyor. Ekleme sadece Admin; görüntüleme herkese tanımlanmıştır

http://localhost:3000/note/:id => Not güncelleme (PUT) ve silme (DELETE) işlemleri yapılabiliyor. Güncelleme Pm ve Admin; silme sadece admin yetkisine tanımlanmıştır