import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'
import Avatar from 'libs/ui/src/lib/Avatar/Avatar'

const skills = ["Odoo",
  "ERP",
  "ReactJS",
  "Angular",
  "Storybook",
  "Python",
  "Windows",
  "Linux",
  "MacOS",
  "NextJS",
  "GraphQL",
  "TypeScript",
  "Microservices",
  "Stripe",
  "Integration",
  "Outsystems",
  "Low-code",
  "Development",
  "SQL",
  "MongoDB",
  "TailwindCSS",
  "NestJS",
  "NodeJS",
  "Redux",
  "ApolloServer",
  "ApolloClient",
  "MoleculerJS",
  "Google",
  "Services",
  "NX",
  "Monorepo",
  "ChartJS",
  "Github",
  "Jira",
]

const projects = [
  {
    name: 'Eplayment Marketing Website',
    link: 'www.eplayment.com',
    description: 'Marketing Website for Eplayment, a fintech company'
  },
  {
    name: 'Eplayment Web App.',
    link: 'https://app.eplayment.com/',
    description: 'The fintech web app for Eplayment'
  },
  {
    name: 'Leapify CRM App',
    link: 'www.leapify.com',
    description: 'A CRM app for Leapify'
  },
]

const workExperiences = [
  {
    position: 'Fullstack Software Engineer',
    company: 'LeadOrigin',
    from: '12/2022',
    to: 'Present',
    address: 'Remote',
    description: 'A company that specializes in digital marketing, providing digital marketing insights to companies and businesses',
    tasksAndAchievements: [
      "Part of their development team in creating their customer relationship management (CRM) web app, written in ReactJS, Tailwind, in the frontend and NestJS in the backend using REST API and using MongoDB as database.",
      "Researched and implemented Gmail Integration to our backend and frontend app.",
      "Researched and implemented Stripe Integration with support for subscriptions in our backend and frontend app.",
    ],
    referenceContact: {
      name: 'Jaypee Laurence Cocjin',
      contactNumber: '09458443172',
    }
  },
  {
    position: 'Fullstack Software Engineer (Freelance Consultant)',
    company: 'Proof of Impact',
    from: '02/2022',
    to: 'Present',
    address: 'Remote',
    description: `Company offering services in the Environmental, social and governance (ESG) field by collecting clients' ESG data and transforms it to visualization to be
    used by our clients to attract investors`,
    tasksAndAchievements: [
      "Currently handling the admin and client-facing websites of the company by fixing bugs and adding, enhancing features.",
      "Reduced a sizable chunk of code generated by our GraphQL code generator eliminating duplicate types and reducing lines of code from 3000+ per file to about 50-150 lines per file.",
      "Collaborated in migrating front-end styling framework from styled-components and Tailwind to Material UI 5.",
      "Spearheaded the creation of a new web-app from scratch using a monorepo called NX to consolidate admin, frontend and UI libraries (NextJS, Tailwind, GraphQL, ApolloClient) for a better developer experience.",
      "Also handled Data Visualization for our app using ChartJS creating a heavily customized implementation to fit our clients' needs.",
      "Provided a clean way to abstract code from our microservices backend that makes it easier for devs to read code and for code editors to lint.",
    ],
    referenceContact: {
      name: 'Carlo Adona',
      contactNumber: '+639175559824',
    }
  },
  {
    position: 'Full-Stack Software Engineer',
    company: 'Direct Sourcing Solutions',
    from: '11/2021',
    to: '12/2022',
    address: 'Clark Pampanga, Philippines',
    description: 'A company based in Clark, Pampanga that specializes in outsourcing software development talent to companies locally and abroad.',
    tasksAndAchievements: [
      `Worked on the company's internal Training Portal Website created using the OutSystems low-code platform by fixing existing bugs, adding new features.`,
      `Assigned to one of their clients (Docuvera) and worked on fixing bugs, adding new features to their platform created in Angular with backend written in NodeJS and using AWS as part of the infrastructure.`,
      `Perform UX Testing using Cucumber and Testcafe and Unit Testing and Component testing using Jest.`,
    ],
    referenceContact: {
      name: 'Adrian Jenson',
      contactNumber: '+63 917 525 5505',
    }
  },
  {
    position: 'Front End Software Engineer',
    company: 'Multisys Technologies Corp.',
    from: '04/2021',
    to: '12/2021,',
    address: 'Paranaque, NCR',
    description: 'Multisys is a software solutions firm that provides a wide range of cost-effective, full scale service to tailor-fit and empower businesses.',
    tasksAndAchievements: [
      "Created a promotional website for one of Multisys' clients which is an E-commerce gaming platform using NextJS and TailwindCSS.",
      "Became one of the front-end developers responsible for creating the web app for an e-commerce/fin-tech platform using NextJS and TailwindCSS.",
    ],
    referenceContact: {
      name: 'Jaypee Laurence Cocjin',
      contactNumber: '09458443172',
    }
  },
  {
    position: 'Full Stack Web Developer',
    company: 'Theoria Medical/5-Star Telemed',
    from: '06/2020',
    to: '03/2021',
    address: 'Makati City, Philippines',
    description: `Company mainly caters in telemedicine. I'm employed as a full-stack developer for the Owner/CEOs other company, Vertical 4 Auto Parts`,
    tasksAndAchievements: [
      `Supporting the backend of our e-commerce business written in Python (Odoo ERP) and uses PostgreSQL as database that lists thousands of automotive parts in Amazon and Ebay`,
      `Worked on developing a stand-alone e-commerce website (http://www.carfits.com) to reduce overhead costs having customers buy from Amazon and Ebay`,
      `Used technologies such as React JS, GraphQL, Apollo Server and Apollo Client for back-end and front-end and MongoDB as database`,
    ],
    referenceContact: {
      name: 'Jaypee Laurence Cocjin',
      contactNumber: '09458443172',
    }
  },
  {
    position: 'Odoo Back-end Developer',
    company: 'Agilis Enterprise Solutions',
    from: '09/2019',
    to: '06/2020',
    address: 'Makati, Philippines',
    description: 'A technology startup in the Philippines that provides Cloud-based ERP, Customer Relations Management (CRM), and Payroll Solutions to small and medium enterprises.',
    tasksAndAchievements: [
      `Developed business solutions to small and medium business owners using Odoo Enterprise Resource and Planning (ERP) tools based on Python programming language`,
      `Created custom web-based Check Voucher module for local clients needing to make their check vouchers electronic Automated Excel Reports using Python based on client’s needs`,
      `Collaborated with development of a custom Human Resource Management System and also tasked with customizations of Odoo Accounting, Inventory, Sales, Purchasing, and Project Management based on client’s needs`,
    ],
    referenceContact: {
      name: 'Raymund Martinez',
      contactNumber: '+63917-955-9715 / zhaqenl@protonmail.com',
    }
  },
]

