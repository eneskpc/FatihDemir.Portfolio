import { useParams } from 'react-router-dom';

const Body = () => {
    const { page } = useParams();

    switch (page) {
        case "hakkinda":
            return <div className='py-10 px-2 md:px-10'>
                <h1 className='font-bold text-3xl pb-10'>Hakkında</h1>
                <p className='pb-2'>
                    5 Temmuz 1993 yılında İstanbul’da dünyaya gelen Fatih Demir, Klasik Türk Mûsikîsi ve Tasavvuf Mûsikîsi sanatçısıdır. İlk ve orta öğrenimini İstanbul’da tamamlayan sanatçı, küçük yaşlarda “tambur” ve “bendir” eğitimleri almaya başlayarak müzik dünyasına ilk adımlarını atmıştır.
                </p>
                <p className='pb-2'>
                    Lise yıllarından itibaren profesyonel sahnelerde solist olarak yer almaya başlayan sanatçı, bu yıllarında “İstanbul Arapça Musiki Yarışması 1.liği” ve Kanal 7 televizyonunda yayınlanan “Gönülden Sesler İlahi Yarışması yarı-final derecesi” gibi birçok yarışma türünde dereceler aldı. Musiki hayatını “Sakarya Üniversitesi Türk Müziği Devlet Konservatuarı” ile devam ettiren sanatçı, 2017 yılında tüm Türkiye genelindeki konservatuar mezunlarının ortalamasını geçerek bu kurumdan birincilikle mezun oldu. Üniversite yıllarında TRT Klasik Türk Müziği Gençlik Korosu’nda da çalışmalarını sürdürdü. Eğitim hayatına çok önem veren sanatçı, ikinci bir üniversite olarak Atatürk Üniversitesi İlahiyat Fakültesi’nden öğrenimini sürdürmektedir.
                </p>

                <p className='pb-2'>
                    Profesyonel sahnedeki solistliğinin yanı sıra oyunculuk vasfına da sahip olan sanatçı, Türk Radyo Televizyon (TRT) kurumunda yayınlanan “Yunus Emre, Mehmetçik Kût’ül-Amâre ve Payitaht Abdulhamid dizilerinde oyunculuk ve eser seslendirmeleri de yaptı.
                </p>
                <p className='pb-2'>
                    Kariyerini tasavvuf mûsikîsi albümüyle taçlandırmak isteyen sanatçı, “Vefakâr” isimli ilk solo albüm çalışmasını sürdürmektedir. İstanbul ve birçok ilde özel programlar, çeşitli anma geceleri, belediye Ramazan ayı etkinlikleri, televizyon kanalları ve radyo yayınlarında sahne alan sanatçı günümüzde faal olarak eğitmenlik, musiki topluluğu çalışmaları ve sahne sanatçılığına devam etmekle beraber beş yıllık müzik öğretmenliği tecrübesine sahiptir.
                </p>

            </div>
        default:
            return <div>asda</div>
    }
}

export default Body