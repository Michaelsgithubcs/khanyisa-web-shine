import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, Award, Shield, TrendingUp, CheckCircle, ArrowRight, Zap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Information Verification & Assessment", 
      description: "Comprehensive B-BBEE status verification with cutting-edge accuracy and efficiency.",
      features: [
        "Comprehensive B-BBEE scorecard assessment",
        "Independent verification of B-BBEE elements",
        "Accurate status determination with AI-powered analytics",
        "Cost-effective verification solutions"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Award,
      title: "B-BBEE Scorecards & Certificates",
      description: "Official certification and detailed documentation for complete compliance assurance.",
      features: [
        "Official B-BBEE certificates with digital verification",
        "Detailed scorecards with element breakdown",
        "Comprehensive compliance documentation",
        "Annual verification certificates with tracking"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Shield,
      title: "Advanced Verification Software",
      description: "Next-generation tools for proactive fault detection and cost optimization.",
      features: [
        "AI-powered verification tools and analytics",
        "Real-time fault detection systems",
        "Automated cost-saving recommendations",
        "Streamlined verification processes with dashboards"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: TrendingUp,
      title: "Expert Training & Consultation",
      description: "Professional development and strategic guidance for B-BBEE excellence.",
      features: [
        "Comprehensive B-BBEE training programs",
        "Personalized audit preparation guidance",
        "Strategic management best practices",
        "Ongoing compliance support and updates"
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "SANAS Accredited Excellence",
      description: "Officially accredited by SANAS with the highest standards of verification quality, ensuring complete compliance and trust.",
      metric: "100%",
      metricLabel: "Certified"
    },
    {
      icon: TrendingUp,
      title: "Level 1 B-BBEE Leadership",
      description: "We are a Level 1 B-BBEE Contributor with 135% BEE procurement recognition, leading by example in transformation.",
      metric: "Level 1",
      metricLabel: "B-BBEE Status"
    },
    {
      icon: Users,
      title: "Proven Track Record",
      description: "One of South Africa's leading B-BBEE Rating Agencies with extensive experience and hundreds of satisfied clients.",
      metric: "500+",
      metricLabel: "Clients Served"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <Shield className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-semibold">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Comprehensive B-BBEE Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our cutting-edge verification services, advanced technology, and expert guidance tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 blur-sm"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80')"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Add a semi-transparent overlay for theme-matching opacity */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/70 via-blue-200/60 to-white/70 opacity-70 pointer-events-none z-0" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <CardHeader className="relative z-10 pb-4">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-gray-900 group-hover:text-gray-800 transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-800 bg-blue-50 hover:text-blue-900 hover:bg-blue-100 group-hover:translate-x-2 transition-all duration-300 text-lg px-4 py-2 rounded-lg">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-12"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/95 via-blue-300/90 to-white/90 opacity-95 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-800 font-semibold mb-6">
              <Target className="h-4 w-4 mr-2" />
              Why Choose Khanyisa?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading B-BBEE Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets us apart as South Africa's premier B-BBEE verification agency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-1">{item.metric}</div>
                    <div className="text-sm text-gray-500 font-medium">{item.metricLabel}</div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5304&q=80')"
          }}
        />
        {/* Add a semi-transparent overlay for theme-matching opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/95 via-green-300/90 to-white/90 opacity-95 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 font-semibold mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Efficient, Reliable
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined verification process ensures fast, accurate results with minimal disruption to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We assess your needs and provide a customized verification plan tailored to your business requirements."
              },
              {
                step: "02", 
                title: "Verification Process",
                description: "Our expert team conducts thorough verification using advanced tools and proven methodologies."
              },
              {
                step: "03",
                title: "Certification & Support",
                description: "Receive official certification and ongoing support to maintain your B-BBEE compliance status."
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-1/2"></div>
                )}
              </div>
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
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Verification Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with our expert B-BBEE verification services. Contact us today for a personalized consultation and competitive quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get Your Quote
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

export default Services;
