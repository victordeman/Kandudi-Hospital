import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Shield, Award } from "lucide-react";
import { HOSPITAL_INFO } from "@/constants";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {HOSPITAL_INFO.established}. Dedicated to delivering comprehensive, patient-centered medical care.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                Kandudi Specialist Hospital and Maternity is a private healthcare facility dedicated to delivering comprehensive, patient-centered medical care. 
                With a strong focus on Obstetrics and Gynaecology, the hospital provides expert maternal, surgical, and general medical services supported by modern diagnostic facilities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We are committed to safe clinical outcomes, compassionate care, and continuous excellence in healthcare delivery. Our team of experienced professionals works tirelessly to ensure that every patient receives the highest standard of medical attention.
              </p>
            </div>
            <div className="relative bg-slate-100 rounded-[3rem] h-[450px] flex items-center justify-center border-8 border-slate-50 shadow-xl overflow-hidden">
               <Image
                src="/hospital-building.jpg"
                alt="Kandudi Specialist Hospital Facility"
                fill
                className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-10 text-center space-y-6">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Target className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide high-quality, accessible, and patient-focused healthcare services with emphasis on safety, compassion, and clinical excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-10 text-center space-y-6">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be a leading specialist hospital recognized for excellence in maternal and general healthcare services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-10 text-center space-y-6">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Core Values</h3>
                <ul className="text-slate-600 text-sm space-y-3 font-medium">
                  <li className="flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Excellence in clinical care</li>
                  <li className="flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Compassion and patient-centered service</li>
                  <li className="flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Integrity and professionalism</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Professional Affiliations & Accreditations</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-4 p-10 bg-slate-50 rounded-[2rem] w-full md:w-auto min-w-[320px] border border-slate-100">
              <Award className="w-14 h-14 text-primary" />
              <div>
                <h4 className="font-extrabold text-xl">MDCN</h4>
                <p className="text-slate-500 text-sm">Medical and Dental Council of Nigeria</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-slate-50 rounded-[2rem] w-full md:w-auto min-w-[320px] border border-slate-100">
              <Award className="w-14 h-14 text-primary" />
              <div>
                <h4 className="font-extrabold text-xl">NMA</h4>
                <p className="text-slate-500 text-sm">Nigerian Medical Association</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
