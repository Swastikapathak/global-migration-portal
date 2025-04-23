
import { useState } from "react";
import { ArrowRight, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const categories = [
  "All Posts",
  "Canada Immigration",
  "Australia Migration",
  "European Opportunities",
  "Student Visas",
  "Family Sponsorship",
  "Immigration Policy",
  "Success Stories"
];

const blogPosts = [
  {
    id: 1,
    title: "Latest Changes to Canada Express Entry System",
    excerpt: "Learn about the recent updates to the Canada Express Entry system and how they might affect your immigration application.",
    content: "The Express Entry system has undergone significant changes in recent months. The Canadian government has introduced modifications to the Comprehensive Ranking System (CRS) points allocation, giving more weight to French language proficiency and certain types of work experience. These changes aim to address specific labor market needs and promote francophone immigration outside Quebec.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3",
    date: "April 10, 2023",
    category: "Canada Immigration",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Australia Skilled Migration Program Updates",
    excerpt: "Australia has announced changes to its skilled migration program. Find out how these changes could impact your plans to move Down Under.",
    content: "Australia's Department of Home Affairs has recently announced adjustments to the skilled migration points test, with additional points now awarded for certain STEM qualifications and regional study experience. The government has also expanded the occupation lists, adding several new professions to address critical skill shortages in healthcare, technology, and engineering sectors.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3",
    date: "March 25, 2023",
    category: "Australia Migration",
    author: "Michael Zhang"
  },
  {
    id: 3,
    title: "Guide to EU Blue Card Application Process",
    excerpt: "A step-by-step guide to applying for the EU Blue Card, a work permit that allows highly skilled non-EU citizens to work and live in the European Union.",
    content: "The EU Blue Card is designed to attract highly qualified workers to the European Union. This comprehensive guide walks through the application process, from determining eligibility to submitting your application and what to expect during processing. We cover country-specific requirements, documentation needed, salary thresholds, and the rights and benefits that come with holding an EU Blue Card.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3",
    date: "March 15, 2023",
    category: "European Opportunities",
    author: "Elena Petrova"
  },
  {
    id: 4,
    title: "Family Sponsorship in Canada: Common Challenges and Solutions",
    excerpt: "Navigating the family reunification process can be complex. Discover common challenges and practical solutions for a successful sponsorship application.",
    content: "Family sponsorship programs allow Canadian citizens and permanent residents to bring their loved ones to Canada. However, the process can be fraught with challenges, from proving genuine relationships to meeting financial requirements. This article addresses the most common obstacles faced by sponsors and provides practical strategies to overcome them, ensuring a smoother journey to family reunification.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3",
    date: "February 28, 2023",
    category: "Family Sponsorship",
    author: "Maria Rodriguez"
  },
  {
    id: 5,
    title: "Student Pathway to Canadian Permanent Residence",
    excerpt: "How international students can leverage their Canadian education to build a path to permanent residence after graduation.",
    content: "Canada offers one of the most attractive pathways from international student to permanent resident. This comprehensive guide explains how to strategically plan your education and post-graduation work to maximize your chances of becoming a permanent resident. From choosing the right program and institution to navigating the Post-Graduation Work Permit and selecting the optimal immigration program for your profile.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3",
    date: "February 15, 2023",
    category: "Student Visas",
    author: "Rajesh Patel"
  },
  {
    id: 6,
    title: "From Visa Rejection to Successful Migration: A Journey of Persistence",
    excerpt: "Read John's inspiring story of how he overcame an initial visa rejection to successfully immigrate to Australia as a skilled professional.",
    content: "After facing a devastating visa rejection, John didn't give up on his Australian dream. Working with immigration experts, he identified the weaknesses in his application, improved his language scores, gained additional work experience, and reapplied with a strengthened profile. His story demonstrates that setbacks in the immigration journey can be overcome with the right guidance and determination.",
    image: "https://images.unsplash.com/photo-1606503244617-d7d602e6aead?ixlib=rb-4.0.3",
    date: "January 30, 2023",
    category: "Success Stories",
    author: "David Wilson"
  }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    document.title = "Immigration Blog - Global Migration Portal";
  }, []);
  
  // Filter posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Immigration <span className="text-mocha">Blog</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-in">
              Stay informed with the latest immigration news, policy updates, and success stories from around the world.
            </p>
            <div className="relative max-w-2xl mx-auto animate-fade-in">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Search className="absolute top-3.5 left-4 text-white/60" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          {/* Categories */}
          <div className="mb-12 animate-on-scroll">
            <h2 className="text-xl font-bold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-mocha hover:bg-gold/90 text-black" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale transition-all duration-300 animate-on-scroll">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-mocha font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">By {post.author}</span>
                      <Link
                        to="#"
                        className="inline-flex items-center text-mocha font-semibold hover:underline"
                      >
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12 animate-on-scroll">
              <nav aria-label="Page navigation">
                <ul className="flex items-center">
                  <li>
                    <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Previous page">
                      <ChevronRight className="rotate-180" size={20} />
                    </button>
                  </li>
                  <li>
                    <button className="p-2 w-10 h-10 flex items-center justify-center rounded-md bg-mocha text-black font-medium">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="p-2 w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 font-medium">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="p-2 w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 font-medium">
                      3
                    </button>
                  </li>
                  <li>
                    <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Next page">
                      <ChevronRight size={20} />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
