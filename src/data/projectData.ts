import avocadoImg from "../assets/projects/avocado.png";
import chairImg from "../assets/projects/chair.png";
import lightbulbImg from "../assets/projects/lightbulb.png";

export const projectData = [
  {
    id: "hello-avocado",
    title: "Hello Avocado",
    imageSrc: avocadoImg,
    shortDescription: "An interactive data visualization web presents various datasets on avocado global trade and production with JavaScript and D3.js.",
    description: "Hello Avocado is an interactive data visualization project that explores global avocado trade and production patterns. The application provides users with insights into avocado farming, export/import relationships between countries, and consumption trends over time.",
    challenge: "Creating intuitive visualizations that could handle complex trade data while remaining accessible to users without a data analysis background.",
    solution: "I employed D3.js to build dynamic, responsive visualizations that allow users to explore the data through interactive maps, charts, and filtering options. The interface was designed to progressively reveal complexity, starting with simple overviews and allowing users to drill down into specific details.",
    technologies: ["JavaScript", "D3.js", "CSS3", "HTML5", "Responsive Design"],
    features: [
      "Interactive world map showing avocado production by country",
      "Time-series analysis of price fluctuations",
      "Comparison tools for production volumes across regions",
      "Export/import relationship visualization",
      "Responsive design for all device sizes"
    ],
    images: [
      {
        alt: "Hello Avocado Dashboard",
        caption: "Main dashboard showing global avocado production"
      },
      {
        alt: "Data Visualization Chart",
        caption: "Interactive price trend analysis"
      }
    ],
    liveUrl: "https://jeanyang0519.github.io/Hello-Avocado/",
    githubUrl: "https://jeanyang0519.github.io/Hello-Avocado/"
  },
  {
    id: "lifegram",
    title: "Lifegram",
    imageSrc: chairImg,
    shortDescription: "An Instagram clone with React as the frontend design and Rails as the backend server for people who enjoy sharing their life snippets.",
    description: "Lifegram is a full-stack Instagram clone that implements core social media features. The platform allows users to create accounts, share photos, follow other users, and interact with content through likes and comments.",
    challenge: "Building a responsive, scalable application with a smooth user experience while handling image uploads, user authentication, and real-time interactions.",
    solution: "I developed a robust architecture using React for the frontend and Ruby on Rails for the backend, with AWS S3 for image storage. The application uses Redux for state management to create a seamless user experience with optimistic UI updates.",
    technologies: ["React", "Redux", "JavaScript", "Ruby", "Rails", "AWS S3", "PostgreSQL", "Responsive Design"],
    features: [
      "User authentication and profile management",
      "Image upload and filtering",
      "News feed with infinite scrolling",
      "Like and comment functionality",
      "User following system",
      "Real-time notifications",
      "Responsive mobile-first design"
    ],
    images: [
      {
        alt: "Lifegram Feed Interface",
        caption: "Main feed showing image posts and interactions"
      },
      {
        alt: "Profile View",
        caption: "User profile with gallery layout"
      }
    ],
    githubUrl: "https://github.com/jeanyang0519/Lifegram"
  },
  {
    id: "light-up",
    title: "Light Up",
    imageSrc: lightbulbImg,
    shortDescription: "A single-page web app for students to develop mentorships and networks over shared interests and goals. Utilized MongoDB, Express.js, React, and Redux to create user connections and live-chat functions.",
    description: "Light Up is a single-page web application designed to help students develop mentorships and networks based on shared interests and goals. The platform connects mentors and mentees, facilitating meaningful relationships through common interests.",
    challenge: "Creating an intuitive matching system that could effectively connect mentors and mentees based on multiple compatibility factors while providing a seamless communication experience.",
    solution: "I built a MERN stack application with Redux for state management and implemented a real-time chat system. The matching algorithm considers multiple factors including skills, interests, goals, and availability to suggest optimal mentor-mentee pairings.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "WebSockets", "JWT Authentication", "Responsive Design"],
    features: [
      "Intelligent mentor-mentee matching system",
      "Real-time chat functionality",
      "User profile management",
      "Interest and skill tagging system",
      "Meeting scheduling tools",
      "Progress tracking dashboards",
      "Responsive design for all devices"
    ],
    images: [
      {
        alt: "Light Up Dashboard",
        caption: "Main dashboard showing potential connections"
      },
      {
        alt: "Chat Interface",
        caption: "Real-time messaging between mentors and mentees"
      }
    ],
    githubUrl: "https://github.com/jeanyang0519/Light-Up"
  }
];
