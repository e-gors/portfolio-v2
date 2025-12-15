import React, { useState } from "react";
import EmailIcon from "@icons/EmailIcon";
import PhoneIcon from "@icons/PhoneIcone";
import LocationIcon from "@icons/LocationIcon";
import GradientSphere from "@components/GradientSphere";
import CustomButton from "@components/CustomButton";
import { options, ToastNotification } from "@/utilities/toastUtils";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      ToastNotification("error", "Please fill in all fields!", options);
      return;
    }

    setLoading(true);

    //  Client side
    const mailtoLink = `mailto:goronefren@gmail.com?subject=${encodeURIComponent(
      `Contact from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setLoading(false);
    ToastNotification("success", "Message successfully sent!", options);
  };

  return (
    <section
      id="contact"
      className="w-screen bg-primary relative mx-auto px-4 md:px-10 lg:px-20 py-12 gap-8 md:gap-12 z-1 flex flex-wrap overflow-hidden"
    >
      <div className="left flex-1">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-sm mb-6">
          Feel free to get in touch! Whether you have questions, feedback, or
          just want to say hello, I’d be happy to hear from you. Don't hesitate
          to reach out using the contact information provided below. I’m always
          open to connecting and discussing ideas, so let’s chat!
        </p>

        <div className="flex gap-3 my-3">
          <EmailIcon width={24} height={24} />
          <p className="text-sm">goronefren@gmail.com</p>
        </div>
        <div className="flex gap-3 my-3">
          <PhoneIcon width={24} height={24} />
          <p className="text-sm">+63-936-141-6119</p>
        </div>
        <div className="flex gap-3 my-3">
          <LocationIcon width={24} height={24} />
          <p className="text-sm">
            Purok Lapulapu Brgy. Atabay Hilongos, Leyte, Philippines
          </p>
        </div>
      </div>

      <div className="right flex-1">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={5}
          ></textarea>

          <CustomButton variant="contained" className="w-fit" type="submit">
            {loading ? "Sending..." : "Send Message"}
          </CustomButton>
        </form>
      </div>

      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-1" secondSphere="sphere-4" />
    </section>
  );
}
