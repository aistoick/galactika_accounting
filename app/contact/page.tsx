import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aloqa",
  description:
    "Professional buxgalteriya xizmatlari uchun Sterling & Hamkorlar bilan bog'laning. Bugun maslahat vaqtini belgilang.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Biz bilan bog'laning</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Boshlashga tayyormisiz? Biz barcha buxgalteriya va moliyaviy ehtiyojlaringizda yordam berishga tayyormiz
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-8">Bog'lanish</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Telefon</h4>
                    <p className="text-slate-600 text-lg">(99) 123-4567</p>
                    <p className="text-slate-500 text-sm">Dushanba - Juma: 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Elektron pochta</h4>
                    <p className="text-slate-600 text-lg">info@galactika.uz</p>
                    <p className="text-slate-500 text-sm">24 soat ichida javob beramiz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Ofis manzili</h4>
                    <p className="text-slate-600 text-lg">
                    Samarqand, O'zbekiston
                      <br />
                      {/* Shahar markazi, ST 12345 */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Ish vaqti</h4>
                    <div className="space-y-1 text-slate-600">
                      <p>Dushanba - Juma: 8:00 - 18:00</p>
                      <p>Shanba: 9:00 - 14:00</p>
                      <p>Yakshanba: Yopiq</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Shoshilinch soliq yordami</h3>
                <p className="text-slate-600 mb-4">
                  Shoshilinch soliq yordami kerakmi? Biz muhim muddatlar uchun soliq mavsumida shoshilinch yordam taklif
                  qilamiz.
                </p>
                <p className="text-amber-600 font-semibold">Shoshilinch liniya: (99) 123-4568</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Maslahat vaqtini belgilash</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ism *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Ahmadjon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Familiya *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Karimov"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Elektron pochta manzili *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="ahmadjon@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefon raqami *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Kerakli xizmat *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Xizmatni tanlang</option>
                    <option value="accounting">Buxgalteriya xizmatlari</option>
                    <option value="tax">Soliq tayyorlash</option>
                    <option value="payroll">Ish haqi xizmatlari</option>
                    <option value="financial-planning">Moliyaviy rejalashtirish</option>
                    <option value="audit">Audit yordami</option>
                    <option value="consulting">Biznes maslahat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Kompaniya/Tashkilot</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Kompaniya nomi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Xabar</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Ehtiyojlaringiz va qanday yordam berishimiz mumkinligi haqida bizga ayting..."
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
                    <span className="ml-2 text-sm text-slate-600">
                      Men so'rovim bo'yicha Sterling & Hamkorlardan xabarlar olishga roziman.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Xabar yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
