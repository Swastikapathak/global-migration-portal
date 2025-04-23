
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Global Migration Portal";
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-mocha">Global Migration Portal</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-in">
              Your trusted partner for immigration services worldwide. With years of experience and a team of experts, we help you navigate the complex immigration journey with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="h-1 w-20 bg-mocha mb-6"></div>
              <p className="text-gray-700 mb-4">
                Global Migration Portal was founded in 2009 with a simple mission: to help people realize their dreams of a better life abroad. What started as a small consultancy has grown into a leading immigration service provider with offices in multiple countries.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, having experienced the challenges of immigration firsthand, recognized the need for honest, transparent, and effective immigration services. This personal experience remains at the core of our company values today.
              </p>
              <p className="text-gray-700">
                Over the past decade, we've successfully helped thousands of individuals and families start their new lives in Canada, Australia, and across Europe, building a reputation for excellence and integrity in the process.
              </p>
            </div>
            <div className="animate-on-scroll order-first md:order-last">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
                alt="Our team in office"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Our Mission and Values</h2>
            <div className="h-1 w-20 bg-mocha mx-auto mb-6"></div>
            <p className="text-gray-700">
              At Global Migration Portal, we're committed to transforming lives through expert immigration guidance. Our values shape everything we do, from our first consultation to the moment you receive your visa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service. Our team is continuously updating their knowledge to provide you with the most current and accurate immigration advice.",
                icon: "🏆"
              },
              {
                title: "Integrity",
                description:
                  "We believe in honest and transparent communication. We'll never make promises we can't keep, and we'll always give you a realistic assessment of your options.",
                icon: "⚖️"
              },
              {
                title: "Client-Centered",
                description:
                  "Your goals are our priority. We tailor our services to your unique situation, ensuring that we address your specific needs and concerns throughout the process.",
                icon: "👥"
              },
              {
                title: "Accessibility",
                description:
                  "We make complex immigration processes understandable. Our team breaks down complicated procedures into clear, manageable steps.",
                icon: "🔍"
              },
              {
                title: "Innovation",
                description:
                  "The immigration landscape is constantly changing. We embrace innovation to stay ahead of these changes and provide you with cutting-edge immigration strategies.",
                icon: "💡"
              },
              {
                title: "Global Perspective",
                description:
                  "With team members from diverse backgrounds and cultures, we bring a global perspective to our work that helps us better understand and serve our international clients.",
                icon: "🌍"
              }
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-md hover-scale animate-on-scroll"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Meet Our Expert Team</h2>
            <div className="h-1 w-20 bg-mocha mx-auto mb-6"></div>
            <p className="text-gray-700">
              Our team of immigration specialists brings decades of combined experience to help you navigate the complexities of global migration. Each consultant is certified and continuously updates their knowledge to stay current with changing immigration policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Canada Immigration Specialist",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                description:
                  "With over 10 years of experience in Canadian immigration, Sarah specializes in Express Entry applications and Provincial Nominee Programs."
              },
              {
                name: "Michael Zhang",
                title: "Australia Migration Expert",
                image:
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                description:
                  "Michael has helped hundreds of skilled professionals and businesses successfully relocate to Australia through various visa pathways."
              },
              {
                name: "Elena Petrova",
                title: "European Immigration Consultant",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                description:
                  "Elena is our EU immigration expert, specializing in EU Blue Card applications and entrepreneur pathways to European countries."
              },
              {
                name: "Rajesh Patel",
                title: "Student Visa Specialist",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                description:
                  "Rajesh guides students through the international education journey, with expertise in student visas and post-graduation work permits."
              },
              {
                name: "Maria Rodriguez",
                title: "Family Sponsorship Expert",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                description:
                  "Maria specializes in family reunification programs, helping families navigate the complex process of sponsoring loved ones."
              },
              {
                name: "David Wilson",
                title: "Business Immigration Consultant",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                description:
                  "David works with entrepreneurs and investors looking to establish businesses abroad through investment immigration programs."
              }
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-mocha mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Why Choose Global Migration Portal</h2>
            <div className="h-1 w-20 bg-mocha mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Certified immigration consultants with years of experience",
              "Personalized immigration strategies tailored to your unique situation",
              "Transparent process and clear communication at every stage",
              "Comprehensive support from initial assessment to arrival in your new country",
              "High success rate with thousands of successful applications",
              "Continued support after you arrive in your destination country",
              "Up-to-date knowledge of latest immigration policies and changes",
              "Ethical practice with your best interests at heart"
            ].map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-4 animate-on-scroll"
              >
                <CheckCircle className="text-mocha mt-1 flex-shrink-0" />
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <Button asChild className="bg-mocha hover:bg-gold/90 text-black">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
