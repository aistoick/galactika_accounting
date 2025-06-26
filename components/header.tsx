"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Calculator, Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Kompakt versiya */}
          <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <Calculator className="h-7 w-7 text-amber-500" />
            <span className="ml-2 text-lg font-bold text-white hidden sm:block">Galactika</span>
            <span className="ml-2 text-lg font-bold text-white sm:hidden">Galactika</span>
          </Link>

          {/* Desktop Navigation - Kompakt */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                isActive("/")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                isActive("/services")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Xizmatlar
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                isActive("/about")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Biz haqimizda
            </Link>
            <Link
              href="/why-choose-us"
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                isActive("/why-choose-us")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Nega biz
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                isActive("/contact")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Aloqa
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-amber-500 hover:bg-slate-800/50 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <nav className="py-2 space-y-1 border-t border-slate-800">
            <Link
              href="/"
              onClick={closeMenu}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/services")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Xizmatlar
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/about")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Biz haqimizda
            </Link>
            <Link
              href="/why-choose-us"
              onClick={closeMenu}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/why-choose-us")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Nega biz
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/contact")
                  ? "text-amber-500 bg-amber-500/10"
                  : "text-slate-300 hover:text-amber-500 hover:bg-slate-800/50"
              }`}
            >
              Aloqa
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
