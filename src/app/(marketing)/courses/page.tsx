import CourseGrid from "@/components/sections/CourseGrid";
import CoursesHero from "@/components/sections/CoursesHero";
import EnrollmentForm from "@/components/sections/EnrollmentForm";
import StudentFeedback from "@/components/sections/StudentFeedback";
import Image from "next/image";

const COURSES = [
  {
    title: "Data Science & ML Batch 1",
    description:
      "Master predictive modeling, statistical analysis, and neural architecture search using industry-standard frameworks.",
    duration: "12 Weeks",
    price: "$1,499",
    image: "/images/ds-ml.jpg", // Ensure these exist in /public/images/
    active: true,
  },
  {
    title: "Generative CAD Modeling",
    description:
      "Leverage generative design algorithms to optimize mechanical structures for strength and weight reduction.",
    duration: "8 Weeks",
    price: "$999",
    image: "/images/cad.jpg",
    active: false,
  },
  {
    title: "Embedded AI Systems",
    description:
      "Deploy lightweight ML models on edge devices, microcontrollers, and FPGA architectures for real-time inference.",
    duration: "10 Weeks",
    price: "$1,200",
    image: "/images/embedded.jpg",
    active: true,
  },
];

export default function CoursesPage() {
  return (
    <div>
      <CoursesHero />
      <CourseGrid />
      <StudentFeedback />
      <EnrollmentForm />
    </div>
  );
}
