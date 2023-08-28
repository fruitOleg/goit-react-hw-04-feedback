import { Sections } from './section.styled';

export const Section = ({ title, children }) => {
  return (
    <Sections>
      <h2>{title}</h2>
      {children}
    </Sections>
  );
};
