

export const personalInfo = {
    name: "Software Engineer in Test", // Placeholder name as user didn't provide one, using title or generic
    title: "Software Development Engineer in Test",
    bio: "Software Development Engineer in Test with 5 years of experience architecting automation frameworks and developing test utilities for large-scale, distributed systems. Strong coding background in C#, Python, OOP, data structures, algorithms, and designing maintainable test suites using Selenium WebDriver, REST-Assured, TestNG/NUnit, and BDD frameworks. Proficient in validating microservices, REST APIs, message queues, and data pipelines with deep expertise in SQL-based data verification and API contract testing. Skilled in integrating automation into CI/CD pipelines (Azure DevOps, Git), optimizing test execution, and building reusable automation libraries.",
    email: "rishipranayrajbikkumalla@gmail.com",
    linkedin: "https://www.linkedin.com/in/brishi/",
};

export const projects = [
    {
        title: "AI Article Generation Using SEO",
        description: "Developed an AI-powered web platform that generates SEO-optimized articles with customizable content, meta tags, entities, and AI-generated images, while supporting advanced features such as multilingual output, voice playback, PDF export, and dynamic user configuration via database-backed settings.",
        tags: ["AI", "SEO", "Web Platform", "Multilingual"],
    },
    {
        title: "Facemask Monitoring System",
        description: "Developed a real-time face mask detection system using OpenCV and TensorFlow (MobileNetV2) with Swagger UI, achieving 95–100% confidence and latency tracking, while enabling image/video input through a REST API with JSON outputs for automated monitoring across various host devices.",
        tags: ["OpenCV", "TensorFlow", "REST API", "Real-time"],
    }
];

export const skills = [
    "C#", "Python", "OOP", "Data Structures", "Algorithms",
    "Selenium WebDriver", "REST-Assured", "TestNG/NUnit", "BDD",
    "Microservices", "REST APIs", "SQL", "CI/CD (Azure DevOps, Git)"
];

export const experience = [
    {
        company: "Collabera, USA",
        role: "QA Engineer",
        period: "July 2025 - Present",
        description: [
            "Evaluate and integrate automation tools (Selenium, Playwright, Cypress) and develop scalable C# automation frameworks to improve release quality.",
            "Create test strategies executing 70% automation and 30% manual testing across UI, API, and integration layers.",
            "Execute automated test suites in CI/CD pipelines, performing root cause analysis on failures.",
            "Collaborate with Agile teams to refine requirements and drive continuous product quality improvements."
        ]
    },
    {
        company: "Cloud IT Staffing, USA",
        role: "Software Developer",
        period: "Feb 2025 - July 2025",
        description: [
            "Developed applications using Java, C#, and JavaScript with strong adherence to OOP and design patterns.",
            "Built responsive UI with HTML/CSS/JS and integrated RESTful APIs for seamless data flow.",
            "Supported SQL/NoSQL database modeling and query optimization.",
            "Participated in CI/CD workflows, automated testing, and agile ceremonies."
        ]
    },
    {
        company: "TCS, India",
        role: "Test Automation Engineer",
        period: "Oct 2021 - June 2023",
        description: [
            "Designed and automated UI scripts using Selenium WebDriver (C#) and API testing with Postman.",
            "Performed large-scale SQL data validation (10M+ records) and managed regression testing.",
            "Managed workflows via Azure DevOps, collaborating with cross-functional teams.",
            "Built end-to-end automated scenarios, reducing production defects and earning Star Team Awards."
        ]
    },
    {
        company: "Techno Brains, India",
        role: "Analyst",
        period: "Oct 2019 - Apr 2021",
        description: [
            "Delivered QA solutions for e-commerce and fintech projects using Selenium (Python/C#).",
            "Performed mobile/web manual and automated testing, managing defects in JIRA and Azure DevOps.",
            "Validated real-time camera and edge-device workflows for model accuracy.",
            "Consulted on QA best practices, automation frameworks, and CI/CD integration."
        ]
    }
];
