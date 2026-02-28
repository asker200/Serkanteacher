export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    level: 'A1',
    questions: [
      {
        id: 1,
        question: "Metindeki kişinin babası ne iş yapıyor?",
        options: ["Öğretmen", "Doktor", "Mühendis", "Hemşire"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Ailenin evcil hayvanının adı nedir?",
        options: ["Pamuk", "Minnoş", "Tekir", "Boncuk"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Yazar saat kaçta okula gidiyor?",
        options: ["Sekiz", "Dokuz", "Yedi", "On"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Yazar akşam yemeğinden sonra ne yapıyor?",
        options: ["Ödev yapıyor", "Televizyon izliyor", "Uyuyor", "Kitap okuyor"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Aile nerede yaşıyor?",
        options: ["Ankara", "İzmir", "İstanbul", "Bursa"],
        correctAnswer: 2
      }
    ]
  },
  {
    level: 'A2',
    questions: [
      {
        id: 1,
        question: "Pazardan ne alındı?",
        options: ["Sadece meyve", "Sadece sebze", "Taze sebze ve meyve", "Sadece ekmek"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Fırıncı nasıl biriydi?",
        options: ["Ciddi", "Dost canlısı", "Üzgün", "Sinirli"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Yazarın en sevdiği kitap türü nedir?",
        options: ["Romantik", "Bilim kurgu", "Gizem", "Tarih"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "Yazar kitap okumaya ne zaman başladı?",
        options: ["8 yaşında", "10 yaşında", "12 yaşında", "15 yaşında"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Arkadaşlar kitapları ne yapıyorlar?",
        options: ["Satıyorlar", "Takas ediyorlar", "Ödünç alıyorlar", "Saklıyorlar"],
        correctAnswer: 1
      }
    ]
  },
  {
    level: 'B1',
    questions: [
      {
        id: 1,
        question: "Doktorlar günde ne kadar egzersiz öneriyor?",
        options: ["15 dakika", "30 dakika", "45 dakika", "60 dakika"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Egzersiz hangi hormonu salgılar?",
        options: ["Adrenalin", "Endorfin", "İnsülin", "Kortizol"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Dil öğrenmenin en iyi yolu nedir?",
        options: ["Gramer çalışmak", "Daldırma yöntemi", "Kelime ezberlemek", "Test çözmek"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "İşverenler çalışanlarda neyi değerli buluyor?",
        options: ["Tek dil bilme", "Çok dil bilme", "Sadece deneyim", "Sadece diploması"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Akıcı olmak için ne gereklidir?",
        options: ["Sadece hata yapmamak", "Düzenli pratik ve sabır", "Sadece kitap okumak", "Sadece film izlemek"],
        correctAnswer: 1
      }
    ]
  },
  {
    level: 'B2',
    questions: [
      {
        id: 1,
        question: "Teknoloji eğitimi nasıl dönüştürdü?",
        options: ["Daha pahalı hale getirdi", "Daha erişilebilir hale getirdi", "Daha zor hale getirdi", "Daha az etkili hale getirdi"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Online öğrenmenin olumsuz yanı nedir?",
        options: ["Çok pahalı olması", "Yalnızlık hissi yaratması", "Çok kolay olması", "Çok kısa sürmesi"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Sürdürülebilir yaşam sadece neyi kapsamaz?",
        options: ["Geri dönüşüm", "Tekrar kullanılabilir ürünler", "Et tüketimini azaltma", "Sadece geri dönüşüm"],
        correctAnswer: 3
      },
      {
        id: 4,
        question: "Kentsel bahçecilik ne sağlar?",
        options: ["Şehirlerde sebze yetiştirmeyi", "Sadece çiçek yetiştirmeyi", "Sadece ağaç dikmeyi", "Sadece park yapmayı"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "Yeşil topluma geçiş ne gerektirir?",
        options: ["Sadece bireysel çaba", "Sadece hükümet kararları", "Kolektif çaba ve uzun vadeli düşünme", "Sadece teknoloji"],
        correctAnswer: 2
      }
    ]
  },
  {
    level: 'C1',
    questions: [
      {
        id: 1,
        question: "Çapa etkisi neyi açıklar?",
        options: ["İlk bilgiye aşırı güvenmeyi", "Kayıptan kaçınmayı", "Risk almayı", "Grup düşüncesini"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Kayıp kaçınması neyi ifade eder?",
        options: ["Kazanç elde etmeyi", "Kayıplardan kaçınmayı tercih etmeyi", "Risk almayı", "Kararsızlığı"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Küreselleşme neye yol açmıştır?",
        options: ["Sadece ekonomik büyümeye", "Kültürel homojenleşme endişelerine", "Sadece teknolojik gelişmeye", "Sadece siyasi istikrara"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Hibrit kimlikler nasıl ortaya çıkar?",
        options: ["Sadece yerel etkilerle", "Küresel ve yerel etkilerin birleşmesiyle", "Sadece küresel etkilerle", "Teknoloji sayesinde"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Nudge teorisi ne önerir?",
        options: ["Zorla müdahale etmeyi", "Özgürlüğü kısıtlamadan yönlendirmeyi", "Tamamen yasaklamayı", "Sadece ceza vermeyi"],
        correctAnswer: 1
      }
    ]
  },
  {
    level: 'C2',
    questions: [
      {
        id: 1,
        question: "Seçim paradoksu neyi açıklar?",
        options: ["Daha fazla seçeneğin her zaman daha iyi olduğunu", "Aşırı seçeneğin karar felci ve azalmış mutluluk yaratabileceğini", "İnsanların her zaman en pahalısını seçtiğini", "Seçim yapmaktan kaçınıldığını"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Satisficing stratejisi nedir?",
        options: ["Mükemmelliği takip etmek", "Yeterince iyi olanı kabul etmek", "Hiçbir şey seçmemek", "En pahalısını seçmek"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Yapay zeka önceki teknolojik devrimlerden nasıl farklıdır?",
        options: ["Sadece fiziksel işleri otomatikleştirir", "Bilişsel alanlarda yetenek gösterir", "Sadece basit işleri yapar", "Hiçbir farkı yoktur"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Evrensel temel gelir neyin bir çözümü olarak öne sürülmüştür?",
        options: ["İşsizlik", "Yapay zekanın istihdam etkisine", "Enflasyon", "Göç"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Makinelere karşı insanın geliştirmesi gereken nitelikler nelerdir?",
        options: ["Hız ve güç", "Empati, bilgelik, etik yargı", "Fiziksel güç", "Teknik beceriler"],
        correctAnswer: 1
      }
    ]
  }
];
