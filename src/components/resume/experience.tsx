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
                <h3 className="font-semibold text-sm">
                    {title} | {' '}
                    <span className="font-normal text-sm">
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
                    <span className="font-normal text-sm">{location}</span>
                </h3>
            </div>
            <span className="font-semibold shrink-0 text-sm">
                {date}
            </span>
        </div>
        <p className="text-sm">
            {jobSummary}
        </p>
        <ul className="mt-2 space-y-2">
            {description?.map((item, index) => (
                <li key={index} className="text-sm pl-4 relative before:content-['•'] before:absolute before:left-0">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);