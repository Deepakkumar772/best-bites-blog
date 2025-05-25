import React, { useState } from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Replace with API/CMS calls in production
const blogPosts = [
  {
    title: "Best Pizza in Town",
    image: "/pizza.jpg",
    description: "We visited 5 top-rated pizza spots and ranked them.",
    link: "#"
  },
  {
    title: "Top 5 Sushi Places",
    image: "/sushi.jpg",
    description: "Sushi lovers rejoice: here are our favorites!",
    link: "#"
  },
  {
    title: "Affordable Fine Dining",
    image: "/fine-dining.jpg",
    description: "Luxury on a budget – these places deliver.",
    link: "#"
  },
];

const trendingTags = [
  "Pizza", "Sushi", "Fine Dining", "Vegan", "Brunch", "Desserts", "Family Friendly", "Takeout"
];

const recentReviews = [
  { title: "Noodle House Review", link: "#" },
  { title: "Hidden Gem: Tacos Locos", link: "#" },
  { title: "Vegan Eats Downtown", link: "#" },
];

const comments = [
  { user: "Alice", text: "Great post!", date: "2025-05-24" },
  { user: "Bob", text: "Love your reviews!", date: "2025-05-23" },
];

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!newsletterEmail.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      setNewsletterMsg("Please enter a valid email.");
      return;
    }
    setNewsletterMsg("Thanks for subscribing!");
    setNewsletterEmail("");
    // TODO: Integrate real provider
  }

  // Placeholder for authentication (connect to real provider)
  const user = null;

  return (
    <>
      {/* SEO & Social Meta */}
      <Head>
        <title>Best Bites Blog | Real Restaurant Reviews & Foodie Finds</title>
        <meta name="description" content="Honest restaurant reviews, trending food spots, and must-try eats in your city. Monetized with ads & affiliate links." />
        <meta property="og:title" content="Best Bites Blog" />
        <meta property="og:description" content="Find your next meal with our top restaurant reviews, tips, and guides." />
        <meta property="og:image" content="/featured.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@bestbites"/>
        {/* Analytics placeholder */}
        {/* <script async src="https://analytics.example.com/script.js"></script> */}
      </Head>

      <div className="p-4 max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center py-4 border-b gap-2">
          <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Best Bites Blog</h1>
          <nav className="space-x-4 text-base font-medium">
            <a href="#" className="hover:underline focus:underline">Home</a>
            <a href="#" className="hover:underline focus:underline">Blog</a>
            <a href="#" className="hover:underline focus:underline">About</a>
            <a href="#" className="hover:underline focus:underline">Contact</a>
          </nav>
        </header>

        {/* Social & Trending */}
        <div className="flex flex-col md:flex-row justify-between items-center my-4 gap-4">
          <div className="flex gap-3">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/facebook.svg" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="/twitter.svg" alt="Twitter" className="h-6 w-6" />
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-semibold text-sm text-gray-500">Trending:</span>
            {trendingTags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded hover:bg-blue-100 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Responsive grid: sidebar + main */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="col-span-1 lg:col-span-3">
            {/* Newsletter Signup */}
            <section aria-label="Newsletter signup" className="bg-yellow-50 border border-yellow-200 rounded p-6 my-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="font-semibold text-lg mb-1">🍔 Join Our Foodie Newsletter!</h2>
                <p className="text-gray-700 text-sm">Get delicious reviews, exclusive deals, and new posts direct to your inbox.</p>
                {newsletterMsg && <div className="text-green-600 mt-1">{newsletterMsg}</div>}
              </div>
              <form className="flex gap-2 w-full md:w-auto" onSubmit={handleNewsletter} aria-label="Subscribe to newsletter">
                <Input
                  type="email"
                  placeholder="Your email"
                  required
                  aria-label="Email address"
                  className="max-w-xs"
                  autoComplete="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <Button type="submit" variant="default" aria-label="Subscribe">
                  Subscribe
                </Button>
              </form>
            </section>

            {/* Featured Review */}
            <section className="relative my-6 rounded-lg overflow-hidden shadow-lg" aria-label="Featured restaurant">
              <img src="/featured.jpg" alt="Featured Restaurant" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-white font-bold text-2xl mb-2">Featured: Mama Mia's Italian Kitchen</h2>
                <p className="text-gray-200 text-sm mb-2">
                  The best homemade pasta in the city and a cozy ambiance. Read our full review!
                </p>
                <Button variant="secondary" className="w-fit" aria-label="Discover featured review">
                  Discover &rarr;
                </Button>
              </div>
            </section>

            {/* Search */}
            <section className="my-6" aria-label="Search restaurants or cuisine">
              <div className="relative w-full max-w-md">
                <Input placeholder="Search restaurants or cuisine..." className="pr-10" aria-label="Search" />
                <Search className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </section>

            {/* Google AdSense Placeholder */}
            <div className="my-8">
              <div className="bg-gray-100 text-center text-sm p-4 rounded" role="banner" aria-label="Ad banner">
                <p className="text-gray-600">[Google AdSense Banner Placeholder]</p>
              </div>
            </div>

            {/* Blog Posts */}
            <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" aria-label="Blog posts">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition focus-within:ring-2 focus-within:ring-blue-400"
                  tabIndex={0}
                  aria-label={`Blog post: ${post.title}`}
                >
                  <img src={post.image} alt={post.title} className="rounded-t-2xl w-full h-40 object-cover" />
                  <CardContent className="p-4">
                    <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-600">{post.description}</p>
                    <div className="mt-4">
                      <a href={post.link} tabIndex={0}>
                        <Button variant="link" className="text-blue-600" aria-label={`Read more about ${post.title}`}>
                          Read More &rarr;
                        </Button>
                      </a>
                    </div>
                    {/* Ad or affiliate block */}
                    <div className="mt-4">
                      <a
                        href="https://www.amazon.com/s?k=restaurant+gadgets&tag=your-affiliate-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-yellow-100 p-2 rounded text-center text-sm text-yellow-900 hover:bg-yellow-200 transition"
                        aria-label="Check out restaurant gadgets on Amazon (affiliate link)"
                      >
                        🍽️ Check out must-have restaurant gadgets on Amazon!
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* OpenTable Affiliate */}
            <div className="my-8">
              <div className="bg-blue-50 p-4 rounded text-center">
                <a
                  href="https://www.opentable.com/?affiliate-id=your-affiliate-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-bold hover:underline"
                  aria-label="Book your meal with OpenTable (affiliate link)"
                >
                  🍷 Book your next meal with OpenTable and support us!
                </a>
              </div>
            </div>

            {/* Comments Section */}
            <section className="my-10" aria-label="Comments">
              <h3 className="font-semibold text-lg mb-4 text-blue-900">Comments</h3>
              <ul className="space-y-2">
                {comments.map((c, idx) => (
                  <li key={idx} className="rounded bg-gray-50 px-3 py-2">
                    <span className="font-bold">{c.user}</span>{" "}
                    <span className="text-xs text-gray-400">{c.date}</span>
                    <div className="ml-1">{c.text}</div>
                  </li>
                ))}
              </ul>
              {!user && (
                <div className="text-sm text-gray-500 mt-4">
                  <a href="/login" className="underline text-blue-600">Sign in</a> to join the conversation!
                </div>
              )}
              {/* TODO: Authenticated user comment form */}
            </section>
          </main>

          {/* Sidebar */}
          <aside className="col-span-1 space-y-8 mt-6 lg:mt-0" aria-label="Sidebar">
            {/* Recent Reviews */}
            <section aria-label="Recent reviews">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Recent Reviews</h3>
              <ul className="space-y-2">
                {recentReviews.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.link}
                      className="text-blue-700 hover:underline"
                      aria-label={`Read review: ${item.title}`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            {/* Instagram Feed Placeholder */}
            <section aria-label="Instagram feed">
              <h3 className="font-semibold text-lg mb-2 text-pink-800">Instagram Feed</h3>
              <div className="grid grid-cols-3 gap-1">
                <img src="/ig1.jpg" alt="" className="w-full h-16 object-cover rounded" />
                <img src="/ig2.jpg" alt="" className="w-full h-16 object-cover rounded" />
                <img src="/ig3.jpg" alt="" className="w-full h-16 object-cover rounded" />
              </div>
              <a
                href="https://instagram.com/"
                className="block mt-2 text-pink-600 text-xs hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                Follow us @bestbitesblog
              </a>
            </section>
            {/* Monetization Partner */}
            <section aria-label="Partner spot">
              <div className="bg-green-50 p-3 rounded text-center">
                <a
                  href="https://www.doordash.com/?affiliate-id=your-affiliate-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 font-bold hover:underline"
                  aria-label="Order food delivery with DoorDash (affiliate link)"
                >
                  🚗 Hungry? Order delivery with DoorDash!
                </a>
              </div>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 text-center text-sm text-gray-500 space-y-2">
          <div>
            &copy; 2025 Best Bites Blog. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="underline">Privacy Policy</a>
          </div>
          <div>
            Made with <span aria-label="love" role="img">❤️</span> by the Best Bites team.
          </div>
        </footer>
      </div>
    </>
  );
}