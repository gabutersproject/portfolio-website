import Title from '../Title';
import EducationListItem from './EducationListItem';

const contents = [
  {
    title: 'SMKN 2 Bekasi',
    period: '2018 - 2021',
    majors: 'Automotive Engineering',
  },
];

export type Education = (typeof contents)[number];

const EducationSection = () => {
  return (
    <div className="flex gap-16">
      <div className="space-y-6">
        <Title>Education</Title>
        <div className="mx-4">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {contents.map((content, idx) => (
              <EducationListItem
                content={content}
                contentsLength={contents.length}
                idx={idx}
                key={content.title}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
