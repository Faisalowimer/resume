import { EducationType } from '@/types/resume';

export const EducationItem: React.FC<EducationType> = ({ degrees, school, location }) => (
    <div className="mt-2 first:mt-0 print:mt-1">
        {degrees.map((degree, index) => (
            <div key={index} className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                    <h3 className="text-sm font-medium">
                        {degree.name}
                        {degree.honors && <span className="text-muted-foreground font-normal"> | {degree.honors}</span>}
                        {degree.gpa && <span className="text-muted-foreground font-normal"> | GPA: {degree.gpa}</span>}
                    </h3>
                </div>
                <span className="text-sm font-semibold shrink-0">{degree.date}</span>
            </div>
        ))}
        <p className="text-sm text-muted-foreground">{school} | {location}</p>
    </div>
);
