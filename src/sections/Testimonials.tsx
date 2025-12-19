import TitleHeader from "@components/TitleHeader";
import GradientSphere from "@components/GradientSphere";
import TestimonialCard from "@components/TestimonialCard";
import { testimonials as staticTestimonials } from "@constants/constants";
import CustomButton from "@components/CustomButton";
import BaseModal from "@/components/BaseModal";
import { useEffect, useState } from "react";
import ProfileImageUpload from "@/components/ProfileImageUpload";
import DefaultPerson from "@images/boy.png";
import StarRating from "@/components/StarRating";
import supabase from "@/config/supabase-client";
import { convertDate, getAvatar, getErrorMessage } from "@/utilities";
import { options, ToastNotification } from "@/utilities/toastUtils";

interface FeedbackProps {
  first_name: string;
  last_name: string;
  feedback: string;
  rating: number;
  image_url?: string | null;
  created_at: string;
}

export default function Testimonials() {
  // UI States
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Data States
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([]);
  const [publicImagePath, setPublicImagePath] = useState(""); // Stores path for DB
  const [newFeedback, setNewFeedback] = useState({
    first_name: "",
    last_name: "",
    feedback: "",
    rating: 0,
    image_url: "", // Stores full URL for preview
  });

  // 1. Fetch Feedbacks from Supabase
  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .not("published", "is", null) // filter with published
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (data) {
        const formattedData = data.map((item: FeedbackProps) => ({
          first_name: item.first_name,
          last_name: item.last_name,
          feedback: item.feedback,
          rating: item.rating,
          image_url: item.image_url,
          created_at: item.created_at,
        }));
        setFeedbacks(formattedData);
      }
    } catch (error: unknown) {
      ToastNotification("error", getErrorMessage(error), options);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchFeedbacks();

    return () => {
      controller.abort();
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileChange = async (file: File | null) => {
    if (!file) return;

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
      const filePath = `profiles/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("portfolio")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get Public URL for the UI Preview
      const {
        data: { publicUrl },
      } = supabase.storage.from("portfolio").getPublicUrl(filePath);

      setNewFeedback((p) => ({ ...p, image_url: publicUrl }));
      setPublicImagePath(filePath); // Store the "key" for the database
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Upload failed";
      ToastNotification("error", msg, options);
    }
  };

  // 4. Submit Feedback to Database
  const handleSubmit = async () => {
    if (!newFeedback.first_name || !newFeedback.feedback) {
      ToastNotification(
        "error",
        "Please fill in the required fields.",
        options
      );

      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("testimonials").insert([
        {
          first_name: newFeedback.first_name,
          last_name: newFeedback.last_name,
          feedback: newFeedback.feedback,
          rating: newFeedback.rating,
          image_url: publicImagePath, // Saving the path only
        },
      ]);

      if (error) throw error;

      // Success Logic
      setOpen(false);
      setNewFeedback({
        first_name: "",
        last_name: "",
        feedback: "",
        rating: 0,
        image_url: "",
      });
      ToastNotification(
        "success",
        "Thanks! Your feedback has been submitted for review.",
        options
      );

      setPublicImagePath("");
      fetchFeedbacks(); // Refresh the list
    } catch (error: unknown) {
        ToastNotification(
        "error",
        getErrorMessage(error),
        options
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BaseModal
        isOpen={open}
        title="What can you say about me?"
        onClose={() => setOpen(false)}
        buttons={[
          {
            label: "Cancel",
            variant: "secondary",
            onClick: () => setOpen(false),
          },
          {
            label: isSubmitting ? "Submitting..." : "Submit",
            variant: "primary",
            disabled: isSubmitting,
            onClick: handleSubmit,
          },
        ]}
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="border-b border-white/10 pb-8">
            <div className="text-center sm:text-left">
              <h2 className="text-base font-semibold text-white">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Your feedback is truly appreciated.
              </p>
            </div>

            {/* Profile Upload Section */}
            <div className="mt-8 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-start sm:gap-x-8">
              <ProfileImageUpload
                value={newFeedback.image_url}
                onChange={handleProfileChange}
                placeholder={DefaultPerson}
              />
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-white">Profile Photo</p>
                <p className="text-xs text-gray-500">
                  JPG, GIF or PNG. 5MB max.
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white">
                  First name
                </label>
                <input
                  name="first_name"
                  type="text"
                  value={newFeedback.first_name}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-white/10 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white">
                  Last name
                </label>
                <input
                  name="last_name"
                  type="text"
                  value={newFeedback.last_name}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-white/10 focus:outline-indigo-500"
                />
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-white mb-2">
                  Your Rating
                </label>
                <StarRating
                  value={newFeedback.rating}
                  onChange={(val) =>
                    setNewFeedback((p) => ({ ...p, rating: val }))
                  }
                  size={32}
                />
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  Feedback
                </label>
                <textarea
                  name="feedback"
                  rows={4}
                  value={newFeedback.feedback}
                  onChange={handleInputChange}
                  placeholder="What did you think about the experience?"
                  className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-white/10 focus:outline-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </BaseModal>

      <section
        id="testimonials"
        className="w-screen relative mx-auto px-4 md:px-10 lg:px-20 py-12"
      >
        <TitleHeader title="Testimonials" number="04" />

        <div className="content grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="testimonial-card p-0 lg:p-3">
            <h2 className="text-2xl font-bold mb-1">
              Hear what they say about me?
            </h2>
            <h3 className="text-base font-semibold text-gray-400">
              Your feedback helps me grow. Feel free to add yours if we've
              collaborated recently.
            </h3>
            <div className="flex flex-wrap flex-row mt-6 gap-x-4">
              <CustomButton variant="contained" onClick={() => setOpen(true)}>
                Write a Feedback
              </CustomButton>
              <CustomButton variant="outlined">Edit My Feedback</CustomButton>
            </div>
          </div>

          {/* 1. Show dynamic feedbacks from Supabase */}
          {!isLoading &&
            feedbacks.map((feed, index) => (
              <TestimonialCard
                key={`db-${index}`}
                message={feed.feedback}
                name={`${feed.first_name} ${feed.last_name}`}
                rating={feed.rating}
                date={convertDate(feed.created_at)}
                image={getAvatar(feed.image_url)}
              />
            ))}

          {/* 2. Show static/default testimonials if DB is empty */}
          {!isLoading &&
            feedbacks.length === 0 &&
            staticTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`static-${index}`} {...testimonial} />
            ))}

          {/* 3. Loading State */}
          {isLoading && (
            <p className="text-white animate-pulse">Loading testimonials...</p>
          )}
        </div>

        <GradientSphere firstSphere="sphere-3" secondSphere="sphere-4" />
      </section>
    </>
  );
}
