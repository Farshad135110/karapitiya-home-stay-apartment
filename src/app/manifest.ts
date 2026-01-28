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
        src: "https://res.cloudinary.com/dokpye7fu/image/upload/v1769532272/a-modern-logo-design-featuring-the-elega_FIS1hqn2Q3O9NVIE91Pddw_df5pGb6SRIyiymvL62iPGA_ygq8sx.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any maskable",
      },
      {
        src: "https://res.cloudinary.com/dokpye7fu/image/upload/v1769532272/a-modern-logo-design-featuring-the-elega_FIS1hqn2Q3O9NVIE91Pddw_df5pGb6SRIyiymvL62iPGA_ygq8sx.jpg",
        sizes: "512x512",
        type: "image/jpeg",
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
