interface ExperienceItemProps {
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    jobSummary: string;
    date: string;
    description?: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
    title,
    company,
    companyUrl,
    location,
    jobSummary,
    date,
    description
}) => (
    <div>
        <div className="flex justify-between items-start mb-2">
            <div className="flex-1 pr-4">
                <h3 className="font-semibold">
                    {title} | {' '}
                    <span className="font-normal">
                        {companyUrl ? (
                            <a
                                href={companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {company}
                            </a>
                        ) : (
                            company
                        )}
                    </span> |{' '}
                    <span className="font-normal">{location}</span>
                </h3>
            </div>
            <span className="font-semibold shrink-0">
                {date}
            </span>
        </div>
        <p className="text-sm">
            {jobSummary}
        </p>
        <ul className="list-disc list-inside mt-2">
            {description?.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
            ))}
        </ul>
    </div>
);