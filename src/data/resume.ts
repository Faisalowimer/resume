import { ResumeData } from "@/types/resume";

function calculateDonationAmount(): string {
    // Base amount from January 2024
    const baseAmount = 18362;
    const monthlyIncrease = 700;

    // Calculate months since January 2024
    const currentDate = new Date();
    const startDate = new Date(2024, 0, 1); // January 1, 2024
    const monthsDiff = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
        (currentDate.getMonth() - startDate.getMonth());

    // Calculate current amount based on months passed
    const amount = baseAmount + (monthlyIncrease * monthsDiff);

    // Round to nearest thousand and format
    const roundedThousands = Math.ceil(amount / 1000);
    return `+$${roundedThousands}k`;
}

export const resumeData: ResumeData = {
    contact: {
        name: "Faisal Owimer",
        location: "New York, NY",
        phone: "+1-857-756-5572",
        email: "faisal@owimer.co",
        linkedinUrl: "https://www.linkedin.com/in/faisal-owimer/",
        githubUrl: "https://github.com/Faisalowimer",
        personalWebsiteUrl: "https://owimer.co"
    },
    experience: [
        {
            title: "Product Engineer",
            company: "Goodie AI",
            companyUrl: "https://www.higoodie.com/",
            location: "Manhattan, NY",
            jobSummary: "Leading product engineering across a 12-person team and 3 squads, driving user growth, retention, and platform observability for an AI-powered search and shopping solution serving Fortune 500 brands.",
            date: "Feb 2025 – Present",
            description: [
                "Modernized the full-stack codebase and resolved critical tech debt, significantly improving shipping velocity and enabling the team to scale feature delivery across 3 concurrent squads",
                "Delivered prompt engine, research, shopping, onboarding, admin portal, and email service from prototype to production, achieving competitive feature parity and winning accounts including Uniqlo, Sargento, SteelSeries, Kiehl's, and Dermalogica",
                "Led SOC 2 Type 1 & Type 2 certifications and enterprise feature rollout, directly enabling six-figure deals and positioning the company toward seven-figure ARR",
                "Spearheading brand, website, and web app redesign — brand and site live, app launching end of month — improving UX and simplifying data presentation across the platform",
                "Migrated the eng org from ClickUp to Linear with full workflow setup; deployed Claude Code agents to automate spec drafting, PRD creation, and release documentation, compressing planning-to-shipping cycles",
            ]


        },
        // {
        //     title: "Software Engineer",
        //     company: "Fractal Tech",
        //     companyUrl: "https://fractalbootcamp.com/",
        //     location: "Brooklyn, NY",
        //     jobSummary: "Transitioned to full-stack development, building production-ready applications through intensive bootcamp training in frontend and backend technologies with 1000+ commits and 300+ PRs with >860 hours hands on keyboard.",
        //     date: "Sep 2024 – Present",
        //     description: [
        //         "Developed a range of applications using TypeScript, Next.js, Vite, React, TanStack, Zod, MagicUI, Firebase, Express, WebSocket, OpenAI, Vercel, Netlify, and AWS",
        //         "Automated data scraping, browser workflows, and UI testing with Puppeteer, Storybook, and Vitest for data aggregation, insights, and reducing manual QA",
        //     ]
        // },
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
        // {
        //     title: "Business Development Manager",
        //     company: "Saudi Modern Factory",
        //     companyUrl: "https://smf.com.sa/",
        //     location: "Riyadh, Saudi Arabia",
        //     jobSummary: "Directed initiatives to increase market share, launch new products, projects, and enhance brand visibility.",
        //     date: "Jun 2016 – Aug 2018",
        //     description: [
        //         // "Exceeded annual sales target by 124% (+$1.6M), acquiring 20 new clients and securing $500K in partnerships",
        //         // "Implemented marketing strategies for website and product catalogs to boost brand visibility and drive sales growth",
        //         // "Negotiated high-value contracts and cultivated client relationships, contributing to long-term revenue growth",
        //     ]
        // }
    ],
    projects: {
        summary: "Building an autonomous development system using Claude Code, AI agents, and MCP tooling to independently manage and ship side projects — with a longer-term focus on deepening expertise in agentic workflows and AI-native development.",
        items: [
            {
                name: "faisal-infra",
                url: "https://github.com/Faisalowimer/faisal-infra",
                description: "Shared infrastructure repo with reusable CI/CD workflows, coding conventions, and Claude Code skills across all active ventures",
            },
            {
                name: "Ihsan",
                url: "https://www.ihsan.tech",
                description: `Full-stack community platform (Next.js, Stripe, Clerk) connecting Muslim communities with mosques, processing ${calculateDonationAmount()} in donations`,
            },
            {
                name: "owimer.co",
                url: "https://owimer.co",
                description: "Personal website built with a Windows 95/98 aesthetic; roadmap focused on agentic features and interactive experiments",
            },
        ]
    },
    education: [
        {
            degree: "Full Stack Development Bootcamp",
            school: "Fractal Tech",
            location: "Brooklyn, NY",
            date: "Dec 2024"
        },
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