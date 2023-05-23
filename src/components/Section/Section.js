import { SectionEl, Title } from './Section.jsx';
import { Container } from './Container.jsx';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionEl>
  );
}