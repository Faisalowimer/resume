import React from 'react';
import Image from 'next/image';
import { CardHeader, CardTitle } from "@/components/ui/card";

interface ContactHeaderProps {
    name: string;
    location: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
}

export const ContactHeader: React.FC<ContactHeaderProps> = ({
    name,
    location,
    phone,
    email,
    linkedinUrl,
    githubUrl
}) => (
    <CardHeader className="py-2">
        <CardTitle className="text-3xl font-bold">
            {name}
        </CardTitle>
        <p className="text-muted-foreground flex items-center gap-1">
            {location} | {phone} |
            <a href={`mailto:${email}`} className="hover:underline">{email}</a> |
            <a href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-80 inline-flex items-center">
                <Image
                    src="/icons8-linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="text-white"
                />
            </a> |
            <a href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-80 inline-flex items-center">
                <Image
                    src="/GitHub-Logo.wine.svg"
                    alt="GitHub"
                    width={36}
                    height={36}
                    className="text-white"
                />
            </a>
        </p>
    </CardHeader>
); 