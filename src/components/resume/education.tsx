import { EducationType } from '@/types/resume';

export const EducationItem: React.FC<EducationType> = ({
    degree,
    school,
    location,
    date,
    gpa,
    honors
}) => (
    <div>
        <div className="flex justify-between items-start mb-2">
            <div className="flex-1 pr-4">
                <h3 className="text-sm font-medium">{degree}</h3>
                <p className="text-sm text-muted-foreground">{school} | {location} {gpa && `| GPA: ${gpa}`} {honors && `| ${honors}`}</p>
            </div>
            <span className="text-sm font-semibold shrink-0">
                {date}
            </span>
        </div>
    </div>
);