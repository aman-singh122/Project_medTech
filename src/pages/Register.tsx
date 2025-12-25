import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, Stethoscope, UserPlus, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const success = register(name, email, password, role);
    if (success) {
      toast.success('Registration successful!');
      navigate(role === 'doctor' ? '/doctor/dashboard' : '/patient/dashboard');
    } else {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 py-12 px-4">
        <Card className="w-full max-w-md shadow-gov-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <UserPlus className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Register for healthcare services
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Register as</Label>
                <RadioGroup
                  value={role}
                  onValueChange={(value) => setRole(value as 'patient' | 'doctor')}
                  className="grid grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="reg-patient"
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      role === 'patient' ? 'border-accent bg-accent/5' : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <RadioGroupItem value="patient" id="reg-patient" className="sr-only" />
                    <User className={`h-8 w-8 ${role === 'patient' ? 'text-accent' : 'text-muted-foreground'}`} />
                    <span className={`font-medium ${role === 'patient' ? 'text-accent' : ''}`}>Patient</span>
                  </Label>
                  
                  <Label
                    htmlFor="reg-doctor"
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      role === 'doctor' ? 'border-info bg-info/5' : 'border-border hover:border-info/50'
                    }`}
                  >
                    <RadioGroupItem value="doctor" id="reg-doctor" className="sr-only" />
                    <Stethoscope className={`h-8 w-8 ${role === 'doctor' ? 'text-info' : 'text-muted-foreground'}`} />
                    <span className={`font-medium ${role === 'doctor' ? 'text-info' : ''}`}>Doctor</span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="reg-email">Email *</Label>
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="reg-password">Password *</Label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password *</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              {/* Demo Note */}
              <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span><strong>Demo:</strong> Registration will auto-login with sample data.</span>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="accent" className="w-full" size="lg">
                <UserPlus className="h-5 w-5 mr-2" />
                Create Account
              </Button>

              {/* Login Link */}
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;
