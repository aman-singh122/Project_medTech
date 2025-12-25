import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { doctors, departments } from '@/data/dummyData';
import { 
  Stethoscope, 
  User, 
  Clock, 
  Search,
  Calendar,
  GraduationCap,
  ArrowLeft
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DoctorAvailability = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = !selectedDepartment || doctor.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Doctor Availability</h1>
              <p className="text-primary-foreground/80">Find and view doctor schedules</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search & Filters */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search doctors by name..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map(dept => (
                        <SelectItem key={dept.id} value={dept.name}>
                          {dept.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Doctors List */}
            <div className="space-y-4">
              {filteredDoctors.map(doctor => (
                <Card 
                  key={doctor.id} 
                  className={`card-hover cursor-pointer ${selectedDoctor?.id === doctor.id ? 'ring-2 ring-accent' : ''}`}
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{doctor.name}</h3>
                        <p className="text-accent font-medium">{doctor.department}</p>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          {doctor.qualification}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {doctor.experience} years experience
                        </div>
                        
                        <div className="mt-3 flex flex-wrap gap-2">
                          {doctor.availableDays.map((day, idx) => (
                            <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link to="/patient/book-opd" onClick={(e) => e.stopPropagation()}>
                        <Button variant="accent" size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredDoctors.length === 0 && (
                <Card className="bg-muted/50">
                  <CardContent className="p-8 text-center">
                    <Stethoscope className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No doctors found matching your criteria.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Doctor Detail Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Doctor Profile</CardTitle>
                <CardDescription>
                  {selectedDoctor ? 'View detailed information' : 'Select a doctor to view details'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDoctor ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <User className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">{selectedDoctor.name}</h3>
                      <p className="text-accent font-medium">{selectedDoctor.department}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Qualification</p>
                          <p className="font-medium text-sm">{selectedDoctor.qualification}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Experience</p>
                          <p className="font-medium text-sm">{selectedDoctor.experience} Years</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Available Days</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedDoctor.availableDays.map((day, idx) => (
                          <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Available Slots</p>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedDoctor.slots.map((slot, idx) => (
                          <span key={idx} className="bg-muted text-center py-2 rounded text-sm">
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/patient/book-opd">
                      <Button variant="accent" className="w-full" size="lg">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <User className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Select a doctor from the list to view their profile and availability</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorAvailability;
