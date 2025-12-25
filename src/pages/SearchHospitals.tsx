import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  states, 
  districts, 
  hospitals, 
  departments, 
  doctors 
} from '@/data/dummyData';
import { Search, Building2, MapPin, Stethoscope, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchHospitals = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedHospital, setSelectedHospital] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const availableDistricts = selectedState ? districts[parseInt(selectedState)] || [] : [];
  const availableHospitals = selectedDistrict ? hospitals[parseInt(selectedDistrict)] || [] : [];
  
  const filteredDoctors = doctors.filter(doctor => {
    if (selectedHospital && doctor.hospital !== parseInt(selectedHospital)) return false;
    if (selectedDepartment && doctor.department !== selectedDepartment) return false;
    return true;
  });

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedHospital('');
    setSelectedDepartment('');
    setShowResults(false);
  };

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
              <Search className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Find Hospitals & Doctors</h1>
              <p className="text-primary-foreground/80">Search government healthcare facilities near you</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Filters */}
        <Card className="mb-8 shadow-gov">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* State */}
              <div className="space-y-2">
                <Label>State</Label>
                <Select value={selectedState} onValueChange={(value) => {
                  setSelectedState(value);
                  setSelectedDistrict('');
                  setSelectedHospital('');
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map(state => (
                      <SelectItem key={state.id} value={state.id.toString()}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* District */}
              <div className="space-y-2">
                <Label>District</Label>
                <Select 
                  value={selectedDistrict} 
                  onValueChange={(value) => {
                    setSelectedDistrict(value);
                    setSelectedHospital('');
                  }}
                  disabled={!selectedState}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableDistricts.map(district => (
                      <SelectItem key={district.id} value={district.id.toString()}>
                        {district.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Hospital */}
              <div className="space-y-2">
                <Label>Hospital (Optional)</Label>
                <Select 
                  value={selectedHospital} 
                  onValueChange={setSelectedHospital}
                  disabled={!selectedDistrict}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Hospitals" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableHospitals.map(hospital => (
                      <SelectItem key={hospital.id} value={hospital.id.toString()}>
                        {hospital.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Department */}
              <div className="space-y-2">
                <Label>Department (Optional)</Label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map(dept => (
                      <SelectItem key={dept.id} value={dept.name}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button onClick={handleSearch} disabled={!selectedDistrict}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 animate-fade-in">
            {/* Hospitals List */}
            {availableHospitals.length > 0 && !selectedHospital && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-info" />
                  Hospitals in {availableDistricts.find(d => d.id.toString() === selectedDistrict)?.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableHospitals.map(hospital => (
                    <Card key={hospital.id} className="card-hover cursor-pointer" onClick={() => setSelectedHospital(hospital.id.toString())}>
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{hospital.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{hospital.type}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                                {hospital.beds} Beds
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Doctors List */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-accent" />
                Available Doctors {filteredDoctors.length > 0 && `(${filteredDoctors.length})`}
              </h2>
              
              {filteredDoctors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredDoctors.map(doctor => (
                    <Card key={doctor.id} className="card-hover">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <User className="h-7 w-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{doctor.name}</h3>
                            <p className="text-sm text-accent font-medium">{doctor.department}</p>
                            <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
                            <p className="text-sm text-muted-foreground">{doctor.experience} years experience</p>
                            
                            <div className="flex items-center gap-2 mt-3">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{doctor.availableDays.join(', ')}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-3">
                              {doctor.slots.slice(0, 3).map((slot, idx) => (
                                <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                                  {slot}
                                </span>
                              ))}
                              {doctor.slots.length > 3 && (
                                <span className="text-xs text-muted-foreground">
                                  +{doctor.slots.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <Link to="/patient/book-opd">
                            <Button variant="accent" size="sm" className="w-full">
                              Book Appointment
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-muted/50">
                  <CardContent className="p-8 text-center">
                    <Stethoscope className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No doctors found matching your criteria.</p>
                    <p className="text-sm text-muted-foreground mt-1">Try adjusting your search filters.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Initial State */}
        {!showResults && (
          <Card className="bg-muted/50">
            <CardContent className="p-12 text-center">
              <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search for Healthcare Services</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Select a state and district to find government hospitals and available doctors in your area.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default SearchHospitals;
