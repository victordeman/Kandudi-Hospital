import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Mail } from "lucide-react";
import { HOSPITAL_INFO } from "@/constants";

const jobs = [
  {
    title: "Nursing Officer",
    type: "Full-Time",
    location: "Achina, Anambra State",
    department: "Nursing/Maternity",
    posted: "2 days ago"
  },
  {
    title: "Medical Laboratory Scientist",
    type: "Full-Time",
    location: "Achina, Anambra State",
    department: "Diagnostics",
    posted: "1 week ago"
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Build your career at a hospital committed to clinical excellence and compassionate care in Achina.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Work at Kandudi Hospital?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                At Kandudi Specialist Hospital and Maternity, we believe our people are our greatest asset. We provide a supportive environment where medical professionals can grow, learn, and make a real difference in patients&apos; lives.
              </p>
              <ul className="space-y-4">
                {[
                  "Continuous professional development and training",
                  "Modern medical facilities and diagnostic tools",
                  "Collaborative specialist teams led by experts",
                  "Competitive compensation and health benefits"
                ].map(benefit => (
                  <li key={benefit} className="flex gap-4 text-slate-700 font-bold text-lg">
                    <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-[3rem] p-10 space-y-8 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold border-b pb-4">Current Opportunities</h3>
              <div className="space-y-6">
                {jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden">
                      <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                          <h4 className="font-extrabold text-xl text-slate-900">{job.title}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-3 font-medium">
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border"><Briefcase className="w-4 h-4 text-primary" /> {job.type}</span>
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border"><MapPin className="w-4 h-4 text-primary" /> {job.location}</span>
                          </div>
                        </div>
                        <Button className="font-bold px-6 h-12 rounded-xl">Apply Now</Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="py-12 text-center bg-white rounded-2xl">
                     <p className="text-slate-500 italic">No open positions at the moment. Check back later!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-extrabold">Don&apos;t see a fitting role?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate medical professionals to join our talent pool. Send your CV and a cover letter to our recruitment team.
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white/10 p-8 rounded-[2rem] border border-white/20 inline-flex items-center gap-4 hover:bg-white/20 transition-all">
              <Mail className="text-primary w-8 h-8" />
              <span className="text-2xl font-extrabold">{HOSPITAL_INFO.email}</span>
            </div>
            <p className="text-sm text-slate-500 font-medium italic">Please include &quot;Talent Pool Application - [Your Name]&quot; in the subject line.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
