import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  states, 
  districts, 
  hospitals, 
  departments, 
  doctors,
  patients
} from '@/data/dummyData';
import { 
  Calendar, 
  MapPin, 
  Building2, 
  Stethoscope, 
  Clock, 
  User, 
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Download,
  Printer
} from 'lucide-react';
import { toast } from 'sonner';

type Step = 1 | 2 | 3 | 4 | 5;

const BookOPD = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  
  // Form State
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  
  // Patient details (auto-filled with dummy data)
  const patientData = patients[0];
  
  // Confirmation data
  const [appointmentId, setAppointmentId] = useState('');

  const availableDistricts = selectedState ? districts[parseInt(selectedState)] || [] : [];
  const availableHospitals = selectedDistrict ? hospitals[parseInt(selectedDistrict)] || [] : [];
  
  const filteredDoctors = doctors.filter(doctor => {
    if (selectedHospital && doctor.hospital !== parseInt(selectedHospital)) return false;
    if (selectedDepartment && doctor.department !== selectedDepartment) return false;
    return true;
  });

  const selectedDoctorData = doctors.find(d => d.id.toString() === selectedDoctor);
  const selectedHospitalData = Object.values(hospitals).flat().find(h => h.id.toString() === selectedHospital);

  const steps = [
    { number: 1, title: 'Location', icon: MapPin },
    { number: 2, title: 'Hospital', icon: Building2 },
    { number: 3, title: 'Doctor', icon: Stethoscope },
    { number: 4, title: 'Schedule', icon: Clock },
    { number: 5, title: 'Confirm', icon: CheckCircle },
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedState && selectedDistrict;
      case 2: return selectedHospital && selectedDepartment;
      case 3: return selectedDoctor;
      case 4: return selectedDate && selectedSlot;
      default: return true;
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleConfirm = () => {
    const newAppointmentId = `OPD${Date.now().toString().slice(-8)}`;
    setAppointmentId(newAppointmentId);
    toast.success('Appointment booked successfully!');
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

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
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Book OPD Appointment</h1>
              <p className="text-primary-foreground/80">Schedule your visit to a government hospital</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      currentStep >= step.number 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block ${
                    currentStep >= step.number ? 'text-accent font-medium' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 sm:w-20 h-1 mx-2 rounded ${
                    currentStep > step.number ? 'bg-accent' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="max-w-3xl mx-auto shadow-gov-lg">
          {/* Step 1: Location */}
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Select Location
                </CardTitle>
                <CardDescription>Choose your state and district</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>State *</Label>
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

                <div className="space-y-2">
                  <Label>District *</Label>
                  <Select 
                    value={selectedDistrict} 
                    onValueChange={setSelectedDistrict}
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
              </CardContent>
            </>
          )}

          {/* Step 2: Hospital & Department */}
          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-info" />
                  Select Hospital & Department
                </CardTitle>
                <CardDescription>Choose your preferred hospital and department</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Hospital *</Label>
                  <Select value={selectedHospital} onValueChange={setSelectedHospital}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Hospital" />
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

                <div className="space-y-2">
                  <Label>Department *</Label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
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
              </CardContent>
            </>
          )}

          {/* Step 3: Doctor Selection */}
          {currentStep === 3 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-accent" />
                  Select Doctor
                </CardTitle>
                <CardDescription>Choose your preferred doctor</CardDescription>
              </CardHeader>
              <CardContent>
                {filteredDoctors.length > 0 ? (
                  <div className="space-y-4">
                    {filteredDoctors.map(doctor => (
                      <div 
                        key={doctor.id}
                        onClick={() => setSelectedDoctor(doctor.id.toString())}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedDoctor === doctor.id.toString() 
                            ? 'border-accent bg-accent/5' 
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{doctor.name}</h4>
                            <p className="text-sm text-accent">{doctor.department}</p>
                            <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{doctor.experience} yrs exp</p>
                            <p className="text-xs text-muted-foreground">{doctor.availableDays.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Stethoscope className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>No doctors available for selected criteria</p>
                  </div>
                )}
              </CardContent>
            </>
          )}

          {/* Step 4: Date & Time */}
          {currentStep === 4 && selectedDoctorData && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-saffron" />
                  Select Date & Time
                </CardTitle>
                <CardDescription>Choose your preferred appointment slot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Selected Doctor</p>
                  <p className="font-semibold">{selectedDoctorData.name}</p>
                  <p className="text-sm">Available: {selectedDoctorData.availableDays.join(', ')}</p>
                </div>

                <div className="space-y-2">
                  <Label>Appointment Date *</Label>
                  <Input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getTomorrowDate()}
                    max={getMaxDate()}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Time Slot *</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {selectedDoctorData.slots.map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 text-sm rounded-lg border-2 transition-all ${
                          selectedSlot === slot 
                            ? 'border-accent bg-accent text-accent-foreground' 
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && !appointmentId && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  Confirm Appointment
                </CardTitle>
                <CardDescription>Review and confirm your booking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Appointment Summary */}
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3">Appointment Details</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Hospital</p>
                        <p className="font-medium">{selectedHospitalData?.name}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Department</p>
                        <p className="font-medium">{selectedDepartment}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Doctor</p>
                        <p className="font-medium">{selectedDoctorData?.name}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date & Time</p>
                        <p className="font-medium">{selectedDate} at {selectedSlot}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3">Patient Details (Auto-filled)</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Name</p>
                        <p className="font-medium">{patientData.name}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ABHA ID</p>
                        <p className="font-medium">{patientData.abhaId}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Phone</p>
                        <p className="font-medium">{patientData.phone}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Age/Gender</p>
                        <p className="font-medium">{patientData.age} / {patientData.gender}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button onClick={handleConfirm} variant="accent" className="w-full" size="lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Confirm Appointment
                </Button>
              </CardContent>
            </>
          )}

          {/* Confirmation Success with Receipt */}
          {currentStep === 5 && appointmentId && (
            <>
              <CardContent className="py-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-accent mb-2">Appointment Confirmed!</h2>
                  <p className="text-muted-foreground">Your OPD appointment has been successfully booked.</p>
                </div>

                {/* OPD Slip / Receipt */}
                <div className="max-w-lg mx-auto border-2 border-dashed border-primary/30 rounded-lg overflow-hidden bg-background">
                  {/* Receipt Header */}
                  <div className="bg-primary text-primary-foreground p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-bold">OPD APPOINTMENT SLIP</h3>
                    </div>
                    <p className="text-sm opacity-80">National Digital Health Services Portal</p>
                  </div>

                  {/* Receipt Body */}
                  <div className="p-6 space-y-4">
                    {/* Appointment ID - Prominent */}
                    <div className="text-center py-3 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-sm text-muted-foreground">Appointment ID / Token No.</p>
                      <p className="text-3xl font-bold text-primary tracking-wider">{appointmentId}</p>
                    </div>

                    {/* Two Column Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-3">
                        <div>
                          <p className="text-muted-foreground text-xs uppercase">Hospital</p>
                          <p className="font-semibold">{selectedHospitalData?.name}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs uppercase">Department</p>
                          <p className="font-semibold">{selectedDepartment}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs uppercase">Doctor</p>
                          <p className="font-semibold">{selectedDoctorData?.name}</p>
                          <p className="text-xs text-muted-foreground">{selectedDoctorData?.qualification}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-muted-foreground text-xs uppercase">Date</p>
                          <p className="font-semibold">{new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs uppercase">Time Slot</p>
                          <p className="font-semibold text-accent">{selectedSlot}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs uppercase">Status</p>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium">
                            <CheckCircle className="h-3 w-3" />
                            Confirmed
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-border my-4"></div>

                    {/* Patient Details */}
                    <div>
                      <p className="text-xs uppercase text-muted-foreground mb-2 font-medium">Patient Details</p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs">Name</p>
                          <p className="font-medium">{patientData.name}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">ABHA ID</p>
                          <p className="font-medium">{patientData.abhaId}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Age / Gender</p>
                          <p className="font-medium">{patientData.age} years / {patientData.gender}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Phone</p>
                          <p className="font-medium">{patientData.phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-border my-4"></div>

                    {/* Fee Details */}
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span>Registration Fee</span>
                        <span>₹ 10.00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span>Consultation Fee</span>
                        <span>₹ 0.00 (Govt. Hospital)</span>
                      </div>
                      <div className="border-t border-border pt-2 flex justify-between items-center font-bold">
                        <span>Total Amount</span>
                        <span className="text-accent">₹ 10.00</span>
                      </div>
                    </div>

                    {/* Important Instructions */}
                    <div className="text-xs text-muted-foreground space-y-1 bg-saffron/5 p-3 rounded-lg border border-saffron/20">
                      <p className="font-semibold text-foreground mb-2">Important Instructions:</p>
                      <p>• Please arrive 15 minutes before your appointment time</p>
                      <p>• Carry this slip and valid ID proof (Aadhaar/ABHA Card)</p>
                      <p>• Bring previous medical records if any</p>
                      <p>• Appointment is non-transferable</p>
                    </div>

                    {/* Booking Timestamp */}
                    <div className="text-center text-xs text-muted-foreground pt-2">
                      <p>Booked on: {new Date().toLocaleString('en-IN')}</p>
                      <p className="mt-1">This is a computer-generated slip</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <Button variant="outline" onClick={() => toast.success('OPD Slip downloaded successfully! (Demo)')}>
                    <Download className="h-4 w-4 mr-2" />
                    Download OPD Slip
                  </Button>
                  <Button variant="outline" onClick={() => toast.success('Sending to printer... (Demo)')}>
                    <Printer className="h-4 w-4 mr-2" />
                    Print Slip
                  </Button>
                </div>

                <div className="text-center mt-4">
                  <Button 
                    onClick={() => navigate('/patient/dashboard')} 
                    variant="accent" 
                  >
                    Go to Dashboard
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {/* Navigation Buttons */}
          {!appointmentId && (
            <div className="px-6 pb-6 flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              {currentStep < 5 && (
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default BookOPD;
