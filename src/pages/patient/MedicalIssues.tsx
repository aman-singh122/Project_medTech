import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { symptoms, departments, doctors } from '@/data/dummyData';
import { 
  AlertCircle, 
  ArrowLeft,
  Stethoscope,
  AlertTriangle,
  ChevronRight,
  User
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const MedicalIssues = () => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleSymptomToggle = (symptomId: number) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
    setShowRecommendation(false);
  };

  const getRecommendations = () => {
    const selectedSymptomData = symptoms.filter(s => selectedSymptoms.includes(s.id));
    const recommendedDepts = [...new Set(selectedSymptomData.map(s => s.suggestedDepartment))];
    const recommendedDoctors = doctors.filter(d => recommendedDepts.includes(d.department)).slice(0, 3);
    
    return { departments: recommendedDepts, doctors: recommendedDoctors };
  };

  const handleGetRecommendation = () => {
    if (selectedSymptoms.length > 0) {
      setShowRecommendation(true);
    }
  };

  const recommendations = getRecommendations();

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
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Medical Issues</h1>
              <p className="text-primary-foreground/80">Report symptoms and get guidance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Disclaimer */}
        <Card className="mb-6 border-warning bg-warning/5">
          <CardContent className="p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-warning-foreground">Important Disclaimer</p>
              <p className="text-sm text-muted-foreground">
                This tool provides general guidance only and is NOT a substitute for professional medical advice, 
                diagnosis, or treatment. Always consult with a qualified healthcare provider for medical concerns.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Symptoms Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Select Your Symptoms</CardTitle>
                <CardDescription>Choose all symptoms that apply to you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {symptoms.map(symptom => (
                    <div 
                      key={symptom.id}
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedSymptoms.includes(symptom.id) 
                          ? 'border-accent bg-accent/5' 
                          : 'border-border hover:border-accent/50'
                      }`}
                      onClick={() => handleSymptomToggle(symptom.id)}
                    >
                      <Checkbox 
                        checked={selectedSymptoms.includes(symptom.id)}
                        onCheckedChange={() => handleSymptomToggle(symptom.id)}
                      />
                      <span className="font-medium">{symptom.name}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleGetRecommendation} 
                  className="w-full mt-6" 
                  size="lg"
                  disabled={selectedSymptoms.length === 0}
                >
                  Get Recommendation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-accent" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showRecommendation && selectedSymptoms.length > 0 ? (
                  <div className="space-y-6">
                    {/* Suggested Departments */}
                    <div>
                      <p className="text-sm font-medium mb-3">Suggested Departments</p>
                      <div className="space-y-2">
                        {recommendations.departments.map((dept, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                            <Stethoscope className="h-4 w-4 text-accent" />
                            <span className="font-medium text-accent">{dept}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suggested Doctors */}
                    <div>
                      <p className="text-sm font-medium mb-3">Available Doctors</p>
                      <div className="space-y-3">
                        {recommendations.doctors.map(doctor => (
                          <div key={doctor.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{doctor.name}</p>
                              <p className="text-xs text-muted-foreground">{doctor.department}</p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="/patient/book-opd">
                      <Button variant="accent" className="w-full" size="lg">
                        Book Appointment
                      </Button>
                    </Link>

                    <p className="text-xs text-muted-foreground text-center">
                      ⚠ This is not medical advice. Please consult a doctor.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <AlertCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Select symptoms and click "Get Recommendation" to see suggestions</p>
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

export default MedicalIssues;
