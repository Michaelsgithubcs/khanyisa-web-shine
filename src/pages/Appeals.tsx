import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, AlertCircle, FileText, Users } from "lucide-react";

const Appeals = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-100 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Appeals & Complaints</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to addressing all appeals and complaints fairly and transparently
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600">
              For appeals and complaints, please contact us using the information below
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Block B, Ground Floor, Clearwater Office Park, 1 South Boksburg
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Phone Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  010 900 0477<br />
                  067 714 8603
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Email Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  info@khanyisaverification.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appeals Policy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Appeals & Complaints Policy</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-6 leading-relaxed">
                    Khanyisa Verification will be responsible for ensuring that all appeals/complaints against 
                    Khanyisa Verification are investigated and, where these are determined to be valid, the 
                    Managing Director will ensure that the Appeals are adequately addressed in a timely manner 
                    and that those complained against do not handle the very appeals/complaints.
                  </p>
                  
                  <p className="mb-6 leading-relaxed">
                    In the event that the complaint or appeal is lodged against Khanyisa Verification and one 
                    or all the complaints or appeals committee member(s) is/are involved in the complaint or 
                    appeal, the Managing Director of Khanyisa Verification will procure services of an 
                    independent competent person to act as the Chairperson of the Complaints/Appeals Committee.
                  </p>
                  
                  <p className="mb-6 leading-relaxed">
                    The independent competent person will be subjected to all of the policies and procedures 
                    relating to confidentiality and impartiality. The independent competent person will be 
                    responsible for making recommendation to the Complaints/Appeals Committees and have the 
                    final say and decision on the complaint or appeal matters before him/her.
                  </p>
                  
                  <p className="leading-relaxed">
                    An independent competent person will be considered as someone with a sound knowledge and 
                    understanding of the B-BBEE Act and Codes of Good Practice. HE/SHE must have a MDP in 
                    B-BBEE coupled with a Bachelor's Degree.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we handle appeals and complaints</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-800 font-bold text-xl">1</span>
                </div>
                <CardTitle>Submit Your Appeal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contact us with details of your appeal or complaint using the contact information provided above.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-800 font-bold text-xl">2</span>
                </div>
                <CardTitle>Investigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We conduct a thorough and impartial investigation of your appeal or complaint in a timely manner.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-800 font-bold text-xl">3</span>
                </div>
                <CardTitle>Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide a fair resolution and communicate our decision with clear reasoning and next steps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appeals;
