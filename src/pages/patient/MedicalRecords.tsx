import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { medicalRecords, doctors } from '@/data/dummyData';
import { 
  FileText, 
  Calendar, 
  User, 
  Download, 
  Eye,
  Pill,
  TestTube,
  ClipboardList,
  ArrowLeft,
  Building2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const MedicalRecords = () => {
  const navigate = useNavigate();
  const [selectedRecord, setSelectedRecord] = useState<typeof medicalRecords[0] | null>(null);

  const getDoctor = (doctorId: number) => doctors.find(d => d.id === doctorId);

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
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Medical Records</h1>
              <p className="text-primary-foreground/80">Access your complete health history</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Records List */}
        <div className="space-y-4">
          {medicalRecords.map(record => {
            const doctor = getDoctor(record.doctorId);
            return (
              <Card key={record.id} className="card-hover">
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-7 w-7 text-saffron" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{record.diagnosis}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {doctor?.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {record.date}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded flex items-center gap-1">
                          <Pill className="h-3 w-3" />
                          {record.prescription.length} Medicines
                        </span>
                        <span className="text-xs bg-info/10 text-info px-2 py-1 rounded flex items-center gap-1">
                          <TestTube className="h-3 w-3" />
                          {record.tests.length} Tests
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedRecord(record)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-saffron" />
                              Medical Record Details
                            </DialogTitle>
                          </DialogHeader>
                          
                          {selectedRecord && (
                            <div className="space-y-6">
                              {/* Visit Info */}
                              <div className="p-4 bg-muted/50 rounded-lg">
                                <h4 className="font-semibold mb-3">Visit Information</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Date</p>
                                    <p className="font-medium">{selectedRecord.date}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Doctor</p>
                                    <p className="font-medium">{getDoctor(selectedRecord.doctorId)?.name}</p>
                                  </div>
                                  <div className="col-span-2">
                                    <p className="text-muted-foreground">Diagnosis</p>
                                    <p className="font-medium text-accent">{selectedRecord.diagnosis}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Prescription */}
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <Pill className="h-4 w-4 text-accent" />
                                  Prescription
                                </h4>
                                <div className="space-y-2">
                                  {selectedRecord.prescription.map((med, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                                      <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium text-accent">
                                        {idx + 1}
                                      </span>
                                      <span>{med}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Tests */}
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <TestTube className="h-4 w-4 text-info" />
                                  Tests Conducted
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedRecord.tests.map((test, idx) => (
                                    <span key={idx} className="bg-info/10 text-info px-3 py-2 rounded-lg text-sm">
                                      {test}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Notes */}
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <ClipboardList className="h-4 w-4 text-muted-foreground" />
                                  Doctor's Notes
                                </h4>
                                <p className="p-4 bg-muted/50 rounded-lg text-sm">
                                  {selectedRecord.notes}
                                </p>
                              </div>

                              {/* Actions */}
                              <div className="flex gap-3">
                                <Button 
                                  variant="outline" 
                                  className="flex-1"
                                  onClick={() => toast.info('Download feature - Demo only')}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  Download Prescription
                                </Button>
                                <Button 
                                  variant="outline" 
                                  className="flex-1"
                                  onClick={() => toast.info('Download feature - Demo only')}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  Download Report
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => toast.info('Download feature - Demo only')}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {medicalRecords.length === 0 && (
          <Card className="bg-muted/50">
            <CardContent className="p-12 text-center">
              <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Medical Records</h3>
              <p className="text-muted-foreground">Your medical history will appear here after your visits.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default MedicalRecords;
