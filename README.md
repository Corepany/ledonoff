# ledonoff

##Raspberry Pi Node js ile internet üzerinden led ışık uygulaması

###Kullanılanlar
- Raspberry pi (internete bağlı - usb wifi yada eternet ile)
- Direnç
- Led

###Yazılımlar 
- Nodejs 
- Express Js 
- Gpio

###Kurulum Yazılım kısmı

```
git clone  https://github.com/Corepany/ledonoff.git

cd ledonoff

npm init

sudo npm install
```

## Programın devre kısmı

Bu kısımda aşağıdaki şemada olduğu gibi Sol taraftaki devre Pin 9 – GND a ( sol taraftan 5. pin) ve sağ tarafındaki devrede pin 11 e (soldan 6. pin) bağlanacak. Direnç koymayı unutmayın ledleriniz yanabilir.

![alt tag](http://i0.wp.com/thejackalofjavascript.com/wp-content/uploads/2014/10/Screen-Shot-2014-10-03-at-5.33.02-pm.png?resize=451%2C185)

###Programı çalıştırmak için

```sudo node index.js```

Programımız localhost 3000 portunda çalışıyor. Tarayıcınızdan http://localhost:3000 ile ulaşabilirsiniz. Bu kısımda jquery ve bootstrap ile on off butonu yapıldığını göreceksiniz. Butonun on ve off durumuna göre led ışığınız yanıp sönecektir. 

### Başka neler yapılabilir
Biraz daha uğraş ile local ip nizi modemden açıp bir domaine bağlayarak dünyanın heryerinden ışığınıza erişilebilmesini sağlayabilirsiniz. 

Röleler (relay) ile projenize daha farklı cihazlar bağlayıp bunların çalışmasını sağlayabilirsiniz.

