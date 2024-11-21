interface TechItemProps {
    description: string[];
}

export const TechItem: React.FC<TechItemProps> = ({
    description
}) => (
    <div>
        <ul className="list-disc list-inside mt-2">
            {description?.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
            ))}
        </ul>
    </div>
);