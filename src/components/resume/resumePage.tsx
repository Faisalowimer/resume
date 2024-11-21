import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

import { Separator } from "@/components/ui/separator";
import { AdditionalInfoItem } from './addtionalInfo';
import { TechItem } from './tech';
import { EducationItem } from './education';
import { ExperienceItem } from './experience';
import { ContactHeader } from './contactHeader';

export default function ResumePage() {
  return (
    <Card className="max-w-4xl mx-auto my-8 p-8 rounded-none">
      <ContactHeader
        name="Faisal Owimer"
        location="Manhattan, NY"
        phone="857-756-5572"
        email="faisal@owimer.co"
        linkedinUrl="https://www.linkedin.com/in/faisal-owimer/"
        githubUrl="https://github.com/Faisalowimer"
      />

      <CardContent className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
          <Separator className="mb-4" />

          <div className="space-y-4">

            <ExperienceItem
              title="Founder & CEO"
              company="Ihsan Tech, Inc."
              companyUrl="https://www.ihsan.tech"
              location="Manhattan, NY"
              jobSummary="Developed a platform connecting Muslim communities with Mosques across the US, enabling seamless donations, efficient back-office management, and support for community events."
              date="Dec 2023 – Present"
              description={[
                "Led the development and design for a secure, user-friendly platform to streamline donor engagement and manage donations efficiently",
                "Integrated Stripe for secure payment processing, onboarded first paying user, and processed over $13k in donations"
              ]}
            />

            <ExperienceItem
              title="Full stack Developer"
              company="Fractal Tech"
              companyUrl="https://fractalbootcamp.com/"
              location="Brooklyn, NY"
              jobSummary="Built multiple full-stack applications. "
              date="Sep 2024 – Dec 2024"
              description={[
                "Developed a range of full stack applications using React, TypeScript, TailwindCSS, Storybook, Clerk, Web Sockets, Express, Prisma, & PostgreSQL with CRUD functionality and user authentication",
                "Ongoing projects include Survey App, Movie App, Discord Chatbot, Battleship game, Custom Go scripting for automated project setup, web scraping, & personal website"
              ]}
            />

            <ExperienceItem
              title="Operations & Strategy"
              company="Adaptive Investment Solutions"
              companyUrl="https://adaptive-investments.com/app/home"
              location="Manhattan, NY"
              jobSummary="Led business development efforts to launch Beta and raise Seed Round."
              date="Jun 2020 – May 2024"
              description={[
                "Led product launch for public tools to increase user traction, managed feature & product rollouts, conducted user product discovery to onboard pilot users and identify product-market fit",
                "Participated in fundraising and prepared pitch deck, raising $150K in convertible notes for the pre-seed round, and $1m bridge round",
                "Executed business development strategy, built internal workflows, and developed a go-to-market plan",
                "Conducted in-depth market research, analyzing retail equity investor behaviors and recommending business opportunities focused on Financial Advisors and Target-Date Funds"
              ]}
            />

            <ExperienceItem
              title="Business Development Manager"
              company="Saudi Modern Factory"
              companyUrl="https://smf.com.sa/"
              location="Riyadh, Saudi Arabia"
              jobSummary={`Achieved 124% of the annual sales target, generating over $1.6M in revenue,
                 while securing 20+ new client accounts. Negotiated three
                  partnerships worth $500K, including a dealership agreement with Haworth Saudi Arabia. 
                  Developed marketing strategies for the company’s website, product catalogs,
                   and specifications, boosting brand visibility.`}
              date="Jun 2016 – Aug 2018"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <Separator className="mb-4" />

          <div className="space-y-4">
            <TechItem
              description={[
                "Frontend: React, Zustand, Shadcn, Tailwind CSS, Vite, Framer Motion, ",
                "Backend: Node.js, Express, Docker, Python, Zod",
                "Full-Stack & Auth: Next.js, Clerk, Firebase",
                "Scripting and Testing: Puppeteer, Storybook, Vitest",
                "Databases: PostgreSQL, Prisma, Redis",
                "APIs: RESTful, WebSockets, OpenAI, Anthropic, SendGrid, Stripe, Quickbooks",
                "Deployment: Netlify, Vercel, AWS S3, AWS EC2",
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <Separator className="mb-4" />

          <div className="space-y-2">
            <EducationItem
              degree="Master of Science in Finance"
              school="Hult International Business School"
              location="Boston, MA"
              date="Mar 2020"
              gpa="3.83/4.00"
              honors="Dean's List"
            />

            <EducationItem
              degree="Master of Science in International Business"
              school="Hult International Business School"
              location="Boston, MA"
              date="Aug 2019"
              gpa="3.5/4.00"
            />

            <EducationItem
              degree="Bachelor of Science in Business Administration, Finance Major "
              school="Alfaisal University"
              location="Riyadh, Saudi Arabia"
              date="Jan 2016"
              gpa="3.83/4.00"
              honors="Dean's List"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
          <Separator className="mb-4" />
          <AdditionalInfoItem
            certificates={[
              'Passed CFA Level One Exam',
              'Financial Modeling & Valuation Analyst (FMVA) from CFI'
            ]}
            languages={[
              'English (Fluent)',
              'Arabic (Native)'
            ]}
          />
        </section>
      </CardContent>
    </Card>
  );
};






