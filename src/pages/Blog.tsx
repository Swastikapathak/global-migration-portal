
import { useState, useEffect } from "react";
import { ArrowRight, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  "All Posts",
  "Canada Immigration",
  "Australia Migration",
  "European Opportunities",
  "Student Visas",
  "Family Sponsorship",
  "Immigration Policy",
  "Success Stories",
];

const blogPosts = [
  {
    id: 1,
    title: "Latest Changes to Canada Express Entry System",
    excerpt:
      "Learn about the recent updates to the Canada Express Entry system and how they might affect your immigration application.",
    content:
      "The Express Entry system has undergone significant changes...",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3",
    date: "April 10, 2023",
    category: "Canada Immigration",
    author: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Australia Skilled Migration Program Updates",
    excerpt:
      "Australia has announced changes to its skilled migration program...",
    content:
      "Australia's Department of Home Affairs has recently announced adjustments...",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3",
    date: "March 25, 2023",
    category: "Australia Migration",
    author: "Michael Zhang",
  },
  {
    id: 3,
    title: "Guide to EU Blue Card Application Process",
    excerpt:
      "A step-by-step guide to applying for the EU Blue Card...",
    content:
      "The EU Blue Card is designed to attract highly qualified workers...",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3",
    date: "March 15, 2023",
    category: "European Opportunities",
    author: "Elena Petrova",
  },
  {
    id: 4,
    title: "Family Sponsorship in Canada: Common Challenges",
    excerpt:
      "Navigating the family reunification process can be complex...",
    content:
      "Family sponsorship programs allow Canadian citizens and permanent residents...",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3",
    date: "February 28, 2023",
    category: "Family Sponsorship",
    author: "Maria Rodriguez",
  },
  {
    id: 5,
    title: "Student Pathway to Canadian Permanent Residence",
    excerpt:
      "How international students can leverage their Canadian education...",
    content:
      "Canada offers one of the most attractive pathways from international student...",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3",
    date: "February 15, 2023",
    category: "Student Visas",
    author: "Rajesh Patel",
  },
  {
    id: 6,
    title: "From Visa Rejection to Successful Migration",
    excerpt:
      "Read John's inspiring story of how he overcame a visa rejection...",
    content:
      "After facing a devastating visa rejection, John didn't give up...",
    image:
      "https://images.unsplash.com/photo-1606503244617-d7d602e6aead?ixlib=rb-4.0.3",
    date: "January 30, 2023",
    category: "Success Stories",
    author: "David Wilson",
  },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Immigration Blog - Global Migration Portal";
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Immigration <span className="text-mocha">Blog</span>
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Stay informed with the latest immigration news, policy updates, and success stories from around the world.
            </p>
            <div className="relative max-w-2xl mx-auto">
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
          <div className="mb-12" data-aos="fade-up">
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
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                  data-aos="fade-up"
                >
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
              <div className="col-span-full text-center py-12" data-aos="fade-up">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12" data-aos="fade-up">
              <nav aria-label="Page navigation">
                <ul className="flex items-center">
                  <li>
                    <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Previous page">
                      <ChevronRight className="rotate-180" size={20} />
                    </button>
                  </li>
                  <li>
                    <button className="p-2 w-10 h-10 flex items-center justify-center rounded-md bg-gold text-black font-medium">
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