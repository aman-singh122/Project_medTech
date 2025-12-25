import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">About Portal</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              The National Digital Health Services Portal is an initiative by the Ministry of Health & Family Welfare to provide accessible healthcare services to all citizens of India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/search" className="hover:text-accent transition-colors">Find Hospitals</Link></li>
              <li><Link to="/schemes" className="hover:text-accent transition-colors">Government Schemes</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/help" className="hover:text-accent transition-colors">Help & Support</Link></li>
            </ul>
          </div>

          {/* Related Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Related Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                  Ministry of Health <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                  Digital India <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                  Ayushman Bharat <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                  India.gov.in <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Toll Free: 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>support@ndhs.gov.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Nirman Bhawan, New Delhi - 110011</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 National Digital Health Services. Government of India.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
              <Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link>
            </div>
          </div>
          <p className="text-center text-xs mt-4 text-primary-foreground/50">
            ⚠ This is a prototype demonstration system. Not for actual medical use.
          </p>
        </div>
      </div>
      
      {/* Bottom accent bar */}
      <div className="h-1 bg-gradient-to-r from-saffron via-white to-india-green" />
    </footer>
  );
};

export default Footer;
