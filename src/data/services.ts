export type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  steps: {
    title: string;
    description: string;
  }[];
};

export const services: Service[] = [
  {
    id: "hr-consultancy",
    name: "HR Consultancy",
    slug: "hr-consultancy",
    shortDescription: "Tailored solutions that help organizations identify and address structural and people-related challenges, with the option for further support through training and development programs",
    fullDescription: "Our HR consultancy services are designed to help organizations identify and resolve structural and people-related challenges, ensuring optimized performance and a cohesive workforce. Through tailored strategies and support, we address issues in talent management, employee engagement, and overall organizational efficiency.",
    imageSrc: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744218047/investoren_t1mqao.jpg",
    steps: [
      {
        title: "Initial Assessment",
        description: "Initial assessment to understand existing HR structures and people challenges."
      },
      {
        title: "Strategy Development",
        description: "Development of a customized HR strategy tailored to business goals."
      },
      {
        title: "Implementation",
        description: "Implementation support, including employee training and workshops."
      },
      {
        title: "Monitoring & Adjustment",
        description: "Ongoing monitoring and adjustments to ensure long-term success."
      }
    ]
  },
  {
    id: "entrepreneurial-consulting",
    name: "Entrepreneurial Consulting",
    slug: "entrepreneurial-consulting",
    shortDescription: "Expert guidance for startups and entrepreneurs to navigate challenges and accelerate business growth.",
    fullDescription: "We specialize in helping startups build strong teams and implement effective people strategies that drivegrowth. By creating supportive work environments, we enable new businesses to thrive through targeted team-building efforts and strategic people management.",
    imageSrc: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744218392/Payments_Innovation_Resilience-1072111470_sargal.jpg",
    steps: [
      {
        title: "Team Assessment",
        description: "Assessment of current team dynamics and growth goals."
      },
      {
        title: "Strategy Creation",
        description: "Strategy creation for team building, recruitment, and culture development."
      },
      {
        title: "Implementation",
        description: "Implementation of people management strategies aligned with business goals."
      },
      {
        title: "Evaluation & Adaptation",
        description: "Ongoing evaluation to adapt strategies as the business evolves."
      }
    ]
  },
  {
    id: "employee-development-training",
    name: "Employee Development & Training",
    slug: "employee-development-training",
    shortDescription: "Customized training programs to enhance employee skills, productivity, and overall job satisfaction.",
    fullDescription: "Our development programs focus on equipping employees with essential skills in leadership, communication, and conflict resolution. Through customized workshops, we foster collaboration and empower teams to excel within the organization, ensuring continuous growth and engagement.",
    imageSrc: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744218516/0x0_rmy3g2.webp",
    steps: [
      {
        title: "Consultation",
        description: "We conduct a comprehensive needs assessment to identify skill gaps and training priorities within your organization."
      },
      {
        title: "Strategy Planning",
        description: "Our team designs customized training programs aligned with your learning objectives and organizational goals."
      },
      {
        title: "Execution",
        description: "We deliver engaging, interactive training sessions using various methodologies to maximize learning retention."
      },
      {
        title: "Result Tracking",
        description: "We evaluate training effectiveness through assessments, feedback, and performance monitoring to measure impact."
      }
    ]
  },
  {
    id: "career-development",
    name: "Career Development",
    slug: "career-development",
    shortDescription: "Personalized guidance for individuals seeking professional growth, utilizing psychometric assessments to align strengths with career paths, supporting both career advancement and role realignment.",
    fullDescription: "Our Career Development services empower individuals to take control of their professional journey. We provide personalized guidance, practical tools, and expert coaching to help you navigate career transitions, overcome obstacles, and achieve your goals. From career assessments and resume building to interview preparation and advancement strategies, our comprehensive approach addresses all aspects of career growth and satisfaction.",
    imageSrc: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744233743/Talk_About_Talk_Sales_Page_Images_30_ton359.png",
    steps: [
      {
        title: "Consultation",
        description: "We begin with a thorough assessment of your skills, interests, values, and career aspirations."
      },
      {
        title: "Strategy Planning",
        description: "Our career experts develop a personalized action plan with clear steps to achieve your professional goals."
      },
      {
        title: "Execution",
        description: "We provide ongoing coaching and support as you implement your career development plan."
      },
      {
        title: "Result Tracking",
        description: "We regularly review progress, celebrate successes, and adjust strategies to keep you on track toward your goals."
      }
    ]
  },
  {
    id: "upskilling-training",
    name: "Upskilling & Training",
    slug: "upskilling-training",
    shortDescription: "Targeted training programs aimed at enhancing employee skills and fostering professional development across a range of roles.",
    fullDescription: "Our Upskilling & Training services equip professionals with the cutting-edge skills needed to thrive in today's dynamic workplace. We offer specialized programs focusing on emerging technologies, industry-specific knowledge, and essential business capabilities. Through a combination of instructor-led training, hands-on workshops, and online learning resources, we provide flexible, accessible learning opportunities that prepare individuals and teams for current and future workplace demands.",
    imageSrc: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744233962/676fd56534b45873828353_fconij.png",
    steps: [
      {
        title: "Consultation",
        description: "We identify your specific upskilling needs and learning objectives through detailed assessment."
      },
      {
        title: "Strategy Planning",
        description: "Our team creates a tailored learning pathway with the right mix of training methods and content."
      },
      {
        title: "Execution",
        description: "We deliver engaging, practical training sessions focused on skill acquisition and application."
      },
      {
        title: "Result Tracking",
        description: "We measure skill development and provide certification upon successful completion of training programs."
      }
    ]
  },
  {
    id: "talent-assessment-and-selection",
    name: "Talent Assessment & Selection",
    slug: "talent-assessment-and-selection",
    shortDescription: "Comprehensive solutions encompassing role analysis, skill assessments, and structured interviews to identify top talent that aligns with both job requirements and company culture.",
    fullDescription: "Our Leadership Coaching services develop visionary leaders who can navigate challenges, inspire teams, and drive sustainable results. Through one-on-one coaching sessions, our experienced leadership mentors help executives and managers enhance their leadership style, improve decision-making, and build resilience. We focus on both the strategic and human aspects of leadership, creating a holistic approach that transforms good managers into exceptional leaders who can cultivate high-performing teams and organizations.",
    imageSrc: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744234059/d674326954d4e19fc118843f4be9fef1_gqesmx.jpg",
    steps: [
      {
        title: "Consultation",
        description: "We begin with a leadership assessment to understand your current strengths and areas for development."
      },
      {
        title: "Strategy Planning",
        description: "Our leadership coaches create a personalized development plan focused on your specific leadership goals."
      },
      {
        title: "Execution",
        description: "We conduct regular coaching sessions combining theory, practical exercises, and real-world application."
      },
      {
        title: "Result Tracking",
        description: "We measure leadership growth through self-assessment, team feedback, and observable performance improvements."
      }
    ]
  }
];
