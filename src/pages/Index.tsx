import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Search, 
  FileText, 
  Users, 
  Shield, 
  Clock,
  Building2,
  Stethoscope,
  Heart,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-info/30 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Government of India Initiative
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              National Digital Health Services Portal
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Access quality healthcare services across India. Book OPD appointments, view medical records, 
              and connect with government hospitals seamlessly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/patient/book-opd">
                <Button variant="hero" size="xl">
                  <Calendar className="h-5 w-5" />
                  Book OPD Appointment
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="heroOutline" size="xl">
                  <Search className="h-5 w-5" />
                  Find Hospitals
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/patient/book-opd" className="group">
              <Card className="card-hover border-2 border-transparent group-hover:border-accent h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Calendar className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Book OPD</h3>
                    <p className="text-sm text-muted-foreground">Schedule an appointment</p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-accent transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/search" className="group">
              <Card className="card-hover border-2 border-transparent group-hover:border-info h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-info/10 flex items-center justify-center group-hover:bg-info/20 transition-colors">
                    <Building2 className="h-7 w-7 text-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Find Hospital</h3>
                    <p className="text-sm text-muted-foreground">Search nearby hospitals</p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-info transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/patient/doctors" className="group">
              <Card className="card-hover border-2 border-transparent group-hover:border-saffron h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-saffron/10 flex items-center justify-center group-hover:bg-saffron/20 transition-colors">
                    <Stethoscope className="h-7 w-7 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Find Doctors</h3>
                    <p className="text-sm text-muted-foreground">View doctor availability</p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-saffron transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Digital Healthcare at Your Fingertips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform brings government healthcare services closer to every citizen of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Online Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Book OPD appointments at any government hospital without waiting in long queues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-info to-info/70 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-info-foreground" />
                </div>
                <CardTitle className="text-lg">Digital Records</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access your complete medical history, prescriptions, and test reports anytime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-saffron to-saffron/70 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Expert Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with experienced specialists across all medical departments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">24/7 Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access healthcare services round the clock from anywhere in India.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="h-4 w-4" />
                Government Healthcare Schemes
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ayushman Bharat - Health for All
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The world's largest government-funded healthcare program providing health coverage of 
                ₹5 lakh per family per year for secondary and tertiary care hospitalization to over 
                50 crore beneficiaries.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Free treatment at empaneled hospitals",
                  "No cap on family size or age",
                  "Cashless and paperless access",
                  "Coverage of 3 days pre-hospitalization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/schemes">
                <Button variant="accent" size="lg">
                  Explore All Schemes
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-info/20 rounded-3xl blur-xl" />
                <Card className="relative overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-saffron via-primary-foreground to-india-green" />
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">50 Cr+</div>
                      <p className="text-muted-foreground mb-6">Beneficiaries Covered</p>
                      
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t">
                        <div>
                          <div className="text-2xl font-bold text-accent">27,000+</div>
                          <p className="text-sm text-muted-foreground">Empaneled Hospitals</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-info">5.9 Cr+</div>
                          <p className="text-sm text-muted-foreground">Treatments Authorized</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Health Awareness</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Regular Check-ups</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Schedule annual health check-ups to detect potential health issues early and maintain overall wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-saffron/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-saffron" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Vaccination</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Stay updated with recommended vaccinations to protect yourself and your family from preventable diseases.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-info" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mental Health</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Mental health is equally important. Don't hesitate to seek help from qualified professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-info text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Access Better Healthcare?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join millions of Indians who trust the National Digital Health Services for their healthcare needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button variant="hero" size="xl">
                Register Now
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="heroOutline" size="xl">
                Login to Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
