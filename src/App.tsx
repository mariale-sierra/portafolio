import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Dashboard from "@/pages/Dashboard"
import About from "@/pages/About"
import Experience from "@/pages/Experience"
import Projects from "@/pages/Projects"
import Skills from "@/pages/Skills"

/* Scrolls to top on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route
            path="*"
            element={
              <div className="mx-auto max-w-7xl px-4 py-24 text-center">
                <p className="text-sm font-medium text-accent">404</p>
                <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
