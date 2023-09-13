import styled from '@emotion/styled';

export const CardContainer = styled.section`
  display: flex;
  padding-bottom: 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h3`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Score = styled.p`
  margin-bottom: 15px;
`;

export const SubTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Desctiption = styled.p`
  margin-bottom: 15px;
`;

export const PosterContainer = styled.div`
  width: 360px;
  margin-right: 20px;
`;

export const InfoContainer = styled.div``;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  & > li {
    padding-right: 6px;
  }
`;
