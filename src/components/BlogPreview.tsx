
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Latest Changes to Canada Express Entry System",
    excerpt: "Learn about the recent updates to the Canada Express Entry system and how they might affect your immigration application.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3",
    date: "April 10, 2023",
    category: "Canada Immigration"
  },
  {
    id: 2,
    title: "Australia Skilled Migration Program Updates",
    excerpt: "Australia has announced changes to its skilled migration program. Find out how these changes could impact your plans to move Down Under.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3",
    date: "March 25, 2023",
    category: "Australia Migration"
  },
  {
    id: 3,
    title: "Guide to EU Blue Card Application Process",
    excerpt: "A step-by-step guide to applying for the EU Blue Card, a work permit that allows highly skilled non-EU citizens to work and live in the European Union.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3",
    date: "March 15, 2023",
    category: "European Immigration"
  }
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading animate-on-scroll">
          Latest <span className="text-mocha">Updates</span>
        </h2>
        <p className="section-subheading animate-on-scroll">
          Stay informed with the latest immigration news, policy changes, and success stories from around the world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="animate-on-scroll">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover-scale h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-mocha font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center font-semibold text-mocha hover:underline mt-auto"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center py-3 px-6 rounded-full border-2 border-mocha text-black font-semibold hover:bg-gold hover:text-black transition-colors duration-300"
          >
            View All Articles <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
