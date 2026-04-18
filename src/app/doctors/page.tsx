import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Calendar, ShieldCheck, Users } from "lucide-react";

export default function DoctorsPage() {
  const doctor = {
    name: "Dr. Emmanuel N. Monago",
    title: "Consultant Obstetrician & Gynaecologist",
    qualifications: ["MBBS", "FWACS", "FMAS", "FICS", "FWACOG"],
    experience: "40+ years",
    bio: "Highly experienced Consultant with over four decades in maternal care, complex obstetric cases, and gynecological surgeries. Known for safe deliveries and surgical excellence. Dr. Monago has dedicated his career to improving maternal health outcomes and providing compassionate care to women throughout their journey.",
    specialties: [
      "Maternal Care",
      "Complex Obstetric Cases",
      "Gynecological Surgeries",
      "Infertility Evaluation & Management",
      "Antenatal and Postnatal Care"
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Doctors</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Led by world-class specialists with over 40 years of experience in clinical excellence and maternal care.
          </p>
        </div>
      </section>

      {/* Doctor Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Image Placeholder */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="bg-slate-100 rounded-[3rem] aspect-[4/5] flex items-center justify-center sticky top-24 border-8 border-slate-50 shadow-xl overflow-hidden">
                <Users className="w-32 h-32 text-slate-300" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-8 space-y-8">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary border-none px-4 py-1">
                  Senior Consultant
                </Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">{doctor.name}</h2>
                <p className="text-xl text-primary font-bold">{doctor.title}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Experience</p>
                    <p className="font-bold text-lg">{doctor.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-lg text-green-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Expertise</p>
                    <p className="font-bold text-lg">OB/GYN</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" /> Professional Profile
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg italic">
                  &quot;{doctor.bio}&quot;
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" /> Qualifications & Certifications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {doctor.qualifications.map((q) => (
                    <Badge key={q} variant="outline" className="text-slate-700 border-slate-200 bg-slate-50 px-6 py-2 text-md font-bold">
                      {q}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Key Specialties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.specialties.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
