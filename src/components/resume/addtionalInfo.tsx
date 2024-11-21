interface AdditionalInfoItemProps {
    certificates: string[];
    languages: string[];
}

export const AdditionalInfoItem: React.FC<AdditionalInfoItemProps> = ({
    certificates,
    languages
}) => (
    <div className="space-y-1">
        <p className="">
            <strong>Certificates:</strong> {certificates.join(', ')}
        </p>
        <p className="">
            <strong>Languages:</strong> {languages.join(', ')}
        </p>
    </div>
);