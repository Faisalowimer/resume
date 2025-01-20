import { ResumeData } from "@/types/resume";

function calculateDonationAmount(): string {
    // Base amount from January 2024
    const baseAmount = 18362;
    const monthlyIncrease = 1000;

    // Define the amounts for each month
    const monthlyAmounts = {
        '2024-01': baseAmount,                    // 18,362
        '2024-02': baseAmount + monthlyIncrease,  // 19,362
        '2024-03': baseAmount + monthlyIncrease * 2,  // 20,362
        '2024-04': baseAmount + monthlyIncrease * 3,  // 21,362
        '2024-05': baseAmount + monthlyIncrease * 4,  // 22,362
        '2024-06': baseAmount + monthlyIncrease * 5,  // 23,362
        '2024-07': baseAmount + monthlyIncrease * 6,  // 24,362
        '2024-08': baseAmount + monthlyIncrease * 7,  // 25,362
        '2024-09': baseAmount + monthlyIncrease * 8,  // 26,362
        '2024-10': baseAmount + monthlyIncrease * 9,  // 27,362
        '2024-11': baseAmount + monthlyIncrease * 10,  // 28,362
        '2024-12': baseAmount + monthlyIncrease * 11,  // 29,362
    };

    // Get current month in YYYY-MM format
    const currentDate = new Date();
    const currentMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

    // Get the amount for the current month, defaulting to January if not found
    const amount = monthlyAmounts[currentMonth as keyof typeof monthlyAmounts] || baseAmount;

    // Round to nearest thousand and format
    const roundedThousands = Math.ceil(amount / 1000);
    return `+${roundedThousands}k`;
}

export const resumeData: ResumeData = {
    contact: {
        name: "Faisal Owimer",
        location: "New York, NY",
        phone: "+1-857-756-5572",
        email: "faisal@owimer.co",
        linkedinUrl: "https://www.linkedin.com/in/faisal-owimer/",
        githubUrl: "https://github.com/Faisalowimer",
        // personalWebsiteUrl: "https://owimer.co"
    },
    experience: [
        {
            title: "Founder",
            company: "Ihsan Tech, Inc.",
            companyUrl: "https://www.ihsan.tech",
            location: "Manhattan, NY",
            jobSummary: `Founded a platform connecting Muslim communities with mosques, processing ${calculateDonationAmount()} in donations, supporting community fundraising, events, and streamlining back-office management.`,
            date: "Nov 2024 – Present",
            description: [
                "Designed and implemented responsive, feature-rich frontend using Next.js, ClerkAuth, React, Zustand, Shadcn, TailwindCSS, and Framer Motion, ensuring seamless user interface and experience",
                "Built scalable backend and database infrastructure using Docker, Redis caching, and Prisma ORM, with comprehensive RESTful API integrations (Stripe, Clerk, SendGrid, Resend, QuickBooks)",
            ]
        },
        {
            title: "Software Engineer",
            company: "Fractal Tech",
            companyUrl: "https://fractalbootcamp.com/",
            location: "Brooklyn, NY",
            jobSummary: "Transitioned to full-stack development, building production-ready applications through intensive bootcamp training in frontend and backend technologies with 1000+ commits and 300+ PRs with >860 hours hands on keyboard.",
            date: "Sep 2024 – Present",
            description: [
                "Developed a range of applications using TypeScript, Next.js, Vite, React, TanStack, Zod, MagicUI, Firebase, Express, WebSocket, OpenAI, Vercel, Netlify, and AWS",
                "Automated data scraping, browser workflows, and UI testing with Puppeteer, Storybook, and Vitest for data aggregation, insights, and reducing manual QA",
            ]
        },
        {
            title: "Product Manager",
            company: "Adaptive Investment Solutions",
            companyUrl: "https://adaptive-investments.com/app/home",
            location: "Manhattan, NY",
            jobSummary: "Led product management and business development efforts to raise seed round.",
            date: "Jun 2020 – May 2024",
            description: [
                "Spearheaded product discovery and pilot user onboarding, increasing user traction and identifying product-market fit",
                "Participated in raising $750K in pre-seed and $1M in bridge funding, collaborating with founders on investor pitches",
                "Developed go-to-market strategy and internal workflows to streamline business operations and product launch",
            ]
        },
        {
            title: "Business Development Manager",
            company: "Saudi Modern Factory",
            companyUrl: "https://smf.com.sa/",
            location: "Riyadh, Saudi Arabia",
            jobSummary: "Directed initiatives to increase market share, launch new products, projects, and enhance brand visibility.",
            date: "Jun 2016 – Aug 2018",
            description: [
                "Exceeded annual sales target by 124% (+$1.6M), acquiring 20 new clients and securing $500K in partnerships",
                "Implemented marketing strategies for website and product catalogs to boost brand visibility and drive sales growth",
                "Negotiated high-value contracts and cultivated client relationships, contributing to long-term revenue growth",
            ]
        }
    ],
    education: [
        {
            degree: "Master of Science in Finance",
            school: "Hult International Business School",
            location: "Boston, MA",
            date: "Mar 2020",
            honors: "Dean's List"
        },
        {
            degree: "Master of Science in International Business",
            school: "Hult International Business School",
            location: "Boston, MA",
            date: "Aug 2019"
        },
        {
            degree: "Bachelor of Science in Business Administration, Finance Major",
            school: "Alfaisal University",
            location: "Riyadh, Saudi Arabia",
            date: "Jan 2016",
            honors: "Dean's List"
        }
    ]
}; 