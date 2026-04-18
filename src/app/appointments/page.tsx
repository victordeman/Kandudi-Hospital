"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, Info, CheckCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/constants";

export default function AppointmentsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Schedule your visit with our specialists easily. We offer walk-in, phone, and online booking options.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Appointment Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Booking Options</h2>
                <div className="space-y-4">
                  <a href={`tel:${HOSPITAL_INFO.phone}`} className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Call Now</h4>
                      <p className="text-sm text-slate-500">Immediate scheduling</p>
                      <p className="text-primary font-bold">{HOSPITAL_INFO.phone}</p>
                    </div>
                  </a>
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Walk-in</h4>
                      <p className="text-sm text-slate-500">Visit us during clinic hours</p>
                      <p className="font-bold text-xs uppercase tracking-tight text-slate-700">Mon - Sun: 24 Hours</p>
                    </div>
                  </div>
                  <a href={`mailto:${HOSPITAL_INFO.email}`} className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Email</h4>
                      <p className="text-sm text-slate-500">For non-urgent requests</p>
                      <p className="text-primary font-bold text-sm">{HOSPITAL_INFO.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex gap-3 mb-4">
                  <Info className="w-5 h-5 text-blue-600 shrink-0" />
                  <h4 className="font-bold text-blue-900">Clinic Hours</h4>
                </div>
                <ul className="text-sm space-y-2 text-blue-800">
                  <li className="flex justify-between border-b border-blue-100 pb-1">
                    <span>Monday - Friday</span>
                    <span className="font-bold">24 Hours</span>
                  </li>
                  <li className="flex justify-between border-b border-blue-100 pb-1">
                    <span>Saturday</span>
                    <span className="font-bold">24 Hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-bold">24 Hours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="border-none shadow-xl bg-white animate-in zoom-in-95 duration-500">
                  <CardContent className="py-20 text-center space-y-6">
                    <div className="bg-green-100 text-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900">Request Received!</h3>
                    <p className="text-slate-600 text-lg max-w-md mx-auto">
                      Thank you for choosing Kandudi Specialist Hospital. Our patient care team will contact you via phone shortly to confirm your visit.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="lg" className="rounded-full">
                        Make Another Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-xl bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">Online Appointment Request</CardTitle>
                    <p className="text-slate-500 text-sm">Fill in the details below and we will get back to you.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your full name" required className="h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+234..." required className="h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address (Optional)</Label>
                          <Input id="email" type="email" placeholder="email@example.com" className="h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <Input id="date" type="date" required className="h-12" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Department/Service</Label>
                        <select id="service" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required>
                          <option value="">Select a department</option>
                          <option>Obstetrics & Gynaecology</option>
                          <option>Surgery</option>
                          <option>Pediatrics</option>
                          <option>Internal Medicine</option>
                          <option>General Consultation</option>
                          <option>Diagnostic Services</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Reason for Visit / Additional Notes</Label>
                        <Textarea id="message" placeholder="Briefly describe your health concern..." className="min-h-[120px] resize-none" />
                      </div>
                      <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl" disabled={isLoading}>
                        {isLoading ? "Processing..." : "Submit Appointment Request"}
                      </Button>
                      <p className="text-xs text-center text-slate-400">
                        By submitting this form, you agree to be contacted by our hospital staff regarding your health inquiry.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
