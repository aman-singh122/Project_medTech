import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  FileText, 
  Stethoscope, 
  AlertCircle, 
  MessageSquare,
  MoreHorizontal,
  User,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { appointments, doctors, medicalRecords } from '@/data/dummyData';

const PatientDashboard = () => {
  const { user } = useAuth();

  // Get upcoming appointments (dummy)
  const upcomingAppointments = appointments.filter(apt => apt.status === 'Confirmed').slice(0, 2);
  const recentRecords = medicalRecords.slice(0, 3);

  const dashboardCards = [
    {
      title: 'Book OPD',
      description: 'Schedule a new appointment',
      icon: Calendar,
      link: '/patient/book-opd',
      color: 'bg-accent',
      iconColor: 'text-accent'
    },
    {
      title: 'Doctor Availability',
      description: 'View available doctors',
      icon: Stethoscope,
      link: '/patient/doctors',
      color: 'bg-info',
      iconColor: 'text-info'
    },
    {
      title: 'Medical Records',
      description: 'Access your health records',
      icon: FileText,
      link: '/patient/records',
      color: 'bg-saffron',
      iconColor: 'text-saffron'
    },
    {
      title: 'Medical Issues',
      description: 'Report symptoms & get guidance',
      icon: AlertCircle,
      link: '/patient/issues',
      color: 'bg-destructive',
      iconColor: 'text-destructive'
    },
    {
      title: 'Consultation',
      description: 'View consultation history',
      icon: MessageSquare,
      link: '/patient/consultations',
      color: 'bg-primary',
      iconColor: 'text-primary'
    },
    {
      title: 'More Services',
      description: 'Additional healthcare services',
      icon: MoreHorizontal,
      link: '/patient/more',
      color: 'bg-muted',
      iconColor: 'text-muted-foreground'
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Patient'}</h1>
              <p className="text-primary-foreground/80">Patient Dashboard</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <Link key={index} to={card.link}>
              <Card className="card-hover h-full cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${card.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <card.icon className={`h-7 w-7 ${card.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Upcoming Appointments
                </CardTitle>
                <CardDescription>Your scheduled visits</CardDescription>
              </div>
              <Link to="/patient/appointments">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => {
                    const doctor = doctors.find(d => d.id === apt.doctorId);
                    return (
                      <div key={apt.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Stethoscope className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{doctor?.name}</p>
                          <p className="text-sm text-muted-foreground">{apt.department}</p>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Clock className="h-3 w-3" />
                            <span>{apt.date} at {apt.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-accent text-sm">
                          <CheckCircle className="h-4 w-4" />
                          {apt.status}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No upcoming appointments</p>
                  <Link to="/patient/book-opd">
                    <Button variant="accent" size="sm" className="mt-3">
                      Book Now
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Medical Records */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-saffron" />
                  Recent Records
                </CardTitle>
                <CardDescription>Your medical history</CardDescription>
              </div>
              <Link to="/patient/records">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentRecords.length > 0 ? (
                <div className="space-y-4">
                  {recentRecords.map((record) => {
                    const doctor = doctors.find(d => d.id === record.doctorId);
                    return (
                      <div key={record.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-saffron" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{record.diagnosis}</p>
                          <p className="text-sm text-muted-foreground">{doctor?.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{record.date}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No medical records found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Health Tips Banner */}
        <Card className="mt-8 bg-gradient-to-r from-accent to-info text-primary-foreground overflow-hidden">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Healthy, Stay Safe</h3>
              <p className="text-primary-foreground/90">
                Regular health check-ups help detect potential health issues early.
              </p>
            </div>
            <Link to="/patient/book-opd">
              <Button variant="hero" size="lg">
                Book Health Check-up
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PatientDashboard;
