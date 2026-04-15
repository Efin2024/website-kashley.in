import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "I was completely amazed by the quality of the service! They clearly use top-tier tools. The staff was very polite and catered to all our needs. Will definitely use their services again!",
    name: "Aarav Sharma",
    designation: "Technology Blogger",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote:
      "This platform has completely transformed how my team operates. It's incredibly user-friendly and the performance is unmatched. An absolute lifesaver for our business.",
    name: "Priya Desai",
    designation: "Product Manager",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote:
      "A truly exceptional experience from start to finish. The attention to detail and customer support are outstanding. I highly recommend them to anyone looking for premium service.",
    name: "Rohan Kapoor",
    designation: "Entrepreneur",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1368&auto=format&fit=crop"
  },
];

export const CircularTestimonialsDemo = () => (
  <section>
    {/* Light testimonials section */}
    <div className="bg-[#f7f7fa] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>

    {/* Dark testimonials section */}
    <div className="bg-[#060507] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#0582CA",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);
