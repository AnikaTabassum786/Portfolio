

import { useParams } from 'react-router';

const projects = [
    {
        name: 'BartAlap',
        description: 'This is a platform where users can share their opinions. Others can view, like, dislike, and comment on posts like Facebook.',
        technology: 'React, Tailwind CSS, Node JS, Express JS, MongoDB',
        liveLink: 'https://lighthearted-zuccutto-6b74a1.netlify.app/',
        githubLink: 'https://github.com/AnikaTabassum786/BartAlap-Client',
        challenge: [
            'To create two types of Dashboard.',
            'Managing database collections was slightly challenging.',
            'Admin actions were a bit hard to implement.'
        ],
        improvement: [
            'Users who posted more than 20 posts get a diamond badge.',
            'Admin can ban user'
        ]
    },
    {
        name: 'BidyaNiketon',
        description: 'A Course Management project like Udemy or Coursera. Courses can be added, updated, deleted, and users can enroll and view course details.',
        technology: 'React, Tailwind CSS, Node JS, Express JS, MongoDB',
        liveLink: 'https://aesthetic-cannoli-aa3f60.netlify.app/',
        githubLink: 'https://github.com/AnikaTabassum786/Course-Management-client',
        challenge: ['Managing course CRUD operations',
            'Managing the enrollment process'],
        improvement: [
            'Sorting courses based on the highest enrollment',
            'Users cannot enroll in courses without logging in'
        ]
    },
    {
        name: 'KolaPata',
        description: 'A project where users can add, update, and delete their recipes. Users can also view recipe details.',
        technology: 'React, Tailwind CSS, Node JS, Express JS, MongoDB',
        liveLink: 'https://charming-cocada-a91fb8.netlify.app/',
        githubLink: 'https://github.com/AnikaTabassum786/Recipe-Book-Client',
        challenge: [
            'Allowing users to increase the like count was challenging in this project.',
            'Implementing light and dark mode'
        ],
        improvement: [
            'Recipe addition and banner UI can be made more attractive',
            'Update and delete features can be added'
        ]
    }
];

const ProjectDetails = () => {
    const { name } = useParams();
    const project = projects.find((p) => p.name === name);

    if (!project) return <p className="text-center mt-10">Project not found</p>;

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-12">
            <h2 className="text-3xl font-bold mb-6">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="mb-4"><strong>Technology Stack:</strong> {project.technology}</p>

            {project.challenge && (
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Challenges:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {project.challenge.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {project.improvement && (
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Improvements:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {project.improvement.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="flex gap-4 mt-6">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                >
                    Live Project
                </a>
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
};

export default ProjectDetails;
