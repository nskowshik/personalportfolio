import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import Navigation from "@/components/portfolio/Navigation";

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const pdfRef = useRef<HTMLIFrameElement>(null);

  const handleDownload = () => {
    setIsDownloading(true);
    // Download the PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const resetView = () => {
    setScale(1);
    setRotation(0);
  };

  useEffect(() => {
    // Check if PDF loads after a timeout for embed element
    const checkPdfLoaded = setTimeout(() => {
      const embed = document.getElementById('pdf-viewer') as HTMLEmbedElement;
      const errorFallback = document.getElementById('pdf-error-fallback');
      
      if (embed && errorFallback) {
        // For embed elements, we can't easily detect loading errors
        // So we'll show the error fallback if the PDF doesn't seem to load after timeout
        // This is more of a fallback for localhost issues
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          // In localhost, give it more time and then show fallback if needed
          setTimeout(() => {
            // Check if embed is still just a placeholder (no PDF loaded)
            if (embed && embed.style.display !== 'none') {
              // We'll keep the embed visible but also show a small note
              console.log('PDF viewer loaded - embed element is visible');
            }
          }, 1000);
        }
      }
    }, 3000);

    return () => clearTimeout(checkPdfLoaded);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Resume</h1>
            <p className="text-muted-foreground">View and download my professional resume</p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleDownload} 
              disabled={isDownloading}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {isDownloading ? "Downloading..." : "Download PDF"}
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-xl">PDF Viewer Controls</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleZoomOut}
                  disabled={scale <= 0.5}
                  className="flex items-center gap-1"
                >
                  <ZoomOut className="w-4 h-4" />
                  Zoom Out
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleZoomIn}
                  disabled={scale >= 3}
                  className="flex items-center gap-1"
                >
                  <ZoomIn className="w-4 h-4" />
                  Zoom In
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRotate}
                  className="flex items-center gap-1"
                >
                  <RotateCw className="w-4 h-4" />
                  Rotate
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetView}
                  className="flex items-center gap-1"
                >
                  Reset View
                </Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Scale: {(scale * 100).toFixed(0)}% | Rotation: {rotation}°
            </div>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div 
              className="relative bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden"
              style={{
                minHeight: '800px',
                transition: 'all 0.3s ease'
              }}
            >
              <embed
                src="/resume.pdf"
                type="application/pdf"
                className="w-full h-full border-0"
                style={{
                  minHeight: '800px',
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.3s ease'
                }}
                title="Resume PDF"
                id="pdf-viewer"
              />
              
              <div 
                className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900"
                style={{ display: 'none' }}
                id="pdf-error-fallback"
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📄</div>
                  <h3 className="text-xl font-semibold mb-2">PDF Viewer Issue</h3>
                  <p className="text-muted-foreground mb-4">
                    The PDF viewer couldn't load properly. You can download the resume instead.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button onClick={handleDownload}>
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        // Open PDF in new tab
                        window.open('/resume.pdf', '_blank');
                      }}
                    >
                      Open in New Tab
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Your City, State</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/yourprofile</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/yourusername</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Portfolio</p>
                  <p className="text-sm text-muted-foreground">yourwebsite.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Resume;
