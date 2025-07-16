import Image from "next/image"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description:
    "Galactika haqida bilib oling - 5 yildan ortiq ishonchli moliyaviy tajriba va professional buxgalteriya xizmatlari.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Galactika</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              5 yildan ortiq ishonchli moliyaviy tajriba va professional xizmat
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/images/about_us.svg"
                alt="Sterling & Hamkorlar jamoasi"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Biz haqimizda</h2>
              <p className="text-lg text-slate-600 mb-6">
                2020 yilda tashkil etilgan Galactika biznes va jismoniy
                shaxslarga ajoyib buxgalteriya va moliyaviy xizmatlarni ko'rsatib kelmoqda. Bizning firmamiz halollik,
                aniqlik va shaxsiy xizmat tamoyillari asosida qurilgan.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Biz mijozlarimiz bilan uzoq muddatli hamkorlik o'rnatishdan faxrlanamiz, ularning moliyaviy maqsadlariga
                erishishga yordam beradigan strategik yo'l-yo'riq beramiz. Mukammallik va doimiy professional
                rivojlanishga bo'lgan sodiqligimiz bizni buxgalteriya sohasida ishonchli nom qildi.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">5+</div>
                  <div className="text-slate-600">Yillik tajriba</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-slate-600">Mamnun mijozlar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bizning missiyamiz</h3>
              <p className="text-slate-600">
                Mijozlarimizga ongli qarorlar qabul qilish, maqsadlariga erishish va doimiy moliyaviy muvaffaqiyat
                qurish imkonini beradigan ajoyib buxgalteriya va moliyaviy xizmatlarni taqdim etish. Biz eng yuqori
                darajadagi professionallik bilan aniq, o'z vaqtida va strategik moliyaviy yo'l-yo'riq berishga sodiqmiz.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bizning qadriyatlarimiz</h3>
              <ul className="text-slate-600 space-y-2">
                <li>
                  <strong>Halollik:</strong> Biz biznesni halollik va shaffoflik bilan olib boramiz
                </li>
                <li>
                  <strong>Mukammallik:</strong> Biz qilgan har bir ishda eng yuqori sifatga intilamiz
                </li>
                <li>
                  <strong>Xizmat:</strong> Biz mijozlarimizning ehtiyojlarini birinchi o'ringa qo'yamiz
                </li>
                <li>
                  <strong>Ishonch:</strong> Biz ishonchlilik asosida doimiy munosabatlar quramiz
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Bizning professional jamoamiz</h2>
            <p className="mt-4 text-xl text-slate-600">
              Sizning muvaffaqiyatingizga bag'ishlangan sertifikatlangan mutaxassislar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-slate-200">
              <Image
                src="/images/sardor.jpg"
                alt="Ruzimaxmatov Sardor"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
                style={{ aspectRatio: "1 / 1" }}
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Ruzimaxmatov Sardor G‘ani o‘g‘li</h3>
              <p className="text-amber-600 font-medium mb-3">Buxgalter, Iqtisodchi, Biznes Konsultant, Iqtisodiy Yuridik Mutaxassis</p>
              <p className="text-slate-600">
                Iqtisodiyot, buxgalteriya va biznes yuritishda kompleks yechimlar bo‘yicha 7+ yillik tajriba. Soliq rejalashtirish, huquqiy maslahat va strategik moliyaviy boshqaruv sohalarida mutaxassis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-slate-200">
              <Image
                src="/images/suxrob.jpg"
                alt="Suhrob"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
                style={{ aspectRatio: "1 / 1" }}
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Ruzimaxmatov Suxrob</h3>
              <p className="text-amber-600 font-medium mb-3">Direktor, Buxgalter</p>
              <p className="text-slate-600">
                Korxona boshqaruvi va buxgalteriya sohasida zamonaviy yondashuvga ega yosh rahbar. Moliyaviy nazorat va hisobot yuritishda samarali tizimlarni joriy qilish bo‘yicha tajribali mutaxassis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-slate-200">
              <Image
                src="/images/javlon.jpg"
                alt="David Chen - CPA, Katta yordamchi"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
                style={{ aspectRatio: "1 / 1" }}
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Berdiyorov Javlon</h3>
              <p className="text-amber-600 font-medium mb-3">Buxgalter, 1C Dasturchi va Administrator</p>
              <p className="text-slate-600">
                Buxgalteriya tizimlarini avtomatlashtirishda, ayniqsa 1C platformasida samarali yechimlar ishlab chiqish va boshqarishda tajribali mutaxassis. 
              </p>
            </div>

             <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-slate-200">
              <Image
                src="/images/shoxzod.jpg"
                alt="David Chen - CPA, Katta yordamchi"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
                style={{ aspectRatio: "1 / 1" }}
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Berdiyorov Shoxzod Eraliyevich</h3>
              <p className="text-amber-600 font-medium mb-3">Buxgalter, Tarixchi</p>
              <p className="text-slate-600">
                Moliya va buxgalteriya sohasida chuqur bilimga ega, tarixiy tahlil va ilmiy tadqiqotlarda faol mutaxassis. Iqtisodiy jarayonlarni tarixiy kontekstda baholay oladigan keng ko‘lamli yondashuv egasi.
              </p>
            </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-slate-200">
              <Image
                src="/images/suvanov.png"
                alt="David Chen - CPA, Katta yordamchi"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
                style={{ aspectRatio: "1 / 1" }}
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Suvanov Abbos Abriy o‘g‘li</h3>
              <p className="text-amber-600 font-medium mb-3">Buxgalter</p>
              <p className="text-slate-600">
                Moliya va buxgalteriya sohasida tartibli hisobot yuritish hamda korxona faoliyatini moliyaviy jihatdan tahlil qilishda malakali mutaxassis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
