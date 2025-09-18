import Title from '../Title';

import WorkExperienceListItem from './WorkExperienceListItem';

const contents = [
  {
    company: 'PT. Indotama Baladewa Kurnia',
    period: 'May 2022 – February 2024',
    role: 'Production Operator',
    jobList: [
      'Carrying out the drilling process on bolt material and undergoing K3 at the company.',
      'Carefully and thoroughly check each drilling result so that the resulting hole is perfect in accordance with the company regulatory standards.',
      'Make work results reports according to the results achieved.',
    ],
   },
   {
    company: 'Bengkel Acung Motor',
    period: 'February 2024 – May 2025',
    role: 'Mechanic',
    jobList: [
      'Performing regular maintenance on the injection system and carburetor.',
      'Repairing damage to the electrical system, frame, and engine of the motorcycle.',
      'Purchasing spare parts and creating service notes.',
    ],
    },
    {
    company: 'Amie Jaya Motor ( YAMAHA )',
    period: 'August 2025 – Present',
    role: 'Mechanic',
    jobList: [
      'Service steps according to the work order.',
      'Take photos of each inspection and measurement result.',
      'Make an estimate of the parts that need to be replaced.',
      'If the service requires the use of Yamaha Diagnostic Tools.',
      'Make a memo and fill in the photos and motorcycle mileage.',
      'Wash the vehicle.',
      'Inflate the tires.',
    ],
    },
];

export type WorkExperience = typeof contents[number];

const WorkExperienceSection = () => {
  return (
    <div className='flex gap-16'>
      <div className='space-y-6'>
        <Title>Work Experience</Title>
        <div className='mx-6'>
          <ol className='relative border-l border-gray-200 dark:border-gray-700'>
            {contents.map((content, idx) => (
              <WorkExperienceListItem
                content={content}
                contentsLength={contents.length}
                idx={idx}
                key={content.period}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
