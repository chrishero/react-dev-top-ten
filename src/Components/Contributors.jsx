import React, { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import {
  Container,
  ContributorGrid,
  ContributorBlock,
  ShowMore
} from './Contributors.styled';
import ContributorDetailsExpanded from './ContributorDetailsExpanded'

const queryClient = new QueryClient();

export default function Contributors() {
  const [expanded, setExpanded] = useState([]);
  const handleSetExpanded = (login) => setExpanded({...expanded, [login]: !expanded[login]});
  const repoUrl = 'https://api.github.com/repos/facebook/react/contributors?per_page=10';
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(repoUrl).then(
        (res) => res.json(),
      ),
    })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  return(
    <QueryClientProvider client={queryClient}>
      <Container>
        <ContributorGrid>
          {data.map(contributor => {
            const {
              id,
              avatar_url,
              contributions,
              login
            } = contributor;
            return (
              <ContributorBlock key={id}>
                <img src={avatar_url} alt="" />
                <div className="user-details">
                  <span>{login}</span>
                  <span>{contributions} contributions</span>
                  <ShowMore onClick={() => handleSetExpanded(login)}>
                      <span className={expanded[login] ? 'arrow-up' : 'arrow-down'}/>
                      <span>{expanded[login] ? 'hide details' : 'show more'}</span>
                  </ShowMore>
                </div>
                <ContributorDetailsExpanded
                  login={login}
                  isShown={expanded[login]}
                  onClick={() => handleSetExpanded(login)}
                />
              </ContributorBlock>
            )
          })}
        </ContributorGrid>
      </Container>
    </QueryClientProvider>
  )
};