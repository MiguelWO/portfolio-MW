import { data } from "autoprefixer";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    pandas,
    scikit_learn,
    tensor_flow,
    keras,
    matplotlib,
    seaborn,
    dnaLegend,
    yolo,
    data_visualization,
    image_classification,
    sentiment_analysis,
    social_media,
    portfolio,
    unity,
    android,
    quicksight,
    kotlin,
    bmw,
    udare
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analysis and Visualization",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Predictive Modeling and Machine Learning Algorithms",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "scikit-learn",
      icon: scikit_learn,
    },
    {
      name: "TensorFlow",
      icon: tensor_flow,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "Matplotlib",
      icon: matplotlib,
    },
    {
      name: "Seaborn",
      icon: seaborn,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Unity",
      icon: unity
    },
    {
      name: "Android",
      icon: android
    },
    {
      name: "Kotlin",
      icon: kotlin
    },
    {
      name: "QuickSight AWS",
      icon: quicksight
    }
  ];
  
  const experiences = [
    {
      title: "Unity Game Developer",
      company_name: "Dna Legend",
      icon: dnaLegend,
      iconBg: "#383E56",
      date: "May 2022 – June 2023",
      points: [
        "Developed captivating and immersive gaming experiences using Unity.",
        "Collaborated closely with a talented team to bring innovative game concepts to life.",
        "Worked closely with artists, designers, and other developers to ensure seamless user experiences.",
        "Applied agile development methodologies and participated in rapid prototyping.",
      ],
    },
    {
      title: "Intern",
      company_name: "BMW Group",
      icon: bmw,
      iconBg: "#E6DEDD",
      date: "Feb - July 2024",
      points: [
        "Developed and implemented multiple functional dashboards in a cloud environment using Amazon QuickSight.",
        "Collaborated with non-technical teams to automate and enhance existing tools and processes, leveraging my technical expertise.",
        "Contributed to the development of new features for BMW OS 9 using Android Studio.",
        "Utilized Git, Android Studio, Kotlin, and Python to deliver high-quality software solutions.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Image recognition using YOLO",
      description:
        " Implementing the YOLO (You Only Look Once) algorithm to perform real-time object detection in images or videos. This project was implemented using different coins for its identification and was deployed on mobile devices",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: yolo,
      source_code_link: "https://colab.research.google.com/drive/1jrI6scYzeTOOfbPLm2lec8Wn_Zl4dUik?usp=sharing",
    },
    {
      name: "Data Visualization Portfolio",
      description:
        "Developed and showcased a collection of visually compelling and informative data visualizations. Utilized various tools and techniques to transform complex data sets into easy-to-understand visuals, facilitating data-driven decision-making.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: data_visualization,
      source_code_link: "https://github.com/MiguelWO/data-visualization-portfolio/tree/main",
    },
    {
      name: "Image Classification",
      description:
        "Developed an image classification system using deep learning techniques for a computer vision project. The goal was to accurately categorize images into predefined classes using a convolutional neural network (CNN) model. Preprocessing techniques such as data augmentation and normalization were employed to enhance the model's performance. Achieved an impressive classification accuracy on the test dataset, showcasing the effectiveness of the developed image classification system.",
      tags: [
        {
          name: "pyhton",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
      ],
      image: image_classification,
      source_code_link: "https://github.com/MiguelWO/image-classification",
    },
    {
      name: "Twitter Sentiment Analysis",
      description:
        "Developed a machine learning model that accurately classified tweets into positive, negative, or neutral sentiment categories. The project involved data collection through a dataset, preprocessing steps such as tokenization and removing stop words, and feature engineering to extract meaningful features from the text. Implemented various models, demonstrating the project's success in understanding and categorizing sentiments expressed on Twitter.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "nltk",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: sentiment_analysis,
      source_code_link: "https://github.com/MiguelWO/sentiment-analysis/tree/main"
    },
    {
      name: "Portfolio",
      description:"I designed and developed an immersive virtual portfolio using the powerful combination of React and Three.js. With a keen eye for innovation, I transformed a traditional portfolio into a captivating digital experience. Leveraging the capabilities of Three.js, I brought 3D elements to life, creating a dynamic environment that showcased my projects in an engaging and interactive manner",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/MiguelWO/portfolio-MW"
    },
    {
      name: "Social Media APP",
      description: "Developed a social media app using Android Studio, allowing users to upload posts with pictures and interact with others. The project utilized Express for the backend, integrated with MongoDB to manage user data, posts, reactions, and comments. AWS S3 Buckets were used for storing and displaying photos across devices.",
      tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "AWS S3",
          color: "red-text-gradient",
        },
      ],
      image: udare,
      source_code_link: "https://github.com/javiixu/UDARE",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  