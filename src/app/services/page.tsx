import { 
  Heart, 
  Scissors, 
  Baby, 
  Stethoscope, 
  Microscope,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const departments = [
  {
    title: "Obstetrics & Gynaecology",
    icon: Heart,
    description: "Comprehensive care for women at all stages of life, with a primary focus on maternal health and safe delivery.",
    services: ["Antenatal and Postnatal Care", "Family Planning Services", "Infertility Evaluation & Management", "Gynecological Clinics (Fibroids, menstrual disorders, etc.)"]
  },
  {
    title: "Surgery",
    icon: Scissors,
    description: "Expert surgical interventions performed by experienced specialists using modern techniques.",
    services: ["Caesarean Section", "Myomectomy", "Total Abdominal Hysterectomy", "Exploratory Laparotomy", "Minor & Intermediate Surgical Procedures"]
  },
  {
    title: "Pediatrics",
    icon: Baby,
    description: "Dedicated medical care for infants, children, and adolescents ensuring healthy development.",
    services: ["Neonatal Care", "Well-baby Clinics", "Immunization", "General Pediatric Consultations"]
  },
  {
    title: "Internal Medicine",
    icon: Stethoscope,
    description: "Diagnosis and non-surgical treatment of adult diseases and chronic conditions.",
    services: ["Hypertension Clinic", "General Medical Clinics", "Chronic Disease Management", "Health Screenings"]
  },
  {
    title: "Diagnostic Laboratory",
    icon: Microscope,
    description: "Modern diagnostic facilities supporting clinical decisions with accurate and timely results.",
    services: ["Laboratory Investigations", "Ultrasound Scanning", "X-ray Services"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Excellence in specialist care, supported by modern diagnostic facilities and a commitment to safe clinical outcomes.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="flex flex-col border-none shadow-md bg-slate-50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <dept.icon className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {dept.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Key Services & Procedures</h4>
                    <ul className="space-y-2">
                      {dept.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures Spotlight */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">Specialized Procedures</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Caesarean Section", "Myomectomy", "Total Abdominal Hysterectomy", 
              "D&C", "Exploratory Laparotomy", "Minor Surgical Procedures"
            ].map((proc) => (
              <Badge key={proc} variant="outline" className="text-white border-white/40 px-6 py-3 text-lg font-bold rounded-full bg-white/5">
                {proc}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 bg-slate-50 p-12 rounded-[3rem]">
            <h2 className="text-3xl font-bold">Need a Specialist Consultation?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our specialists are available for consultations and scheduled procedures. 
              Contact us today to book an appointment or learn more about our patient-centered care.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
               <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-6 py-2 text-md font-bold rounded-full border-none">
                Open 24/7 for Emergencies
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
