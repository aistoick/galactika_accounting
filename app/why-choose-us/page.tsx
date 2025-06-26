import { Award, Clock, Shield, CheckCircle, Star } from "lucide-react"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nega biz",
  description:
    "Nega bizneslar Sterling & Hamkorlarga ishonishini bilib oling - sertifikatlangan mutaxassislar, o'z vaqtida xizmat va isbotlangan natijalar.",
}

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nega Galactikani tanlash kerak
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Bizni ajratib turadigan va ishonchli moliyaviy hamkoringiz qiladigan afzalliklar
            </p>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sertifikatlangan mutaxassislar</h3>
              <p className="text-slate-600">
                Bizning jamoamiz isbotlangan tajriba va doimiy professional rivojlanish bilan CPA va sertifikatlangan
                buxgalteriya mutaxassislaridan iborat.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">O'z vaqtida va ishonchli xizmat</h3>
              <p className="text-slate-600">
                Biz muddatlarning muhimligini tushunamiz. Jarayon davomida doimiy aloqa bilan har doim tez va ishonchli
                xizmatga ishoning.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Maxfiy va xavfsiz</h3>
              <p className="text-slate-600">
                Sizning moliyaviy ma'lumotlaringiz eng yuqori darajadagi xavfsizlik, maxfiylik va professional axloq
                standartlari bilan himoyalangan.
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Mukammallikka bo'lgan majburiyatimiz</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Shaxsiy xizmat</h4>
                    <p className="text-slate-600">
                      Har bir mijoz o'zining maxsus ehtiyojlari va maqsadlariga moslashtirilgan yechimlarni oladi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Faol muloqot</h4>
                    <p className="text-slate-600">
                      Biz sizni jarayon davomida xabardor qilamiz va yaxshilash imkoniyatlarini faol ravishda
                      aniqlaymiz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Texnologiya integratsiyasi</h4>
                    <p className="text-slate-600">
                      Biz samarali va aniq xizmat ko'rsatish uchun eng so'nggi buxgalteriya dasturlari va
                      texnologiyalaridan foydalanamiz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Keng qamrovli yordam</h4>
                    <p className="text-slate-600">
                      Oddiy kitob yuritishdan tortib murakkab moliyaviy rejalashtirgacha, biz to'liq xizmat buxgalteriya
                      yechimlarini taqdim etamiz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Mijozlar muvaffaqiyati ko'rsatkichlari</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Mijozlar saqlanish darajasi</span>
                  <span className="text-2xl font-bold text-amber-600">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">O'rtacha mijoz munosabatlari</span>
                  <span className="text-2xl font-bold text-amber-600">3+ yil</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Mijozlar mamnuniyati darajasi</span>
                  <span className="text-2xl font-bold text-amber-600">4.9/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">O'z vaqtida yetkazish darajasi</span>
                  <span className="text-2xl font-bold text-amber-600">99.5%</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-300">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="font-semibold text-slate-900">Soha e'tirof etishi</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Better Business Bureau A+ reytingi</li>
                  <li>• Savdo palatasi a'zosi</li>
                  <li>• AICPA professional standartlari</li>
                  <li>• Davlat kengashi sertifikatlangan CPA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Galactikning farqini his qiling</h2>
          <p className="text-xl text-slate-300 mb-8">
            Moliyaviy muvaffaqiyatlarini bizga ishongan yuzlab mamnun mijozlarga qo'shiling.
          </p>
          <a
            href="/contact"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Bugun boshlang
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
