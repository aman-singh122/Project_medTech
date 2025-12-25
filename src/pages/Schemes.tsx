import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { governmentSchemes } from '@/data/dummyData';
import { Shield, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Schemes = () => {
  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-10 w-10" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Government Healthcare Schemes</h1>
              <p className="text-primary-foreground/80">Explore healthcare benefits available to you</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {governmentSchemes.map(scheme => (
            <Card key={scheme.id} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  {scheme.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{scheme.description}</p>
                <p className="text-sm mb-4"><strong>Eligibility:</strong> {scheme.eligibility}</p>
                <Button variant="outline" size="sm">
                  Learn More <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Schemes;
