import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    companyName: "",
    address: "",
    vatNumber: "",
    taxNumber: "",
    businessType: ""
  });
  const { toast } = useToast();

  const elements = [
    "Ownership",
    "Management",
    "Skills Development",
    "Enterprise and Supplier Development",
    "Socio-Economic Development"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "Thank you for your request. We'll prepare your quote and get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      position: "",
      email: "",
      phone: "",
      companyName: "",
      address: "",
      vatNumber: "",
      taxNumber: "",
      businessType: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      businessType: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-100 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Get a Quote</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Request a personalized quotation for our B-BBEE verification services
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quotation for BEE Verification Services and Engagement</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Thank you for the opportunity to provide your company with a quotation. Khanyisa Verification 
                is a SANAS Accredited B-BBEE verification agency. Khanyisa Verification will access and verify 
                the BEE elements, to provide an independent and impartial opinion on the B-BBEE status of your company.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Elements We Assess:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {elements.map((element, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{element}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Request Your Quote</h2>
            <p className="text-lg text-gray-600">
              Please fill out the form below and we'll prepare a customized quote for your business
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your position/title"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Name of Company *
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your company address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      VAT Number *
                    </label>
                    <Input
                      id="vatNumber"
                      name="vatNumber"
                      type="text"
                      required
                      value={formData.vatNumber}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter VAT number"
                    />
                  </div>

                  <div>
                    <label htmlFor="taxNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Tax Number *
                    </label>
                    <Input
                      id="taxNumber"
                      name="taxNumber"
                      type="text"
                      required
                      value={formData.taxNumber}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter tax number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.businessType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small-enterprise">Small Enterprise</SelectItem>
                      <SelectItem value="medium-enterprise">Medium Enterprise</SelectItem>
                      <SelectItem value="large-enterprise">Large Enterprise</SelectItem>
                      <SelectItem value="multinational">Multinational Corporation</SelectItem>
                      <SelectItem value="npo">Non-Profit Organization</SelectItem>
                      <SelectItem value="government">Government Entity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-300 hover:bg-green-400 text-gray-800 text-lg py-3"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Khanyisa Verification?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>SANAS Accredited</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Officially accredited by SANAS, ensuring the highest standards of verification quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Competitive Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quality B-BBEE rating services at competitive fees with transparent pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Speedy and efficient service delivery without compromising on quality and accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
