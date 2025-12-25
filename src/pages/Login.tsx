import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, Stethoscope, LogIn, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = login(email, password, role);
    if (success) {
      toast.success('Login successful!');
      navigate(role === 'doctor' ? '/doctor/dashboard' : '/patient/dashboard');
    } else {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 py-12 px-4">
        <Card className="w-full max-w-md shadow-gov-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <LogIn className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Login to Portal</CardTitle>
            <CardDescription>
              Access your healthcare dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Login as</Label>
                <RadioGroup
                  value={role}
                  onValueChange={(value) => setRole(value as 'patient' | 'doctor')}
                  className="grid grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="patient"
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      role === 'patient' ? 'border-accent bg-accent/5' : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <RadioGroupItem value="patient" id="patient" className="sr-only" />
                    <User className={`h-8 w-8 ${role === 'patient' ? 'text-accent' : 'text-muted-foreground'}`} />
                    <span className={`font-medium ${role === 'patient' ? 'text-accent' : ''}`}>Patient</span>
                  </Label>
                  
                  <Label
                    htmlFor="doctor"
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      role === 'doctor' ? 'border-info bg-info/5' : 'border-border hover:border-info/50'
                    }`}
                  >
                    <RadioGroupItem value="doctor" id="doctor" className="sr-only" />
                    <Stethoscope className={`h-8 w-8 ${role === 'doctor' ? 'text-info' : 'text-muted-foreground'}`} />
                    <span className={`font-medium ${role === 'doctor' ? 'text-info' : ''}`}>Doctor</span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email / Username</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                <strong>Demo:</strong> Enter any email and password to login.
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Button>

              {/* Register Link */}
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary font-medium hover:underline">
                  Register here
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