const About = () => {

  return (
    <div className='grid h-screen py-10 place-items-center'>
      <div className='w-3/4 mx-auto space-y-5 shadow-lg '>
        <div className="flex gap-2 px-10">
          <div>
            <Avatar variant='user' className='w-44 h-44 outline outline-slate-200' src='profile.jpeg' />
          </div>
          <div>
            <div className="text-4xl">
              John Christian Ardosa
            </div>
            <div className="text-2xl">
              Fullstack Software Engineer
            </div>
            <div>
              Goal-oriented professional with more than eight (8) years of experience in shared services industry and four (4) years of experience in the software development industry particularly in the web-development space. Strong technical and analytical skills necessary in developing business solutions and innovation. Seeking a position where I can use my experience and skills.
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 px-10 py-2 font-semibold bg-slate-700'>
          <div className='flex items-center gap-2 text-white'>
            <EnvelopeIcon className='w-6 h-6 text-white' />
            <div>jardosa@live.com</div>
          </div>
          <div className='flex items-center gap-2 text-white'>
            <DevicePhoneMobileIcon className='w-6 h-6 text-white' />
            <div>+63-917-647-5551</div>
          </div>
          <div className='flex items-center gap-2 text-white'>
            <MapPinIcon className='w-6 h-6 text-white' />
            <div>Taguig City, Metro Manila, Philippines</div>
          </div>
          <div className='flex items-center gap-2 text-white'>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-white "><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
            <div>github.com/jardosa</div>
          </div>
        </div>
        <div className='px-10 py-2 space-y-3'>
          <div className='text-2xl font-bold uppercase'>Technical Skills</div>
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill) => {
              return <div key={skill} className='px-2 py-2 font-bold text-white rounded-md w-max bg-slate-700'>{skill}</div>
            })}
          </div>
        </div>

        <div className='px-10 py-2 space-y-3'>
          <div className='text-2xl font-bold uppercase'>Work Experience</div>
          <div className='flex flex-wrap w-full gap-2'>
            {workExperiences.map((workExperience) => {
              const { position, address, company, description, from, to, referenceContact, tasksAndAchievements } = workExperience
              return <div key={workExperience.position + workExperience.company}>
                <div className='text-2xl font-bold'>{position}</div>
                <div className='text-2xl'>{company}</div>
                <div className='flex justify-between'>
                  <div className='text-xs italic'>{from}-{to}</div>
                  <div className='text-xs italic'>{address}</div>
                </div>
                <div className='text-xs italic text-neutral-400'>{description}</div>
                <div className='text-xs italic'>Achievements/Tasks</div>
                <ul>
                  {tasksAndAchievements.map((task) =>
                    <li className='text-sm list-disc'>
                      {task}
                    </li>
                  )}
                </ul>
                <div className='text-xs italic'>Contact: {referenceContact.name}-{referenceContact.contactNumber}</div>
              </div>
            })}
          </div>
        </div>

        <div className='px-10 py-2 space-y-3'>
          <div className='text-2xl font-bold uppercase'>Projects</div>
          <div className='w-full space-y-2'>
            {projects.map((project) => {
              const { description, link, name } = project
              return <div key={description + link + name}>
                <ul>
                  <li className='text-xl font-bold'>{name}</li>
                  <li className='text-xs italic text-neutral-400'>{description}</li>
                  <li className='text-xs italic'>Link: <a href={link}>{link}</a></li>
                </ul>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About