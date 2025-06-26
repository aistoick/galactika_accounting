import Link from "next/link"
import { Calculator } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">Galactika</span>
            </div>
            <p className="text-slate-400">
              5 yildan ortiq vaqt davomida biznes va jismoniy shaxslarga professional buxgalteriya xizmatlarini
              ko'rsatib kelmoqdamiz.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Xizmatlar</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Buxgalteriya xizmatlari</li>
              <li>Soliq tayyorlash</li>
              <li>Ish haqi xizmatlari</li>
              <li>Moliyaviy rejalashtirish</li>
              <li>Audit yordami</li>
              <li>Biznes maslahat</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Kompaniya</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-white transition-colors">
                  Nega biz
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Aloqa ma'lumotlari</h4>
            <div className="space-y-2 text-slate-400">
              <p>+998 99 999-99-99</p>
              <p>info@galactika.info</p>
              <p>
               Samarqand, O'zbekiston
                {/* <br />
                Shahar markazi, ST 12345 */}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Galactika Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
