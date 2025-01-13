import { TechItem } from './tech';
import { Separator } from "@/components/ui/separator";
import { EducationItem } from './education';
import { ContactHeader } from './contactHeader';
import { ExperienceItem } from './experience';
import { Card, CardContent } from "@/components/ui/card";
import { AdditionalInfoItem } from './addtionalInfo';
import React from 'react';
import '@/styles/print.css';


// TODO: Make sure links work in pdf version

export default function ResumePage() {
  return (
    <div className="print:p-0 print:m-0 w-full">
      <Card className="max-w-[8.5in] min-h-[11in] mx-auto my-8 p-2 
        print:w-[8.5in] print:h-[11in] print:m-0 print:p-4 print:overflow-hidden border-none shadow-none">
        <ContactHeader
          name="Faisal Owimer"
          location="Manhattan, NY"
          phone="+1-857-756-5572"
          email="faisal@owimer.co"
          linkedinUrl="https://www.linkedin.com/in/faisal-owimer/"
          githubUrl="https://github.com/Faisalowimer"
        //personalWebsiteUrl="https://owimer.com"
        />

        <CardContent className="space-y-4 print:space-y-3 print:text-[11pt]">
          <section>
            <h2 className="text-base font-semibold mb-1 text-primary">Professional Experience</h2>
            <Separator className="mb-2" />

            <div className="space-y-3">
              <ExperienceItem
                title="Founder & CEO"
                company="Ihsan Tech, Inc."
                companyUrl="https://www.ihsan.tech"
                location="Manhattan, NY"
                jobSummary="Founded a platform connecting Muslim communities with mosques, processing +$19k in donations, supporting community fundraising, events, and streamlining back-office management."
                date="Nov 2024 – Present"
                description={[
                  "Designed and implemented responsive, feature-rich frontend using Next.js, ClerkAuth, React, Zustand, Shadcn, TailwindCSS, and Framer Motion, ensuring seamless user interface and experience",
                  "Built scalable backend and database infrastructure using Docker, Redis caching, and Prisma ORM, with comprehensive RESTful API integrations (Stripe, Clerk, SendGrid, Resend, QuickBooks)",
                ]}
              />

              <ExperienceItem
                title="Software Engineer"
                company="Fractal Tech"
                companyUrl="https://fractalbootcamp.com/"
                location="Brooklyn, NY"
                jobSummary="Transitioned to full-stack development, building production-ready applications through intensive bootcamp training in frontend and backend technologies."
                date="Sep 2024 – Present"
                description={[
                  "Developed a range of applications using TypeScript, Next.js, Vite, React, TanStack, Zod, MagicUI, Firebase, Express, OpenAI, Vercel, Netlify, and AWS",
                  "Automated data scraping, browser workflows, and UI testing with Puppeteer, Storybook, and Vitest for data aggregation, insights, and reducing manual QA",
                ]}
              />

              <ExperienceItem
                title="Product Manager"
                company="Adaptive Investment Solutions"
                companyUrl="https://adaptive-investments.com/app/home"
                location="Manhattan, NY"
                jobSummary="Led product management and business development efforts to raise seed round."
                date="Jun 2020 – May 2024"
                description={[
                  "Spearheaded product discovery and pilot user onboarding, increasing user traction and identifying product-market fit",
                  "Participated in raising $750K in pre-seed and $1M in bridge funding, collaborating with founders on investor pitches",
                  "Developed go-to-market strategy and internal workflows to streamline business operations and product launch",
                ]}
              />

              <ExperienceItem
                title="Business Development Manager"
                company="Saudi Modern Factory"
                companyUrl="https://smf.com.sa/"
                location="Riyadh, Saudi Arabia"
                jobSummary="Directed initiatives to increase market share, launch new products, projects, and enhance brand visibility."
                date="Jun 2016 – Aug 2018"
                description={[
                  "Exceeded annual sales target by 124% (+$1.6M), acquiring 20 new clients and securing $500K in partnerships",
                  "Implemented marketing strategies for website and product catalogs to boost brand visibility and drive sales growth",
                  "Negotiated high-value contracts and cultivated client relationships, contributing to long-term revenue growth",
                ]}
              />
            </div>
          </section>

          {/* <section>
            <h2 className="text-xl font-semibold mb-1">Tech Stack</h2>
            <Separator className="mb-2" />

            <div className="space-y-3">
              <TechItem
                description={[
                  "Core: TypeScript, React, Next.js, Node.js, PostgreSQL",
                  "Libraries/Tools: TailwindCSS, Zustand, Prisma, Docker, Redis",
                  "Infrastructure: AWS, CI/CD, Vercel, REST APIs"
                ]}
              />
            </div>
          </section> */}

          <section>
            <h2 className="text-base font-semibold mb-1">Education</h2>
            <Separator className="mb-2" />

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
            <h2 className="text-base font-semibold mb-1">Additional Information</h2>
            <Separator className="mb-2" />
            <AdditionalInfoItem
              certificates={[
                'CFA Level I',
                'FMVA',
              ]}
              languages={[
                'English (Fluent)',
                'Arabic (Native)'
              ]}
            />
          </section>
        </CardContent>
      </Card>
    </div>
  );
};