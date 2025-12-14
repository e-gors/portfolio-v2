export type TechStackProps = {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type ExperienceItemProps = {
    title: string;
    company?: string;
    date: string;
    description?: string;
}

export type EducationProps = {
    degree: string;
    school?: string;
    date: string;
    description?: string;
}