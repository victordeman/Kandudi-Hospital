import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Blog & Resources",
  description: "Stay informed with the latest medical insights, maternal health tips, and wellness resources from our specialists.",
};

const blogPosts = [
  {
    title: "Understanding Postpartum Hemorrhage: Risks and Prevention",
    category: "Maternal Health",
    date: "April 15, 2024",
    excerpt: "Postpartum hemorrhage (PPH) remains a significant challenge in maternal care. Learn about the early signs and how our team manages this critical condition with precision.",
    slug: "postpartum-hemorrhage"
  },
  {
    title: "Managing Hypertension During Pregnancy",
    category: "Prenatal Care",
    date: "April 10, 2024",
    excerpt: "High blood pressure during pregnancy requires careful monitoring. We discuss the importance of regular antenatal checkups and lifestyle adjustments for a safe delivery.",
    slug: "hypertension-pregnancy"
  },
  {
    title: "Fibroids: Symptoms, Diagnosis, and Treatment Options",
    category: "Gynecology",
    date: "March 28, 2024",
    excerpt: "Many women experience uterine fibroids. Our specialists explain the various surgical and non-surgical treatment options available at Kandudi Hospital.",
    slug: "fibroids-treatment"
  },
  {
    title: "The Importance of Regular Antenatal Care",
    category: "Maternal Health",
    date: "March 20, 2024",
    excerpt: "Consistent antenatal care is the cornerstone of a healthy pregnancy and safe delivery. Discover what to expect during your visits to our specialized clinics.",
    slug: "antenatal-care-importance"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Blog & Resources</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Expert insights and educational resources on maternal health, surgical procedures, and general wellness.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col border-none shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-slate-300 font-bold uppercase tracking-widest relative z-10">Health Article</span>
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none">{post.category}</Badge>
                    <div className="flex items-center text-xs text-slate-400 gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors leading-tight text-xl font-bold">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8 bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-3xl font-extrabold text-slate-900">Stay Updated on Your Health</h2>
            <p className="text-slate-600">
              Subscribe to our monthly newsletter for the latest maternal health tips, hospital news, and medical advice from Dr. Monago and our specialist team.
            </p>
            <form className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow h-14 px-6 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <Button size="lg" className="h-14 px-8 rounded-xl font-bold">Subscribe Now</Button>
            </form>
            <p className="text-xs text-slate-400">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
