"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            We are here to help. Reach out to us via phone, email, or visit our facility in Achina.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-4">Our Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl h-fit shrink-0">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Address</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {HOSPITAL_INFO.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl h-fit shrink-0">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Phone</h4>
                      <p className="text-slate-600 font-bold">{HOSPITAL_INFO.phone}</p>
                      <p className="text-slate-500 text-sm">Emergency: 24/7 Dispatch</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl h-fit shrink-0">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p className="text-slate-600">{HOSPITAL_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl h-fit shrink-0">
                      <Clock className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Hospital Hours</h4>
                      <p className="text-slate-600">Open 24 Hours, 7 Days a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="border-none shadow-xl bg-slate-50 h-full flex items-center justify-center">
                  <CardContent className="py-20 text-center space-y-6">
                    <div className="bg-green-100 text-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900">Message Sent!</h3>
                    <p className="text-slate-600 text-lg max-w-md mx-auto">
                      Thank you for contacting us. We have received your message and will respond to your inquiry as soon as possible.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="lg" className="rounded-full">
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-xl bg-slate-50 p-4 md:p-8">
                  <CardContent className="pt-0">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input id="name" placeholder="John Doe" required className="h-12 bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required className="h-12 bg-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="General Inquiry" required className="h-12 bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="How can we help you today?" required className="min-h-[180px] bg-white resize-none" />
                      </div>
                      <Button className="w-full h-14 text-lg font-bold rounded-xl" disabled={isLoading}>
                        {isLoading ? "Sending..." : (
                          <>
                            <Send className="mr-2 w-5 h-5" /> Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Full Width */}
      <section className="h-[550px] w-full bg-slate-100 border-t border-b">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.972306236316!2d7.068285!3d6.231644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104378396f9a656d%3A0x6734c562506b3e6e!2sKandudi%20Specialist%20Hospital%20And%20Maternity!5e0!3m2!1sen!2sng!4v1713451234567!5m2!1sen!2s2v1713451234567!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
