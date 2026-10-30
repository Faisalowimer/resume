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
            title: "Lead Product Manager",
            company: "Goodie AI",
            companyUrl: "https://www.higoodie.com/",
            location: "Manhattan, NY",
            jobSummary: "Building the future of AI search: own product with a team of 12 engineers, shipping weekly to help brands like Unilever, Uniqlo, and SteelSeries win in AI answers.",
            date: "Feb 2025 – Present",
            description: [
                "Scaled ARR +30x by owning every launch from customer discovery to release",
                "Rebuilt how the team ships using Claude Code agents for specs, prototypes, and engineering",
                "Moved Goodie from monitoring to action with 2.0: full redesign, Goodie Agent, MCP, Brand Command, and Attribution",
                "Expanded into AI shopping and social citations, taking Agentic Commerce and Social Optimization from 0 to 1",
                "Unlocked six-figure deals by leading SOC 2 Type 1 & 2 and SSO rollouts",
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
            jobSummary: "Owned product at a seed-stage fintech, taking it from first users to $170M AUM and $1.75M raised in seed funding.",
            date: "Jun 2020 – May 2024",
            description: [
                "Ran end-to-end product discovery including user interviews, roadmap prioritization, and pilot onboarding, validating early product-market fit",
                "Owned investor materials, GTM strategy, and internal ops throughout the seed round",
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
        summary: "Building a personal development system with Claude Code, AI agents, MCP tooling, and CLI tools to manage and ship projects through agentic workflows and AI-native development.",
        items: [
            {
                name: "faisal-infra",
                description: "Shared infrastructure repo with reusable CI/CD workflows, coding conventions, and Claude Code skills across all active projects",
            },
            {
                name: "Ihsan",
                url: "https://www.ihsan.tech",
                description: `Full-stack community platform (Next.js, Stripe, Clerk) connecting Muslim communities with mosques, processing ${calculateDonationAmount()} in donations`,
            },
            {
                name: "owimer.co",
                url: "https://owimer.co",
                description: "Personal website built with a Windows 95/98 aesthetic, with a roadmap including games, a terminal, and agentic features",
            },
        ]
    },
    techStack: [
        "TypeScript", "Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "REST APIs", "Docker", "AWS", "Python"
    ],
    education: [
        {
            degrees: [{ name: "Full Stack Development Bootcamp", date: "Dec 2024" }],
            school: "Fractal Tech",
            location: "Brooklyn, NY",
        },
        {
            degrees: [
                { name: "Master of Science in Finance", date: "Mar 2020", honors: "Dean's List" },
                { name: "Master of Science in International Business", date: "Aug 2019" },
            ],
            school: "Hult International Business School",
            location: "Boston, MA",
        },
        {
            degrees: [{ name: "Bachelor of Science in Business Administration, Finance Major", date: "Jan 2016", honors: "Dean's List" }],
            school: "Alfaisal University",
            location: "Riyadh, Saudi Arabia",
        }
    ]
}; 