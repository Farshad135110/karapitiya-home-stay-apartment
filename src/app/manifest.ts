export default function manifest() {
  return {
    name: "Karapitiya Home Stay Apartment",
    short_name: "Karapitiya Stay",
    description:
      "5★ Airbnb Superhost accommodation in Galle, Sri Lanka - Perfect for travelers, families, students, and professionals",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066cc",
    orientation: "portrait-primary",
    icons: [
      {
        src: "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: [
      "accommodation",
      "hospitality",
      "lodging",
      "vacation rentals",
      "long-stay",
    ],
    lang: "en-US",
    dir: "ltr",
    scope: "/",
  };
}
