import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactInfo } from '@/types/resume';

export const ContactHeader: React.FC<ContactInfo> = ({
    name,
    location,
    phone,
    email,
    linkedinUrl,
    githubUrl,
    personalWebsiteUrl
}) => (
    <CardHeader className="p-0 pb-1">
        <CardTitle className="text-3xl font-bold text-center">
            {name}
        </CardTitle>
        <CardContent className="text-center mx-auto p-0">
            <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
                {location} | <a href={`tel:${phone}`} className="hover:underline print:text-inherit">{phone}</a> |
                <a href={`mailto:${email}`} className="hover:underline print:text-inherit">{email}</a> |
                <a href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 inline-flex items-center -mt-[2px]">
                    <Image
                        src="/icons8-linkedin.svg"
                        alt="LinkedIn"
                        width={18}
                        height={18}
                        className="text-white"
                    />
                </a> |
                <a href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 inline-flex items-center -mt-[2px]">
                    <Image
                        src="/GitHub-Logo.wine.svg"
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="text-white"
                    />
                </a>
                {personalWebsiteUrl && (
                    <>
                        | <a href={personalWebsiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 inline-flex items-center">
                            <Globe className="w-4 h-4" />
                        </a>
                    </>
                )}
            </p>
        </CardContent>
    </CardHeader>
); 