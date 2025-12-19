export type LinkProps = {
  name: string;
  href: string;
}

export type TechStackProps = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ExperienceItemProps = {
  title: string;
  company?: string;
  date: string;
  description?: string;
};

export type EducationProps = {
  degree: string;
  school?: string;
  date: string;
  description?: string;
};

export type ProjectProps = {
  page: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export type TestimonialProps = {
  message: string;
  image?: string;
  name: string;
  date: string;
  rating: number;
  role?: string;
};

export type SocialLink = {
  icon: React.ElementType;
  href: string;
  name: string;
}