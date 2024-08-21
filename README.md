# React-QuizApp
html css ve javascript kullanarak gerçekleştirilmiş bir quiz web uygulamsıdır.React kullanılmıştır.
Soruların bir süresi,zorluk seviysesi vardır.Ve yanıtların tek tek değerelndirilip en sonunda skorun sunulması amaçlanmıştır.


my-app
        /node_modules
           
        /public
                 -favicon
                 -index.html   //Bu dosya, React uygulamanızın HTML yapısını tanımlar. Uygulamanızın kök HTML dosyasıdır.
                 -logo192
                 -logo512
                 -manifest
                 -robots

                 
         /src
              -App.cs           //Ana uygulama bileşenidir. Diğer bileşenleri içerir ve uygulamanın temel yapısını oluşturur.
              
              -App.js
              
              -App.test.js
              
              -index.hmtl
              
              -index.js         //React uygulamanızın giriş noktasıdır. React bileşenlerini tarayıcıya render eder.
             
              -logo
              
              -reportWebVitals
              
              -setupTests




         
             /components
                      -Question.js       //Soru ve cevap seçeneklerini render eden bileşendir.
                      
                      -Quiz.js          //Quiz mantığını yöneten bileşendir. Soruları gösterir ve kullanıcının cevaplarını alır.
                      
                       
                       -Timer.js        //Her sorunun zaman sınırını kontrol eden ve kalan zamanı gösteren bileşendir.


                        
             /data 
                       questions.json   //Soruları ve cevap seçeneklerini içeren JSON dosyası.





           package.json   //Bu dosya, projenizin bağımlılıklarını ve yapılandırmalarını içerir.
          package-lock
                       
