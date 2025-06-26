import Image from "next/image"
import Link from "next/link"
import { Award } from "lucide-react"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bosh sahifa",
  description:
    "Galactika - Professional buxgalteriya, soliq tayyorlash va moliyaviy maslahat xizmatlari. 1998 yildan beri 500+ biznesga ishonchli xizmat.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Award className="w-4 h-4 mr-2" />
                biznesga ishonchli xizmat
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Professional Moliyaviy
              <span className="block text-amber-500">Mukammallik</span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
              Biznesingizning barqaror o'sishi va moliyaviy barqarorligiga erishish uchun professional buxgalteriya,
              soliq tayyorlash va moliyaviy maslahat xizmatlari.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/contact"
                className="bg-amber-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Maslahat olish
              </Link>
              <Link
                href="/services"
                className="flex items-center text-amber-500 font-semibold text-lg hover:text-amber-400 transition-colors"
              >
                Xizmatlarni ko'rish
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700">
                <div className="text-4xl font-bold text-amber-500 mb-2">5+</div>
                <div className="text-slate-300 font-medium">Yillik tajriba</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700">
                <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
                <div className="text-slate-300 font-medium">Mamnun mijozlar</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700">
                <div className="text-4xl font-bold text-amber-500 mb-2">98%</div>
                <div className="text-slate-300 font-medium">Mijozlar saqlanish darajasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Galactika</h2>
            <p className="mt-4 text-xl text-slate-600">Sizning ishonchli moliyaviy hamkoringiz</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="images/home_hero.svg"
                alt="Professional buxgalteriya xizmatlari"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Keng qamrovli moliyaviy yechimlar</h3>
              <p className="text-lg text-slate-600 mb-6">
                5 yildan ortiq vaqt davomida Sterling & Hamkorlar biznes va jismoniy shaxslarga ajoyib buxgalteriya va
                moliyaviy xizmatlarni taqdim etib kelmoqda. Bizning sertifikatlangan mutaxassislarimiz aniq, o'z vaqtida
                va strategik moliyaviy yo'l-yo'riq beradi.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Biz har bir mijozning o'ziga xos ehtiyojlari borligini tushunamiz. Shuning uchun biz moliyaviy
                maqsadlaringizga erishishga yordam berish uchun shaxsiy xizmat va moslashtirilgan yechimlarni taklif
                qilamiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center"
                >
                  Biz haqimizda batafsil
                </Link>
                <Link
                  href="/services"
                  className="border border-slate-900 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-center"
                >
                  Barcha xizmatlar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nega bizneslar bizga ishonadi</h2>
            <p className="mt-4 text-xl text-slate-600">Natija beradigan professional mukammallik</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-slate-600 font-medium">Mijozlar saqlanish darajasi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-slate-600 font-medium">Yillik tajriba</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-slate-600 font-medium">Mamnun mijozlar</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/why-choose-us"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Bizning farqimizni bilib oling
            </Link>
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
          <Link
            href="/contact"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Maslahat vaqtini belgilash
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
