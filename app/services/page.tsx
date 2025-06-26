import { FileText, Calculator, Users, DollarSign, Shield, Award } from "lucide-react"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Xizmatlar",
  description:
    "Soliq tayyorlash, ish haqi, moliyaviy rejalashtirish, audit yordami va biznes maslahatni o'z ichiga olgan keng qamrovli buxgalteriya xizmatlari.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Bizning xizmatlarimiz</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Biznes va shaxsiy buxgalteriya ehtiyojlaringizni qondirish uchun mo'ljallangan keng qamrovli moliyaviy
              yechimlar
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <FileText className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Buxgalteriya xizmatlari</h3>
              <p className="text-slate-600 mb-4">
                Moliyangizni tartibli va qonunga mos holda saqlash uchun to'liq kitob yuritish, moliyaviy hisobotlar
                tayyorlash va buxgalteriya tizimini o'rnatish.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Oylik kitob yuritish</li>
                <li>• Moliyaviy hisobotlar tayyorlash</li>
                <li>• QuickBooks o'rnatish va o'qitish</li>
                <li>• Naqd pul oqimi boshqaruvi</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <Calculator className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Soliq tayyorlash</h3>
              <p className="text-slate-600 mb-4">
                Tejamkorligingizni maksimal darajada oshirish va qonunga rioya qilishni ta'minlash uchun jismoniy
                shaxslar va bizneslar uchun professional soliq tayyorlash va rejalashtirish xizmatlari.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Jismoniy shaxslar uchun soliq deklaratsiyasi</li>
                <li>• Biznes soliq deklaratsiyasi</li>
                <li>• Soliq rejalashtirish strategiyalari</li>
                <li>• IRS vakillik</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <Users className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Ish haqi xizmatlari</h3>
              <p className="text-slate-600 mb-4">
                Xodimlar va pudratchilar uchun keng qamrovli ish haqi hisoblash, soliq to'lash va qonunga rioya qilish
                boshqaruvi.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Ish haqi hisoblash</li>
                <li>• Soliq ushlab qolish va to'lash</li>
                <li>• To'g'ridan-to'g'ri depozit o'rnatish</li>
                <li>• Yil oxiri hisobotlari</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <DollarSign className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Moliyaviy rejalashtirish</h3>
              <p className="text-slate-600 mb-4">
                Ongli biznes qarorlari qabul qilish va uzoq muddatli maqsadlarga erishishga yordam berish uchun
                strategik moliyaviy rejalashtirish va tahlil.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Byudjet tayyorlash</li>
                <li>• Moliyaviy prognozlash</li>
                <li>• Investitsiya rejalashtirish</li>
                <li>• Pensiya rejalashtirish</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <Shield className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Audit yordami</h3>
              <p className="text-slate-600 mb-4">
                Auditlar davomida qonunga rioya qilish, aniqlik va xotirjamlikni ta'minlash uchun professional audit
                tayyorlash va vakillik.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Audit tayyorlash</li>
                <li>• IRS audit vakilligi</li>
                <li>• Hujjatlarni ko'rib chiqish</li>
                <li>• Qonunga rioya qilish bo'yicha maslahat</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <Award className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Biznes maslahat</h3>
              <p className="text-slate-600 mb-4">
                Operatsiyalaringizni optimallashtirish, rentabellikni oshirish va o'sishni rag'batlantirish uchun
                professional biznes maslahat va konsalting.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biznes tuzilmasi rejalashtirish</li>
                <li>• Jarayonlarni optimallashtirish</li>
                <li>• Moliyaviy tahlil</li>
                <li>• O'sish strategiyalari</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Boshlashga tayyormisiz?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Buxgalteriya va moliyaviy ehtiyojlaringizda qanday yordam berishimizni muhokama qilish uchun bugun biz bilan
            bog'laning.
          </p>
          <a
            href="/contact"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Maslahat vaqtini belgilash
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
