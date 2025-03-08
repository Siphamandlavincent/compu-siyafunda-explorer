
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-compuwhite py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-compublack">
          CONTACT US
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-compuwhite to-gray-100 border-compugreen/20">
            <CardHeader>
              <CardTitle className="text-2xl text-compublack">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-compugreen/20" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="border-compugreen/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" className="border-compugreen/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[120px] border-compugreen/20" />
                </div>
                <Button type="submit" className="bg-compugreen hover:bg-compugreen/90 text-compublack w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-compuwhite to-gray-100 border-compugreen/20">
              <CardHeader>
                <CardTitle className="text-2xl text-compublack">Programme Director</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Spha Khumalo</h3>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-compugreen mr-2" />
                  <span>+27 61 079 3813</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-compugreen mr-2" />
                  <span>v.khumalo@yahoo.com</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-compuwhite to-gray-100 border-compugreen/20">
              <CardHeader>
                <CardTitle className="text-2xl text-compublack">Graphics Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Sibusiso Ngwalase</h3>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-compugreen mr-2" />
                  <span>+27 84 0800 234</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-compugreen mr-2" />
                  <span>business@welovemzansi.co.za</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
