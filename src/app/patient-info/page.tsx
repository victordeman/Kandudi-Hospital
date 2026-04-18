import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CreditCard, UserPlus, LogOut } from "lucide-react";
import { HOSPITAL_INFO } from "@/constants";

export default function PatientInfoPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Information</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Everything you need to know about your visit, from admission to discharge at Kandudi Hospital.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Process Sections */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <UserPlus className="text-primary w-6 h-6" />
                  <h2 className="text-2xl font-bold">Admission Process</h2>
                </div>
                <p className="text-slate-600">
                  Upon arrival, please proceed to the registration desk. You will need to provide valid identification and any insurance information.
                </p>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Bring all current medications and relevant previous medical records.</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Emergency admissions are processed immediately via our 24/7 emergency unit.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <LogOut className="text-primary w-6 h-6" />
                  <h2 className="text-2xl font-bold">Discharge Process</h2>
                </div>
                <p className="text-slate-600">
                  Your doctor will determine when you are ready to go home. Before leaving:
                </p>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Review your discharge summary and follow-up appointment date.</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Ensure all billing matters are settled at the accounts office.</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Collect any prescribed medications from the hospital pharmacy.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <Card className="bg-slate-50 border-none rounded-[2rem] shadow-sm">
                <CardContent className="pt-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary w-6 h-6" />
                    <h3 className="font-bold text-lg">Visiting Hours</h3>
                  </div>
                  <div className="space-y-6 text-sm">
                    <div>
                      <p className="font-bold text-slate-900 border-l-2 border-primary pl-3">General Wards</p>
                      <div className="mt-2 text-slate-600 ml-3">
                        <p>Morning: 10:00 AM - 12:00 PM</p>
                        <p>Evening: 4:00 PM - 6:00 PM</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 border-l-2 border-primary pl-3 italic">Maternity Unit</p>
                      <div className="mt-2 text-slate-600 ml-3">
                        <p>Fathers/Partners: Flexible Support</p>
                        <p>Other Visitors: Standard hours apply</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-50 border-none rounded-[2rem] shadow-sm">
                <CardContent className="pt-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-primary w-6 h-6" />
                    <h3 className="font-bold text-lg">Billing & Payments</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We accept various payment methods for your convenience. We also partner with health insurance providers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {HOSPITAL_INFO.paymentMethods.map(method => (
                      <span key={method} className="bg-white px-4 py-2 rounded-full text-xs font-bold border border-slate-200 text-slate-700">
                        {method}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>

          <div className="mt-24 space-y-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto bg-slate-50 p-8 rounded-[3rem]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-slate-200">
                  <AccordionTrigger className="text-lg font-bold py-6">What do I need for my first visit?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-md leading-relaxed">
                    Please bring a valid ID, any insurance cards, and a list of your current medications. If you have been referred, please bring the referral letter from your previous healthcare provider.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-slate-200">
                  <AccordionTrigger className="text-lg font-bold py-6">Does the hospital offer ambulance services?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-md leading-relaxed">
                    Yes, Kandudi Hospital provides 24/7 ambulance services for emergencies within Anambra and neighboring areas. Please call our emergency line at {HOSPITAL_INFO.phone} for immediate assistance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="text-lg font-bold py-6">Are diagnostic services available to walk-in patients?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-md leading-relaxed">
                    Yes, our laboratory, ultrasound, and X-ray services are available for both our admitted patients and walk-in patients with valid prescriptions. Results are provided in a timely and professional manner.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
