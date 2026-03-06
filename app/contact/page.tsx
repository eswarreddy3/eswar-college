"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  Building,
  CreditCard,
  GraduationCap,
  Bus,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Eswar College of Engineering, Kesanupalli Village, Narasaraopet – 522 601, Guntur District, Andhra Pradesh",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "98855 78652 | 99636 34414 | 91212 14708",
  },
  {
    icon: Mail,
    title: "Email",
    content: "principal@eswarcollegeofengg.org | eswarcollegeofengg@gmail.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Saturday: 9:00 AM - 5:00 PM",
  },
]

const departments = [
  {
    icon: GraduationCap,
    title: "Principal's Office",
    phone: "+91 98855 78652",
    email: "principal@eswarcollegeofengg.org",
  },
  {
    icon: CreditCard,
    title: "Accounts Section",
    phone: "+91 99636 34414",
    email: "eswarcollegeofengg@gmail.com",
  },
  {
    icon: Building,
    title: "Admission Section",
    phone: "+91 91212 14708",
    email: "eswarcollegeofengg@gmail.com",
  },
  {
    icon: Bus,
    title: "Transport Section",
    phone: "+91 98855 78652",
    email: "eswarcollegeofengg@gmail.com",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroBanner
        title="Get in Touch"
        subtitle="We're here to help you with any questions about admissions, programs, or campus life"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        backgroundImage="https://eswarcollegeofengg.org/wp-content/uploads/2019/08/Web-copy.jpg"
      />

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Send a Message
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Contact Form
              </h2>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 dark:text-green-400 mb-4">
                    We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Contact Information
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Reach Out to Us
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1!2d80.04278!3d16.43462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e8a9e5b2d671%3A0xb3a5b7e1c7d5e3f2!2sEswar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Contacts */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Departments
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Administrative Contacts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contact specific departments for specialized queries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <dept.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-3">{dept.title}</h3>
                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {dept.phone}
                  </a>
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {dept.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
