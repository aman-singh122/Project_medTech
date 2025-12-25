import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchHospitals from "./pages/SearchHospitals";
import Schemes from "./pages/Schemes";
import NotFound from "./pages/NotFound";

// Patient Pages
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookOPD from "./pages/patient/BookOPD";
import DoctorAvailability from "./pages/patient/DoctorAvailability";
import MedicalRecords from "./pages/patient/MedicalRecords";
import MedicalIssues from "./pages/patient/MedicalIssues";

// Doctor Pages
import DoctorDashboard from "./pages/doctor/DoctorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchHospitals />} />
            <Route path="/schemes" element={<Schemes />} />

            {/* Patient Routes */}
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/book-opd" element={<BookOPD />} />
            <Route path="/patient/doctors" element={<DoctorAvailability />} />
            <Route path="/patient/records" element={<MedicalRecords />} />
            <Route path="/patient/issues" element={<MedicalIssues />} />
            <Route path="/patient/consultations" element={<PatientDashboard />} />
            <Route path="/patient/appointments" element={<PatientDashboard />} />
            <Route path="/patient/more" element={<PatientDashboard />} />

            {/* Doctor Routes */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor/records" element={<DoctorDashboard />} />
            <Route path="/doctor/prescriptions" element={<DoctorDashboard />} />
            <Route path="/doctor/analytics" element={<DoctorDashboard />} />
            <Route path="/doctor/overview" element={<DoctorDashboard />} />
            <Route path="/doctor/more" element={<DoctorDashboard />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
