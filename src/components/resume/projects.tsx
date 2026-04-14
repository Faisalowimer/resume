import { ProjectsSectionType } from '@/types/resume';

export const ProjectsSection: React.FC<ProjectsSectionType> = ({ summary, items }) => (
    <div>
        <p className="text-sm mb-2">{summary}</p>
        <div className="space-y-1">
            {items.map((item, index) => (
                <div key={index} className="text-sm pl-4 relative before:content-['•'] before:absolute before:left-0">
                    {item.url ? (
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline print:text-inherit text-blue-500 underline"
                        >
                            {item.name}
                        </a>
                    ) : (
                        <span className="font-semibold">{item.name}</span>
                    )}
                    {' — '}{item.description}
                </div>
            ))}
        </div>
    </div>
);
