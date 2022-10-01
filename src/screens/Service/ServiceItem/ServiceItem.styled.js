import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.default.dark};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.default.grey};
  margin: ${({ theme }) => theme.space[0]};
`;
export const Pricing = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.default.dark};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;
