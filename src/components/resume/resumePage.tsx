'use client';

//import { TechItem } from './tech';
import { Separator } from "@/components/ui/separator";
import { resumeData } from '@/data/resume';
import { EducationItem } from './education';
import { ContactHeader } from './contactHeader';
import { ExperienceItem } from './experience';
import { Card, CardContent } from "@/components/ui/card";
//import { AdditionalInfoItem } from './addtionalInfo';
import React from 'react';
import '@/styles/print.css';

export function ResumePage() {
  return (
    <div className="min-h-screen w-full py-4 px-4 md:py-8 md:px-0 print:p-0 print:bg-white">
      <Card className="resume-container w-full md:w-[8.5in] min-h-[11in] mx-auto bg-white border border-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
        print:w-[8.5in] print:h-[11in] print:m-0 print:shadow-none print:border-none print:bg-white">
        <div className="p-3 md:p-[0.35in] print:p-[0.35in]">
          <ContactHeader {...resumeData.contact} />

          <CardContent className="mt-1 space-y-4 print:space-y-2 print:text-[10.5pt] px-0">
            <section>
              <h2 className="text-base font-semibold mb-1 text-primary">Experience</h2>
              <Separator className="mb-2 print:border-t-[1.5px] print:border-black" />

              <div className="space-y-4 print:space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <ExperienceItem key={index} {...exp} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-1">Education</h2>
              <Separator className="mb-2 print:border-t-[1.5px] print:border-black" />

              <div className="space-y-1 print:space-y-2">
                {resumeData.education.map((edu, index) => (
                  <EducationItem key={index} {...edu} />
                ))}
              </div>
            </section>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};