import avocadoImg from '../assets/projects/avocado.png';
import chairImg from '../assets/projects/chair.png';
import lightbulbImg from '../assets/projects/lightbulb.png';

export const projectData = [
  {
    id: 'hello-avocado',
    title: 'Hello Avocado',
    imageSrc: avocadoImg,
    shortDescription:
      'An interactive data visualization web presents various datasets on avocado global trade and production with JavaScript and D3.js.',
    description:
      'Hello Avocado is an interactive data visualization project that explores global avocado trade and production patterns. The application provides users with insights into avocado farming, export/import relationships between countries, and consumption trends over time.',
    challenge:
      'Creating intuitive visualizations that could handle complex trade data while remaining accessible to users without a data analysis background.',
    solution:
      'I employed D3.js to build dynamic, responsive visualizations that allow users to explore the data through interactive maps, charts, and filtering options. The interface was designed to progressively reveal complexity, starting with simple overviews and allowing users to drill down into specific details.',
    technologies: ['JavaScript', 'D3.js', 'CSS3', 'HTML5', 'Responsive Design'],
    features: [
      'Interactive world map showing avocado production by country',
      'Time-series analysis of price fluctuations',
      'Comparison tools for production volumes across regions',
      'Export/import relationship visualization',
      'Responsive design for all device sizes',
    ],
    images: [
      {
        alt: 'Hello Avocado Dashboard',
        caption: 'Main dashboard showing global avocado production',
      },
      {
        alt: 'Data Visualization Chart',
        caption: 'Interactive price trend analysis',
      },
    ],
    liveUrl: 'https://jeanyang0519.github.io/Hello-Avocado/',
    githubUrl: 'https://jeanyang0519.github.io/Hello-Avocado/',
  },
  {
    id: 'lifegram',
    title: 'Lifegram',
    imageSrc: chairImg,
    shortDescription:
      'An Instagram clone with React as the frontend design and Rails as the backend server for people who enjoy sharing their life snippets.',
    description:
      'Lifegram is a full-stack Instagram clone that implements core social media features. The platform allows users to create accounts, share photos, follow other users, and interact with content through likes and comments.',
    challenge:
      'Building a responsive, scalable application with a smooth user experience while handling image uploads, user authentication, and real-time interactions.',
    solution:
      'I developed a robust architecture using React for the frontend and Ruby on Rails for the backend, with AWS S3 for image storage. The application uses Redux for state management to create a seamless user experience with optimistic UI updates.',
    technologies: [
      'React',
      'Redux',
      'PostgreSQL',
      'JavaScript',
      'Ruby',
      'Rails',
      'AWS S3',
      'Responsive Design',
    ],
    features: [
      'User authentication and profile management',
      'Image upload and filtering',
      'News feed with infinite scrolling',
      'Like and comment functionality',
      'User following system',
      'Real-time notifications',
      'Responsive mobile-first design',
    ],
    images: [
      {
        alt: 'Lifegram Feed Interface',
        caption: 'Main feed showing image posts and interactions',
      },
      {
        alt: 'Profile View',
        caption: 'User profile with gallery layout',
      },
    ],
    githubUrl: 'https://github.com/jeanyang0519/Lifegram',
  },
  {
    id: 'light-up',
    title: 'Light Up',
    imageSrc: lightbulbImg,
    shortDescription:
      'A single-page web app for students to develop mentorships and networks over shared interests and goals. Utilized MongoDB, Express.js, React, and Redux to create user connections and live-chat functions.',
    description:
      'Light Up is a single-page web application designed to help students develop mentorships and networks based on shared interests and goals. The platform connects mentors and mentees, facilitating meaningful relationships through common interests.',
    challenge:
      'Creating an intuitive matching system that could effectively connect mentors and mentees based on multiple compatibility factors while providing a seamless communication experience.',
    solution:
      'I built a MERN stack application with Redux for state management and implemented a real-time chat system. The matching algorithm considers multiple factors including skills, interests, goals, and availability to suggest optimal mentor-mentee pairings.',
    technologies: [
      'React',
      'MongoDB',
      'Node.js',
      'Redux',
      'Express',
      'WebSockets',
      'JWT Authentication',
      'Responsive Design',
    ],
    features: [
      'Intelligent mentor-mentee matching system',
      'Real-time chat functionality',
      'User profile management',
      'Interest and skill tagging system',
      'Meeting scheduling tools',
      'Progress tracking dashboards',
      'Responsive design for all devices',
    ],
    images: [
      {
        alt: 'Light Up Dashboard',
        caption: 'Main dashboard showing potential connections',
      },
      {
        alt: 'Chat Interface',
        caption: 'Real-time messaging between mentors and mentees',
      },
    ],
    githubUrl: 'https://github.com/jeanyang0519/Light-Up',
  },
  {
    id: 'anime-rec',
    title: 'Anime Rec',
    imageSrc: animeRecImg,
    shortDescription:
      'A full-stack anime recommendation platform using Next.js, TypeScript, and AniList API to personalize discovery through quizzes, random picks, and curated lists.',
    description:
      'Anime Rec is a full-stack web application that helps users explore anime recommendations based on personal vibes, quiz responses, or curated favorites. It offers a mix of randomized and personalized discovery experiences while connecting to the AniList API for live data.',
    challenge:
      'Creating an intuitive, responsive recommendation flow that blends quiz logic with live API integration, all while keeping performance optimized for dynamic routes and server-side rendering.',
    solution:
      'I built a scalable and modular architecture with Next.js App Router, custom API routes, and dynamic client-side filtering. Tailwind CSS and Framer Motion were used to create playful, fluid UI interactions. The project is deployed with CI/CD via Vercel.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React',
      'AniList API',
      'GraphQL',
      'Vercel',
      'CI/CD',
    ],
    features: [
      'Quiz-based personalized anime recommendations',
      'Random pick generator powered by AniList API',
      'Jean’s elite anime list with filters and tiering',
      'Expandable descriptions with fade effects',
      'Responsive design and modular components',
      'Deployment via GitHub + Vercel CI/CD',
    ],
    images: [
      {
        alt: 'Anime Rec Home',
        caption: 'Homepage with quiz, random pick, and curated list options',
      },
      {
        alt: 'Quiz Result Cards',
        caption: 'Personalized results with descriptions and artwork',
      },
    ],
    liveUrl: 'https://anime-rec.com',
    githubUrl: 'https://github.com/jeanyang0519/anime-recommender',
  }
];
