import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Users, TrendingUp, FileCheck, ArrowRight, Star, Zap } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: FileCheck,
      title: "B-BBEE Verification", 
      description: "Comprehensive assessment and certification services for your business transformation.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Certification & Scorecards",
      description: "Official documentation and detailed scorecards for compliance requirements.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Verification Software",
      description: "Advanced tools for early detection and cost-effective verification processes.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Training & Consultation",
      description: "Expert guidance for audit preparation and B-BBEE management excellence.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Verified", icon: Users },
    { number: "Level 1", label: "B-BBEE Status", icon: Award },
    { number: "135%", label: "BEE Recognition", icon: TrendingUp },
    { number: "100%", label: "SANAS Certified", icon: Shield }
  ];

  const testimonials = [
    {
      text: "Khanyisa Verification exceeded our expectations with their professional and efficient service.",
      author: "Sarah Johnson",
      company: "Tech Solutions Ltd",
      rating: 5
    },
    {
      text: "The team's expertise in B-BBEE compliance is unmatched. Highly recommended!",
      author: "Michael Chen",
      company: "Global Manufacturing",
      rating: 5
    },
    {
      text: "Fast, accurate, and reliable verification services. Outstanding customer support.",
      author: "Priya Patel",
      company: "Innovative Designs",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 p-1 mb-6">
                <img src="/khanyisa-verification-logo.png" alt="Khanyisa Verification" className="w-full h-full rounded-xl object-contain bg-white p-2" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Khanyisa Verification
              </h1>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm">
                <Zap className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-300 font-semibold">Level 1 SANAS Accredited B-BBEE Rating Agency</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through expert B-BBEE verification services with cutting-edge technology and unmatched professionalism.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/quote">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-800 font-semibold mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive B-BBEE Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our full range of verification services designed to elevate your business compliance and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto font-semibold text-blue-800 bg-blue-50 hover:text-blue-900 hover:bg-blue-100 group-hover:translate-x-2 transition-all duration-300 px-4 py-2 rounded-lg">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=8256&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-semibold mb-6">
                <Award className="h-4 w-4 mr-2" />
                About Khanyisa
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading the Future of B-BBEE Verification
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As a SANAS Accredited B-BBEE Rating Agency, we combine cutting-edge technology with deep industry expertise to deliver verification services that exceed expectations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">SANAS Accredited for quality assurance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Level 1 B-BBEE Contributor status</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">135% BEE procurement recognition</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl">
                  Discover Our Story
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Verified Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Level 1</div>
                    <div className="text-gray-600">B-BBEE Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">SANAS Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">135%</div>
                    <div className="text-gray-600">BEE Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80')"
          }}
        />
        {/* Add a semi-transparent overlay for theme-matching opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/90 via-orange-100/80 to-white/90 opacity-95 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 font-semibold mb-4">
              <Star className="h-4 w-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5304&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us with their B-BBEE verification needs. 
            Get started today with a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
