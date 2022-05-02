plugins: [
  {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "my-website-bucket",
      protocol: "http",
      hostname: "www.vishalvignesh.com",
    },
  },
]
module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://vishalvignesh.com/`,
    // Your Name
    name: 'Vishal Vignesh S',
    // Main Site Title
    title: `Vishal Vignesh | College Student`,
    // Description that goes under your name in main bio
    description: `Hey, hi! Welcome to my Site, I didn't know what to put in here, so I put in a neat portfolio. Feel free to take a look!`,
    // Optional: Twitter account handle
    author: `@vishalvignesh15`,
    // Optional: Github account URL
    github: `https://github.com/vishalvignesh`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/vishalvigneshsreekrishnan/`,
    // Content of the About Me section
    about: `I'm currently persuing my graduate degree in Network Engineering at University of Colorado, Boulder. I aspire to become a cloud network specialist in security and architecture.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Offline Payment Interface',
        description:
          'An end-to-end encrypted offline payment mechanism, that allows users to transfer money without an internet connection, and automatically syncs with their bank account when they come online.',
        link: '',
      },
      {
        name: 'Road Irregularity Detector',
        description:
          'A full service consisting of a mobile app, and an online dashboard that records irregularities in roads and is logged. These logs can then be utilized to fix the roads.',
        link: '',
      },
      {
        name: 'Encryptique',
        description:
          'An end-to-end file transfer application, that allows users to transfer files directly from system-to-system that supports multi file transfer and multiple recipients.',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Mithi Software Technologies',
        description: 'Cloud Infrastructure Engineer, July 2021 - July 2022',
        link: 'https://www.mithi.com/',
      },
      {
        name: 'IIT Madras, Internship',
        description: 'Open Source Software Development, June 2020 - October 2020',
        link: '',
      },
      {
        name: 'Merit Software Services',
        description: 'Data Processing Intern, June 2019 - July 2019',
        link: 'https://www.meritdata-tech.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Python, C, C++, Node.js, Express.js',
      },
      {
        name: 'Certifications',
        description:
          'Google Cloud Fundamentals, Google Cloud Infrastructure: Foundation,Google Cloud Infrastructure: Design Process,  Google Cloud Infrastructure: Scaling and Automation,Google Cloud Infrastructure: Core Services, \n AWS Network Speciality (In Progress)',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Google Cloud Platform, CI / CD, API design',
      },
      
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/test.png`,
      },
    },
  ],
};
