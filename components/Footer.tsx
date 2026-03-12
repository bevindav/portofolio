import { portfolioData } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <p>
          © {currentYear} {portfolioData.name} 
        </p>
      </div>
    </footer>
  )
}
