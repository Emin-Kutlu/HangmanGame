//Kelime listesi için oluşturulmuş javascript kodu//
const wordList = [
    {
        kelime: "gitar",
        ipucu: "Telleri olan bir müzik aleti."
    },
    {
        kelime: "oksijen",
        ipucu: "Renksiz, kokusuz, yaşam için hayati öneme sahip bir gaz."
    },
    {
        kelime: "dağ",
        ipucu: "Yeryüzünün büyük doğal yükseltisi."
    },
    {
        kelime: "resim",
        ipucu: "Yüzey üzerinde renkleri kullanarak görseller veya ifade oluşturan bir sanat formu."
    },
    {
        kelime: "astronomi",
        ipucu: "Gök cisimlerini ve olaylarını bilimsel olarak inceleyen alan."
    },
    {
        kelime: "futbol",
        ipucu: "Bir top ile oynanan popüler bir spor."
    },
    {
        kelime: "çikolata",
        ipucu: "Kakao çekirdeklerinden yapılan tatlı bir atıştırmalık."
    },
    {
        kelime: "kelebek",
        ipucu: "Renkli kanatları ve ince bir vücudu olan bir böcek."
    },
    {
        kelime: "tarih",
        ipucu: "Geçmiş olayların ve insan medeniyetinin incelenmesi."
    },
    {
        kelime: "pizza",
        ipucu: "Yuvarlak, düz bir taban üzerine eklenen malzemelerle yapılan lezzetli bir yemek."
    },
    {
        kelime: "caz",
        ipucu: "İmprovizasyon ve senkop ile karakterize edilen bir müzik türü."
    },
    {
        kelime: "kamera",
        ipucu: "Görüntüleri veya videoları yakalamak ve kaydetmek için kullanılan bir cihaz."
    },
    {
        kelime: "elmas",
        ipucu: "Parlaklığı ve sertliği ile bilinen değerli bir taş."
    },
    {
        kelime: "macera",
        ipucu: "Heyecan verici veya cesur bir deneyim."
    },
    {
        kelime: "bilim",
        ipucu: "Fiziksel ve doğal dünyanın yapısı ve davranışının sistematik olarak incelenmesi."
    },
    {
        kelime: "bisiklet",
        ipucu: "İki tekerlekli, insan gücüyle çalışan bir taşıt."
    },
    {
        kelime: "günbatımı",
        ipucu: "Güneşin günlük olarak ufuk çizgisinin altına kaybolması."
    },
    {
        kelime: "kahve",
        ipucu: "Kavrulmuş kahve çekirdeklerinden yapılan popüler bir kafeinli içecek."
    },
    {
        kelime: "dans",
        ipucu: "Genellikle müziğe uygun ritmik bir vücut hareketi."
    },
    {
        kelime: "galaksi",
        ipucu: "Gravite tarafından bir arada tutulan yıldızlar, gaz ve tozdan oluşan geniş bir sistem."
    },
    {
        kelime: "orkestra",
        ipucu: "Farklı enstrümanlar çalan büyük bir müzisyen grubu."
    },
    {
        kelime: "volkan",
        ipucu: "Lava, kaya parçacıkları, sıcak buhar ve gazların fışkırdığı bir dağ veya tepe."
    },
    {
        kelime: "roman",
        ipucu: "Genellikle karmaşık bir kurgu ve karakterlere sahip uzun bir kurgusal eser."
    },
    {
        kelime: "heykel",
        ipucu: "Malzemeleri şekillendirerek veya birleştirerek oluşturulan üç boyutlu bir sanat formu."
    },
    {
        kelime: "senfoni",
        ipucu: "Genellikle birden fazla bölümden oluşan, tam bir orkestra için uzun bir müziksel kompozisyon."
    },
    {
        kelime: "mimarlık",
        ipucu: "Binaların tasarlanması ve inşa edilmesinin sanat ve bilimi."
    },
    {
        kelime: "bale",
        ipucu: "Hassas ve zarif hareketlerle karakterize edilen klasik bir dans formu."
    },
    {
        kelime: "astronot",
        ipucu: "Uzayda seyahat etmeye ve çalışmaya eğitilmiş kişi."
    },
    {
        kelime: "şelale",
        ipucu: "Bir yükseklikten düşen suyun ardı ardına akışı."
    },
    {
        kelime: "teknoloji",
        ipucu: "Bilimsel bilginin pratik amaçlar için uygulanması."
    },
    {
        kelime: "gökkuşağı",
        ipucu: "Işığın yansıma, kırılma ve dağılmasıyla oluşan bir meteorolojik olgu."
    },
    {
        kelime: "evren",
        ipucu: "Var olan tüm madde, uzay ve zamanın bir bütünü."
    },
    {
        kelime: "piyano",
        ipucu: "Tuşlara basarak çalınan tellere vuran çekiçlerle çalışan bir müzik aleti."
    },
    {
        kelime: "tatil",
        ipucu: "Zevk, dinlenme veya gevşemeye ayrılan bir zaman dilimi."
    },
    {
        kelime: "yağmur ormanı",
        ipucu: "Yüksek yağışlı ve biyolojik çeşitliliğe sahip yoğun bir orman."
    },
    {
        kelime: "tiyatro",
        ipucu: "Oyunların, filmlerin veya diğer performansların sahnelendiği bir yapı veya açık alan."
    },
    {
        kelime: "telefon",
        ipucu: "Uzun mesafelere ses iletimi için kullanılan bir cihaz."
    },
    {
        kelime: "dil",
        ipucu: "Kelimelerin, jestlerin ve cümle yapılarının bir sistemi."
    },
    {
        kelime: "çöl",
        ipucu: "Neredeyse hiç yağış almayan veya kurak bir toprak."
    },
    {
        kelime: "ayçiçeği",
        ipucu: "Büyük bir sarı çiçek başı olan uzun bir bitki."
    },
    {
        kelime: "fantazi",
        ipucu: "Sihir ve doğaüstü unsurlar içeren hayal gücüne dayalı bir kurgu türü."
    },
    {
        kelime: "teleskop",
        ipucu: "Uzaydaki uzak nesneleri görmek için kullanılan optik bir araç."
    },
    {
        kelime: "hafif rüzgar",
        ipucu: "Hafif bir rüzgar."
    },
    {
        kelime: "vaha",
        ipucu: "Çöllerde su bulunan verimli bir nokta."
    },
    {
        kelime: "fotoğrafçılık",
        ipucu: "Işığın veya diğer elektromanyetik radyasyonun kaydedilmesiyle görüntülerin oluşturulması sanatı, süreci veya uygulaması."
    },
    {
        kelime: "safari",
        ipucu: "Genellikle doğal ortamlarında vahşi yaşamı gözlemlemek için yapılan bir keşif veya seyahat."
    },
    {
        kelime: "gezegen",
        ipucu: "Bir yıldızın etrafında dönen ve kendi ışığını üretmeyen bir gök cisimi."
    },
    {
        kelime: "nehir",
        ipucu: "Denize, bir göle veya başka bir akarsuya akan büyük doğal su akışı."
    },
    {
        kelime: "tropikal",
        ipucu: "Akrep Dönencesi ile Yengeç Dönencesi arasındaki bölge ile ilgili veya bu bölgede bulunan."
    },
    {
        kelime: "gizemli",
        ipucu: "Anlaşılması, açıklanması veya tanımlanması zor veya imkansız olan."
    },
    {
        kelime: "bulmaca",
        ipucu: "Zekayı veya bilgiyi test etmek için tasarlanmış bir oyun, oyuncak veya sorun."
    },
    {
        kelime: "fısıldamak",
        ipucu: "Çok yumuşak veya sessizce konuşmak, genellikle gizlice."
    },
    {
        kelime: "gölge",
        ipucu: "Bir nesnenin ışığı engellemesi sonucu oluşan karanlık alan veya şekil."
    },
    {
        kelime: "sır",
        ipucu: "Başkaları tarafından gizli tutulan veya bilinmeyen bir şey."
    },
    {
        kelime: "merak",
        ipucu: "Bir şeyi öğrenme veya bilgi edinme isteği."
    },
    {
        kelime: "tahmin edilemez",
        ipucu: "Önceden kestirilemeyen veya bilinmeyen; belirsiz."
    },
    {
        kelime: "karartmak",
        ipucu: "Birini kafa karışıklığına düşürmek veya bir şeyi anlaşılır olmaktan çıkarmak."
    },
    {
        kelime: "ortaya çıkarmak",
        ipucu: "Daha önce gizli veya bilinmeyen bir şeyi bildirmek veya göstermek."
    },
    {
        kelime: "illüzyon",
        ipucu: "Yanıltıcı bir görünüş veya izlenim."
    },
    {
        kelime: "ay ışığı",
        ipucu: "Aydan gelen ışık."
    },
    {
        kelime: "canlı",
        ipucu: "Enerji, parlaklık ve hayat dolu."
    },
    {
        kelime: "nostalji",
        ipucu: "Geçmişe özlem veya özlem."
    },
    {
        kelime: "parlak",
        ipucu: "Olağanüstü zeki, yetenekli veya etkileyici."
    }
];
