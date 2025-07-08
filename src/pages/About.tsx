import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Award, Shield, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const principles = [
    {
      icon: TrendingUp,
      title: "Innovation & Professionalism", 
      description: "We fully understand the impact of accurate verifications on your competitive advantage and the difference it can make between winning and losing business.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Integrity & Privacy",
      description: "We offer assurance that your business information is trustworthy and accurate, and guarantee reliable access to the information by authorised people.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Openness, Teamwork & Pride",
      description: "We are committed to the level of transparency in sharing task-relevant information and collaborative excellence.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    { number: "500+", label: "Verified Clients", icon: Users },
    { number: "Level 1", label: "B-BBEE Status", icon: Award },
    { number: "135%", label: "BEE Recognition", icon: TrendingUp },
    { number: "100%", label: "SANAS Certified", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=8256&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <Target className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-semibold">About Khanyisa</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Leading B-BBEE Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our commitment to transforming businesses through expert B-BBEE verification services and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80')"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-800 font-semibold mb-6">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to our team of experts for personalized B-BBEE verification solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Block B, Ground Floor, Clearwater Office Park, 1 South Boksburg
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Phone Numbers</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  010 900 0477<br />
                  067 714 8603
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Email Address</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  info@khanyisaverification.com
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=8256&q=80')"
          }}
        />
        {/* Add a semi-transparent overlay for theme-matching opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/90 via-orange-100/80 to-white/90 opacity-95 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 font-semibold mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Our Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Deep Industry Knowledge & Experience
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our personnel have been trained in and have intensive knowledge of the B-BBEE legislation, 
                  the DTI Verification Manual, the Codes of Good Practice issued under Section 9 (1) of the 
                  Broad-Based Black Economic Empowerment Act 53 of 2003, and Specific Sector 
                  Codes expertise.
                </p>
                <p>
                  We have extensive experience in assessing, verifying and validating both disclosed and 
                  undisclosed BEE-related information on entities, ensuring accurate and reliable verification services.
                </p>
                <p>
                  Our management and skilled staff have the necessary qualifications and training to provide 
                  efficient support service to our professional verification activities, with all personnel 
                  bound to a strict Code of Conduct ensuring confidentiality and impartiality.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                      <div className="text-gray-600 text-sm">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=8256&q=80')"
          }}
        />
        {/* Add a semi-transparent overlay for theme-matching opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-orange-100/40 to-white/60 opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 font-semibold mb-6">
              <Target className="h-4 w-4 mr-2" />
              Our Core Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Values That Drive Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our fundamental principles guide every interaction and ensure the highest standards of service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient.replace('from-', 'from-').replace('to-', 'to-').replace('-500', '-50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${principle.gradient} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <principle.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-gray-800 transition-colors">
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center leading-relaxed text-lg text-gray-600">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto mb-8 shadow-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SANAS Accredited Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              As a SANAS Accredited B-BBEE Rating Agency, we maintain the highest standards of 
              professionalism and accuracy in all our verification services, ensuring complete 
              compliance with industry regulations and best practices. Our Level 1 B-BBEE status 
              with 135% procurement recognition demonstrates our commitment to transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
