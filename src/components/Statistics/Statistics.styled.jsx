import styled from '@emotion/styled';

export const StatWrapper = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 12px;
  list-stile: none;
  margin: 0;
  background-color: hsla(215deg 2.77% 70.48% / 20%);
`;

export const StatItem = styled.li`
  font-size: 24px;
  margin: 0;
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 12px;
  border-radius: 12px;
`;
