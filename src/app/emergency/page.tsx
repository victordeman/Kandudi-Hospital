import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, AlertCircle, Clock, MapPin, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { HOSPITAL_INFO } from "@/constants";

export default function EmergencyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-red-600 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md border border-white/30">
              <AlertCircle className="w-4 h-4" /> 24/7 EMERGENCY SERVICES
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Always Here When <br />Minutes Matter.</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-2xl leading-relaxed">
              Immediate expert care for critical medical situations. Our emergency department and ambulance are available round the clock.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" variant="secondary" className="rounded-full text-red-600 font-extrabold px-10 h-16 text-xl hover:bg-white transition-all shadow-2xl">
                <a href={`tel:${HOSPITAL_INFO.phone}`}>
                  <PhoneCall className="mr-3 w-7 h-7" /> {HOSPITAL_INFO.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block">
          <ShieldAlert className="w-[500px] h-[500px] text-white" />
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-slate-50 rounded-[2.5rem] p-4">
              <CardContent className="pt-8 space-y-6">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Clock className="text-red-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">24/7 Availability</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our emergency department never closes. We are fully staffed and equipped to handle medical emergencies at any hour, every day of the year.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-slate-50 rounded-[2.5rem] p-4">
              <CardContent className="pt-8 space-y-6">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <PhoneCall className="text-red-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Ambulance Service</h3>
                <p className="text-slate-600 leading-relaxed">
                  Fast medical transportation equipped with essential life-support equipment. Call our emergency line for rapid ambulance dispatch within Achina and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-slate-50 rounded-[2.5rem] p-4">
              <CardContent className="pt-8 space-y-6">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-red-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Critical Care Unit</h3>
                <p className="text-slate-600 leading-relaxed">
                  Equipped for stabilization and intensive care for acute medical and surgical cases, including complex obstetric emergencies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">When to Seek Emergency Care</h2>
              <p className="text-slate-600 text-lg">Immediate attention is required if you experience any of the following symptoms:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-6">
                <h4 className="font-extrabold text-2xl text-red-600 flex items-center gap-2">
                   General Emergencies
                </h4>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Difficulty breathing or severe shortness of breath</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Chest pain or intense pressure</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Sudden confusion or loss of consciousness</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Severe bleeding that doesn&apos;t stop with pressure</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Severe allergic reactions or poisoning</span></li>
                </ul>
              </div>
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-6">
                <h4 className="font-extrabold text-2xl text-red-600 flex items-center gap-2">
                   Maternal Emergencies
                </h4>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Severe vaginal bleeding during pregnancy</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Convulsions or sudden, severe headache</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Sudden swelling of face, hands or feet</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Significantly decreased fetal movement</span></li>
                  <li className="flex gap-3 items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" /> <span className="font-medium">Signs of preterm labor or water breaking early</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">How to Find Our Emergency Entrance</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We are located at Oye Market, Achina. Our emergency entrance is clearly marked and accessible via the main road 24 hours a day.
          </p>
          <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 font-bold border-2">
            <Link href="/contact">View Location & Directions</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
