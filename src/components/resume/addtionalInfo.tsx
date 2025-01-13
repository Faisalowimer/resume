interface AdditionalInfoItemProps {
    certificates: string[];
    languages: string[];
}

export const AdditionalInfoItem: React.FC<AdditionalInfoItemProps> = ({
    certificates,
    languages
}) => (
    <div className="space-y-1">
        <p className="text-sm">
            <strong>Certificates:</strong> {certificates.join(', ')}
        </p>
        <p className="text-sm">
            <strong>Languages:</strong> {languages.join(', ')}
        </p>
    </div>
);