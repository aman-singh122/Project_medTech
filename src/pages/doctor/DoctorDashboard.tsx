import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Pill, 
  BarChart3, 
  LayoutDashboard,
  MoreHorizontal,
  User,
  Calendar,
  Users,
  ArrowRight,
  Clock
} from 'lucide-react';
import { appointments, patients, analyticsData } from '@/data/dummyData';

const DoctorDashboard = () => {
  const { user } = useAuth();
  const todayAppointments = appointments.filter(apt => apt.status === 'Confirmed').slice(0, 3);

  const dashboardCards = [
    { title: 'Patient Records', description: 'View patient history', icon: FileText, link: '/doctor/records', color: 'text-saffron' },
    { title: 'E-Prescriptions', description: 'Create prescriptions', icon: Pill, link: '/doctor/prescriptions', color: 'text-accent' },
    { title: 'Analytics', description: 'View statistics', icon: BarChart3, link: '/doctor/analytics', color: 'text-info' },
    { title: 'Dashboard', description: 'Quick overview', icon: LayoutDashboard, link: '/doctor/overview', color: 'text-primary' },
    { title: 'More', description: 'Additional tools', icon: MoreHorizontal, link: '/doctor/more', color: 'text-muted-foreground' },
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Doctor'}</h1>
              <p className="text-primary-foreground/80">Doctor Dashboard</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <Link key={index} to={card.link}>
              <Card className="card-hover h-full cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center`}>
                      <card.icon className={`h-7 w-7 ${card.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Today's Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((apt) => {
                  const patient = patients.find(p => p.id === apt.patientId);
                  return (
                    <div key={apt.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{patient?.name}</p>
                        <p className="text-sm text-muted-foreground">{apt.department}</p>
                        <div className="flex items-center gap-2 mt-1 text-sm">
                          <Clock className="h-3 w-3" />
                          <span>{apt.time}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-info" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-accent/10 rounded-lg text-center">
                  <p className="text-3xl font-bold text-accent">{analyticsData.patientsPerDay.reduce((a,b) => a + b.count, 0)}</p>
                  <p className="text-sm text-muted-foreground">Weekly Patients</p>
                </div>
                <div className="p-4 bg-info/10 rounded-lg text-center">
                  <p className="text-3xl font-bold text-info">{todayAppointments.length}</p>
                  <p className="text-sm text-muted-foreground">Today's OPD</p>
                </div>
                <div className="p-4 bg-saffron/10 rounded-lg text-center">
                  <p className="text-3xl font-bold text-saffron">24</p>
                  <p className="text-sm text-muted-foreground">Prescriptions</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDashboard;
