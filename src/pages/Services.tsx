
import { Briefcase, GraduationCap, Heart, Globe, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceDetail from "@/components/ServiceDetail";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Our Services - Global Migration Portal";
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-gold">Immigration Services</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-in">
              Comprehensive immigration solutions tailored to your needs. Explore our range of services designed to make your migration journey smooth and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Canada Immigration Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Canada Immigration Services</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Canada offers multiple pathways for skilled workers, entrepreneurs, and families looking to build a new life. Our experts will guide you through the most suitable options for your circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ServiceDetail
              title="Express Entry Program"
              description="Canada's flagship immigration system for skilled workers. This points-based system offers a fast track to Canadian permanent residency for qualified candidates."
              icon={<Briefcase size={24} />}
              requirements={[
                "Valid language test results (IELTS, CELPIP, TEF)",
                "Education credentials assessment (ECA)",
                "Minimum 1 year skilled work experience",
                "Sufficient settlement funds (unless you have a Canadian job offer)"
              ]}
              process={[
                "Create an Express Entry profile",
                "Receive Comprehensive Ranking System (CRS) score",
                "Receive an Invitation to Apply (ITA) if selected",
                "Submit complete application for permanent residence",
                "Complete medical examination and security checks",
                "Receive confirmation of permanent residence"
              ]}
              eligibility={[
                "Federal Skilled Worker Program",
                "Federal Skilled Trades Program",
                "Canadian Experience Class",
                "Provincial Nominee Program (Express Entry stream)"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Provincial Nominee Programs"
              description="Programs designed to address specific labor market needs of Canadian provinces. PNPs can be an excellent pathway for candidates with skills targeted by specific provinces."
              icon={<Globe size={24} />}
              requirements={[
                "Skills and experience that match provincial labor market needs",
                "Genuine intention to settle in the nominating province",
                "Language proficiency requirements vary by province",
                "Specific education and work experience requirements"
              ]}
              process={[
                "Identify suitable provincial programs",
                "Submit expression of interest to the province",
                "Receive provincial nomination if selected",
                "Apply for permanent residence with federal government",
                "Complete medical examination and security checks",
                "Receive confirmation of permanent residence"
              ]}
              eligibility={[
                "Ontario Immigrant Nominee Program (OINP)",
                "British Columbia Provincial Nominee Program (BC PNP)",
                "Alberta Immigrant Nominee Program (AINP)",
                "Manitoba Provincial Nominee Program (MPNP)",
                "Saskatchewan Immigrant Nominee Program (SINP)",
                "Nova Scotia Nominee Program (NSNP)"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Family Sponsorship"
              description="Canadian citizens and permanent residents can sponsor eligible family members to join them in Canada. We help navigate the complex process of family reunification."
              icon={<Heart size={24} />}
              requirements={[
                "Sponsor must be a Canadian citizen or permanent resident",
                "Minimum income requirements for specific family members",
                "Legally binding undertaking of financial support",
                "Eligible relationship (spouse, dependent children, parents, etc.)"
              ]}
              process={[
                "Determine eligibility for sponsorship",
                "Submit sponsorship application and application for permanent residence",
                "Undergo relationship verification (for spouse/partner sponsorship)",
                "Complete medical examination and security checks",
                "Receive confirmation of permanent residence"
              ]}
              eligibility={[
                "Spouse, common-law or conjugal partner sponsorship",
                "Dependent children sponsorship",
                "Parents and grandparents sponsorship",
                "Other eligible relatives in specific circumstances"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Student Visas with Pathway to PR"
              description="Canada offers attractive pathways from student to permanent resident. We help plan your education and immigration journey for long-term success."
              icon={<GraduationCap size={24} />}
              requirements={[
                "Acceptance from a Designated Learning Institution (DLI)",
                "Proof of financial support for tuition and living expenses",
                "Clean criminal and medical history",
                "Intention to leave Canada after studies (unless applying for PGWP)"
              ]}
              process={[
                "Obtain acceptance from Canadian institution",
                "Apply for study permit",
                "Complete studies in Canada",
                "Apply for Post-Graduation Work Permit (PGWP)",
                "Gain Canadian work experience",
                "Apply for permanent residence through eligible programs"
              ]}
              eligibility={[
                "Post-Graduation Work Permit (PGWP) of up to 3 years",
                "Canadian Experience Class (after gaining work experience)",
                "Provincial Nominee Programs for international graduates",
                "Express Entry pathways for skilled graduates"
              ]}
              className="animate-on-scroll"
            />
          </div>
        </div>
      </section>

      {/* European Opportunities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">European Opportunities</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Europe offers diverse immigration pathways across multiple countries. Our experts specialize in navigating complex European immigration systems to find the best option for your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceDetail
              title="EU Blue Card Program"
              description="A work and residence permit for highly qualified non-EU nationals, offering a pathway to permanent residence in participating EU countries."
              icon={<Briefcase size={24} />}
              requirements={[
                "Higher education qualification or 5+ years of professional experience",
                "Employment contract or binding job offer meeting salary threshold",
                "Valid travel document and visa if required",
                "Health insurance coverage"
              ]}
              process={[
                "Find employment in an EU member state",
                "Employer may need to demonstrate labor market need",
                "Submit Blue Card application to national authorities",
                "Receive approval and residence permit",
                "After specific time (varies by country), apply for permanent residence"
              ]}
              eligibility={[
                "Highly qualified professionals with university degree",
                "IT specialists with proven experience in certain countries",
                "Healthcare professionals, researchers, engineers",
                "Other skilled professionals with salary above national threshold"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Entrepreneur Visas"
              description="Various European countries offer visas for entrepreneurs looking to establish or manage businesses within their borders."
              icon={<Building size={24} />}
              requirements={[
                "Viable business plan for new or existing business",
                "Sufficient investment funds (varies by country)",
                "Relevant business experience",
                "Job creation potential in host country"
              ]}
              process={[
                "Develop comprehensive business plan",
                "Demonstrate availability of investment funds",
                "Submit application to relevant authorities",
                "Interview or business plan defense (in some countries)",
                "Receive approval and establish business"
              ]}
              eligibility={[
                "Germany's self-employment visa",
                "France's talent passport for entrepreneurs",
                "Spain's entrepreneur visa",
                "Portugal's startup visa",
                "Ireland's start-up entrepreneur program"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Investment Immigration"
              description="Programs allowing foreign investors to obtain residence permits and, eventually, citizenship through significant investments in the country."
              icon={<Globe size={24} />}
              requirements={[
                "Significant financial investment (property, business, government bonds)",
                "Clean criminal history and security clearance",
                "Proof of source of funds",
                "Minimum stay requirements in some countries"
              ]}
              process={[
                "Select appropriate investment program",
                "Make qualifying investment",
                "Submit application with investment proof",
                "Undergo due diligence process",
                "Receive residence permit",
                "After qualifying period, apply for permanent residence/citizenship"
              ]}
              eligibility={[
                "Portugal Golden Visa Program",
                "Spain Golden Visa Program",
                "Greece Golden Visa Program",
                "Malta Permanent Residence Programme",
                "Cyprus Investment Programme"
              ]}
              className="animate-on-scroll"
            />
          </div>
        </div>
      </section>

      {/* Australia Migration Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Australia Migration Options</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Australia's points-based immigration system offers multiple pathways for skilled workers, investors, and family members. Our experts will help you navigate the complex system for the best outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceDetail
              title="Skilled Independent Visa"
              description="Australia's points-tested visa for skilled workers who are not sponsored by an employer, state or territory, or family member."
              icon={<Users size={24} />}
              requirements={[
                "Age under 45 years",
                "Competent English language proficiency",
                "Positive skills assessment for nominated occupation",
                "Minimum points score (currently 65 points)",
                "Invitation to apply after submitting EOI"
              ]}
              process={[
                "Submit Expression of Interest (EOI) in SkillSelect",
                "Receive invitation to apply if selected",
                "Lodge visa application within 60 days of invitation",
                "Undergo health and character assessments",
                "Receive visa grant notification"
              ]}
              eligibility={[
                "Skilled occupation on relevant occupation list",
                "Points awarded for age, English language ability, skilled employment experience",
                "Educational qualifications and other factors",
                "Subclass 189 (Skilled Independent) visa"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Employer Sponsored Visas"
              description="Visas for skilled workers nominated by an Australian employer to fill positions that cannot be filled by Australian workers."
              icon={<Briefcase size={24} />}
              requirements={[
                "Nomination by approved Australian employer",
                "Position on relevant skilled occupation list",
                "Skills, qualifications and experience matching position",
                "English language proficiency",
                "Meet health and character requirements"
              ]}
              process={[
                "Employer lodges nomination",
                "Applicant lodges visa application",
                "Skills and experience assessment",
                "Health and character assessments",
                "Visa decision"
              ]}
              eligibility={[
                "Temporary Skill Shortage (TSS) visa (subclass 482)",
                "Employer Nomination Scheme (subclass 186)",
                "Regional Sponsored Migration Scheme (subclass 187)"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Business Innovation Visas"
              description="Visas for business owners and entrepreneurs looking to establish or manage businesses in Australia."
              icon={<Building size={24} />}
              requirements={[
                "Successful business career and genuine intention to establish business in Australia",
                "Business turnover and net assets thresholds",
                "Business and personal net assets",
                "Age under 55 (waivers possible)",
                "Minimum points score for some streams"
              ]}
              process={[
                "Submit Expression of Interest (EOI) in SkillSelect",
                "Receive invitation to apply",
                "Lodge visa application",
                "Demonstrate business experience and plans",
                "Initially granted provisional visa, later eligible for permanent residence"
              ]}
              eligibility={[
                "Business Innovation stream",
                "Investor stream",
                "Significant Investor stream",
                "Entrepreneur stream"
              ]}
              className="animate-on-scroll"
            />

            <ServiceDetail
              title="Regional Migration Program"
              description="Visas designed to address skill shortages in regional Australia and distribute population growth more evenly."
              icon={<Globe size={24} />}
              requirements={[
                "Nomination by state/territory government or eligible relative in regional Australia",
                "Skills assessment in nominated occupation",
                "Commitment to live and work in regional Australia",
                "Points test requirements for certain visas"
              ]}
              process={[
                "Secure state/territory nomination or family sponsorship",
                "Submit Expression of Interest (EOI)",
                "Receive invitation and lodge application",
                "Meet visa requirements including skills assessment",
                "Comply with regional residence conditions"
              ]}
              eligibility={[
                "Skilled Work Regional (Provisional) visa (subclass 491)",
                "Skilled Employer Sponsored Regional (Provisional) visa (subclass 494)",
                "Permanent Residence (Skilled Regional) visa (subclass 191)"
              ]}
              className="animate-on-scroll"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Ready to Start Your Immigration Journey?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-on-scroll">
            Book a consultation with our expert team to discuss your specific situation and discover the best immigration pathway for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-black">
              <Link to="/booking">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
