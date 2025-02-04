import Link from "next/link"
import { Instagram, Linkedin, Youtube, PhoneIcon as WhatsappIcon, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Skilled GURU</h3>
            <p className="text-gray-400">Empowering tech professionals with cutting-edge knowledge and resources.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#videos" className="text-gray-400 hover:text-white transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/course" className="text-gray-400 hover:text-white transition-colors">
                  Course
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Blog (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-400">Careers (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-400">Support (Coming Soon)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://www.instagram.com/_04_sanju__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/manyamsanjaykumarreddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://youtube.com/@skilled_guru?si=Dnify5KYXAz3AcvX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VakIQmhE50UnnswUAm0w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <WhatsappIcon className="w-6 h-6" />
                <span className="sr-only">WhatsApp Channel</span>
              </Link>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:skilledguruofficial@gmail.com" className="hover:text-white transition-colors">
                skilledguruofficial@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skilled GURU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

