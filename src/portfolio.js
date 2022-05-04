/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdulsalam Alkhatib",
  title: "Hi, I'm Abdulsalam",
  subTitle: emoji("A focused and enthusiastic developer with a deep knowledge in software development and artificial intelligence; who is keen to solve real-world industry problems by applying creative solutions. So, I am looking for new opportunities to solve new problems through algorithms and software applications."),
  resumeLink:
    "https://drive.google.com/file/d/19pxnZaYifPmBXtbC8rNNcA3kgVGKOySe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //   /* Your Social Media Link */
  github: "https://github.com/abdulsalamrepo",
  linkedin: "https://www.linkedin.com/in/abdulsalam-alkhatib-023414220",
  youtube: "https://www.youtube.com/channel/UCnKhD9oCrcbgwzIurn2bzLA",
  gmail: "abdulsalamalkhatib96@gmail.com",
  facebook: "https://www.facebook.com/people/%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85-%D8%A7%D9%84%D8%AE%D8%B7%D9%8A%D8%A8/100011083890750/",
  instagram: "#",
  hackerrank: "https://www.hackerrank.com/abdulsalam3",
  kaggle: "https://www.kaggle.com/abdulsalamalkhatib",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPING FIRMWARE OF MICROCONTROLLERS AND DESIGNING HARDWARE CIRCUIT (PCBs)",
  skills: [
    emoji("⚡ Design and implement software of Embedded devices and systems."),
    emoji("⚡ Working on test and debug tools like logic analyzer, Oscilloscope, etc"),
    emoji("⚡ Working on tools like Keil, Eclipse, Truestudio, VScode, Eagle, etc. "),
    emoji("⚡ Design Electronics circuits and hardware PCBs")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery 
https://iconify.design/
*/

  softwareSkills: [
    {
      skillName: "C",
      classname: "logos:c"
    },
    {
      skillName: "python",
      classname: "logos:python",
    },
    // {
    //   skillName: "Embedded C",
    //   classname: "fab fa-css3-alt"
    // },
    {
      skillName: "Microcontroller",
      classname: "uil:processor"
    },
    {
      skillName: "AVR",
      classname: "file-icons:assembly-avr"
    },
    {
      skillName: "ARM",
      classname: "file-icons:assembly-arm"
    },
    {
      skillName: "STM32",
      classname: "simple-icons:stmicroelectronics"
    },
    {
      skillName: "Arduino",
      classname: "logos:arduino"
    },
    {
      skillName: "ESP8622",
      classname: "simple-icons:espressif"
    },
    {
      skillName: "Raspberry pi",
      classname: "logos:raspberry-pi"
    },
    {
      skillName: "NVIDIA Jetson Nano",
      classname: "simple-icons:nvidia"
    },
    {
      skillName: "Eclipse",
      classname: "logos:eclipse-icon"
    },
    // {
    //   skillName: "Keil",
    //   classname: "fab fa-docker"
    // },
    // {
    //   skillName: "Eagle",
    //   classname: "fab fa-docker"
    // },
    {
      skillName: "PCB design",
      classname: "flat-color-icons:electronics"
    },
    {
      skillName: "Linux",
      classname: "logos:linux-tux"
    },
    {
      skillName: "Matlab",
      classname: "vscode-icons:file-type-matlab"
    },
     {
      skillName: "VScode",
      classname: "vscode-icons:file-type-vscode"
    }

  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aleppo University",
      logo: require("./assets/images/university-of-aleppo-logo-syria.jpg"), 
      subHeader: "Bachelor of Engineering in Computers",
      duration: " October 2014 - October 2021",
      desc: "Took courses about Software Engineering, Operating Systems, Embedded, Electronics, Communications ...",
      descBullets: [
        "I have studied basic software engineering subjects like Programming, OS, Embedded, Electronics, Communications etc.",
        "Apart from this, I have done courses on Embedded System, ARM, C/C++, ect.",
        "I was joined a technical team as a student activity and I was involved a robotics competitions.",
      ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-stack Web Developer",
      company: "Matched Target",
      companylogo: require("./assets/images/matched.png"),
      date: "Oct 2020 - Present",
      // location: "Alexandria, Eygpt",
      descBullets: [
        "Work on MVC platforms especially Laravel.        ",
        "Develop and enhance JavaScript applications with Bootstrap, jQuery, JSON.        ",
        "Debug applications and create reports.        ",
        "Apply advanced Database queries in MySQL.        ",
        "build and Connect APIs ,fetch reports from Google Adx and Google Analytics.        ",
        "Use Github and Bitbucket.        ",
        "Apply SEO technical best practices.        ",
        "Follow Agile methodology through whole software development cycle .        ",
        "Support in all area of development.        ",
      ]
    },
    {
      role: "Backend Developer",
      company: "Salvimar GMBH",
      companylogo: require("./assets/images/Salvimar.png"),
      date: "Jan 2021 - Apr 2021",
      // location: "Alexandria, Eygpt",
      descBullets: [
        "Participated in the entire software development lifecycle, focusing on coding and debugging in one project.        ",
        "Wrote clean code to develop functional web application/ website using PHP, MySQL, ReactJS, Redux, Bootstrap, MaterialUI.",
        "Collaborated with Front-end developers to integrate user-facing elements.        ",
      ]
    },
    {
      role: "Backend Developer",
      company: "Gowawe",
      companylogo: require("./assets/images/com.png"),
      date: "Sep 2020 - Oct 2020",
      // location: "Alexandria, Eygpt",
      descBullets: [
        "Participated in the entire software development lifecycle, focusing on coding and debugging in one project.        ",
        "Wrote clean code to develop functional web application/ website using Laravel, MySQL, Angular basic, Bootsrap, JQuery.        ",
        "Collaborated with Front-end developers to integrate user-facing elements.        ",
      ]
    },
    {
      role: "Full-stack Web Developer",
      company: "Sanofa Ltd",
      companylogo: require("./assets/images/sanofa.png"),
      date: "Sep 2019 - Oct 2021",
      // location: "Alexandria, Eygpt",
      descBullets: [
        "Participated in the entire application lifecycle.",
        "Wrote clean code to develop functional web applications and commercial websites using Laravel, C#, MySQL, ReactJS, NodeJS, Bootsrap, JQuery.        ",
        "Troubleshooted and debugged web applications and websites.",
        "Analyzed, gathered and addressed technical and design requirements.        ",
        "Built reusable code and libraries for future use.        ",
        "Built front-end interfaces.        ",
        "Used Jira to report to the tech lead or business analyst.",
      ]
    },
    {
      role: "C# and web designer developer",
      company: "Al-Zahraa",
      companylogo: require("./assets/images/zahraa.jpg"),
      date: "Feb 2018 - Jul 2020",
      // location: "Alexandria, Eygpt",
      descBullets: [
        "Wrote clean code to develop functional web applications and commercial websites and Mobile App and Desktop App using Laravel, C#, .NET, JavaSE, SQLite, MySQL, Cordova, Android, Arduino, Python, Bootsrap, JQuery.",
        "Troubleshooted and debugged web applications and websites.",
        "Analyzed, gathered and addressed technical and design requirements.        ",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Some of my Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/matched.png"),
      projectName: "Online customer relations management",
      projectDesc: "An online CRM for managing the publishers, including billing system, displaying real-time metrics through APIs, and connecting the publishers with their account managers through multiple steps and users using Laravel,MySQL,Metronic,JQuery,Chart.JS,Google adx API,Google analytics API,Cron Job.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://adm.matched.se"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/nefero.png"),
      projectName: "Content management system",
      projectDesc: "A customized CMS to manage content as well as editors and proofreaders. Content managed is to contribute to a guessing game, which I built through Laravel, Python, MySQL, ML, Bootsrap, JQuery,Cron Job, SEO tools.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://nefero.com"
      //   }
      // ]
    },
    {
      image: require("./assets/images/notification.png"),
      projectName: "Push Notification Web Application",
      projectDesc: "A push notifications system based on Firebase SDKs and Device Browser token, that it provides control for publishers to customize and use for their own websites.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      // ]
    },
    {
      image: require("./assets/images/com.png"),
      projectName: "B2B marketplace",
      projectDesc: "A Chinese B2B marketplace that connects buyers with shops, including backend administration supervising all correspondences.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://nefero.com"
      //   }
      // ]
    },
    {
      image: require("./assets/images/1st.png"),
      projectName: "E-commercial website",
      projectDesc: "A dental commercial website based in Sweden, required online billing through Swish and PayPal using Laravel, MySQL, Bootstrap, JQuery, OpenSSL.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://nefero.com"
      //   }
      // ]
    },
    {
      image: require("./assets/images/sh.png"),
      projectName: "POS",
      projectDesc: "A system for ordering goods online, organizing invoices, sending and tracking shipments.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "https://nefero.com"
      //   }
      // ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications,and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JavaScript (Basic)",
      subtitle:
        "It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
      image: require("./assets/images/javascript.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/e1e89094fbc0"
        },
      ]
    },
    {
      title: "Python (Basic)",
      subtitle:
        "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.",
      image: require("./assets/images/python.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/c3ea9a069d82"
        }
      ]
    },

    {
      title: "Rest API (Intermediate)",
      subtitle: "It covers topics like getting data from an API and process using parameters or paging.",
      image: require("./assets/images/rest-api.png"),
      footerLink: [
        {name: "Certification", url: "https://www.hackerrank.com/certificates/5635ee80ff96"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971 50 174 3345",
  email_address: "abdulsalamalkhatib96@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
