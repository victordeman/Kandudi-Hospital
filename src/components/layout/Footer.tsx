import Link from "next/link";
import { HOSPITAL_INFO, NAV_LINKS } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Kandudi Hospital</h3>
          <p className="text-sm text-slate-400 italic">&quot;{HOSPITAL_INFO.tagline}&quot;</p>
          <p className="text-sm">
            Providing high-quality, accessible, and patient-focused healthcare services with emphasis on safety and compassion.
          </p>
          <p className="text-xs text-slate-500">Proudly serving Anambra & beyond 🇳🇬</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            <li><Link href="/emergency" className="hover:text-white transition-colors">Emergency Services</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Health Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Obstetrics & Gynaecology</li>
            <li>Surgery</li>
            <li>Pediatrics</li>
            <li>Internal Medicine</li>
            <li>Diagnostic Laboratory</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span>{HOSPITAL_INFO.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <span>{HOSPITAL_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <span>{HOSPITAL_INFO.email}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {HOSPITAL_INFO.name}. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
