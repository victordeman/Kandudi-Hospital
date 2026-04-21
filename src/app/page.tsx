import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HOSPITAL_INFO } from "@/constants";
import { 
  Heart, 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  PhoneCall,
  Users,
  Target,
  Eye,
  Shield
} from "lucide-react";

const testimonials = [
  {
    text: "The care I received at Kandudi Hospital during my delivery was exceptional. The doctors and nurses were professional and compassionate throughout my stay.",
    author: "Mrs. N. Okeke"
  },
  {
    text: "Dr. Monago is a truly gifted surgeon. My myomectomy was successful and the recovery was smooth thanks to the amazing postnatal team.",
    author: "Ms. C. Eze"
  },
  {
    text: "I highly recommend Kandudi Hospital for anyone looking for safe maternal care. Their facilities are modern and the staff makes you feel at home.",
    author: "Mrs. A. Nwosu"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center bg-[#f0f9ff]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center z-10">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
              {HOSPITAL_INFO.tagline}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Compassionate Care <br />
              <span className="text-primary">For Every Stage Of Life</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Kandudi Specialist Hospital and Maternity is dedicated to delivering comprehensive, 
              patient-centered medical care with a focus on maternal and surgical excellence in Achina.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg">
                <Link href="/appointments">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-primary text-primary hover:bg-primary/5">
                <a href={`tel:${HOSPITAL_INFO.phone}`}>
                   <PhoneCall className="mr-2 w-5 h-5" /> Call Now
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-[550px]">
            {/* Compassionate hero image representation */}
            <div className="absolute inset-0 bg-blue-200 rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
               <Image
                src="/hospital-building.jpg"
                alt="Kandudi Specialist Hospital Building"
                fill
                className="object-cover"
                priority
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] -rotate-3 border-4 border-white"></div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 z-20">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">24/7 Emergency</p>
                <p className="text-xs text-slate-500">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Stats */}
      <section className="bg-primary py-10 text-white relative z-20 -mt-8 mx-4 md:mx-auto container rounded-3xl shadow-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">40+</p>
              <p className="text-xs md:text-sm opacity-80 uppercase tracking-widest mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-xs md:text-sm opacity-80 uppercase tracking-widest mt-1">Emergency</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">Achina</p>
              <p className="text-xs md:text-sm opacity-80 uppercase tracking-widest mt-1">Location</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">100%</p>
              <p className="text-xs md:text-sm opacity-80 uppercase tracking-widest mt-1">Patient-Centered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Clinical Excellence</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Specialized healthcare services with an emphasis on maternal safety and clinical precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all border-none bg-slate-50 p-4">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                  <Heart className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Obstetrics & Gynaecology</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Expert maternal care, including antenatal and postnatal services, safe deliveries, and infertility management.
                </p>
                <Link href="/services" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  View Department <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-none bg-slate-50 p-4">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                  <Stethoscope className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Surgery & Internal Medicine</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Advanced surgical procedures like myomectomy and general medical consultations for chronic conditions.
                </p>
                <Link href="/services" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  View Department <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-none bg-slate-50 p-4">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Diagnostics & Laboratory</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Modern diagnostic facilities including Laboratory, Ultrasound, and X-ray supporting precise clinical decisions.
                </p>
                <Link href="/services" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  View Department <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dr. Monago Spotlight */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] bg-slate-200 rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
              <Image
                src="/dr-emma-monago.jpeg"
                alt="Dr. Emmanuel N. Monago"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Our Medical Director</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Dr. Emmanuel N. Monago</h2>
                <p className="text-xl text-slate-500 font-medium italic">Consultant Obstetrician & Gynaecologist</p>
              </div>
              
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  With over 40 years of experience, Dr. Monago is recognized for his excellence in maternal care, 
                  complex obstetric cases, and gynecological surgeries.
                </p>
                <p>
                  Known for safe deliveries and surgical excellence, he leads our clinical team with integrity and a deep commitment to patient safety.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["MBBS", "FWACS", "FMAS", "FICS", "FWACOG"].map((qual) => (
                  <span key={qual} className="bg-white px-4 py-2 rounded-lg text-sm font-bold border border-slate-200 text-slate-700">
                    {qual}
                  </span>
                ))}
              </div>

              <Button asChild size="lg" className="rounded-full">
                <Link href="/doctors">Read Full Biography</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Kandudi Hospital?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-slate-600 text-sm">High-quality, accessible healthcare with an emphasis on safety and compassion.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-primary">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-slate-600 text-sm">To be a leading specialist hospital recognized for excellence in maternal and general health.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-primary">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="text-slate-600 text-sm">Clinical excellence, integrity, and patient-centered professionalism in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Patients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-white/5 border-none text-white p-4">
                <CardContent className="pt-6">
                  <p className="text-slate-300 italic mb-6 text-lg leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                      {t.author.charAt(0)}
                    </div>
                    <p className="font-bold text-sm text-white">{t.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Contact Strip */}
      <section className="grid md:grid-cols-2">
        <div className="h-[450px] bg-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.972306236316!2d7.068285!3d6.231644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104378396f9a656d%3A0x6734c562506b3e6e!2sKandudi%20Specialist%20Hospital%20And%20Maternity!5e0!3m2!1sen!2sng!4v1713451234567!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-primary text-white p-12 md:p-20 flex flex-col justify-center space-y-8">
          <h2 className="text-3xl font-bold">Visit Our Facility</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <PhoneCall className="w-6 h-6 shrink-0" />
              <div>
                <p className="font-bold">Phone Number</p>
                <p className="text-xl">{HOSPITAL_INFO.phone}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-6 h-6 shrink-0" />
              <div>
                <p className="font-bold">Hospital Address</p>
                <p className="opacity-90 leading-relaxed">{HOSPITAL_INFO.address}</p>
              </div>
            </div>
          </div>
          <Button asChild variant="outline" className="w-fit rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary">
            <Link href="/contact">Get Full Contact Details</Link>
          </Button>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-full animate-pulse">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Emergency Services Available 24/7</h2>
              <p className="opacity-90">Ambulance dispatch and critical care available round the clock.</p>
            </div>
          </div>
          <Button asChild size="lg" variant="secondary" className="rounded-full font-bold h-14 px-8 text-red-600">
            <a href={`tel:${HOSPITAL_INFO.phone}`}>Emergency: {HOSPITAL_INFO.phone}</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
