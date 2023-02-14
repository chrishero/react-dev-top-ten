import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { StyledContributorDetails } from './ContributorDetailsExpanded.styled';

export default function ContributorDetailsExpanded({login, isShown}) {
  const userUrl = `https://api.github.com/users/${login}`;
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData', login],
    queryFn: () =>
      fetch(userUrl).then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  const {
    id,
    bio,
    location,
    name,
    avatar_url,
    followers,
    following,
  } = data;
  const username = data.login;

  if (!isShown) return null

  return (
    <StyledContributorDetails key={id}>
      <img src={avatar_url} alt="" />
      <div>
        <p><span>username: </span>{username}</p>
        <p><span>name: </span>{name}</p>
        {location ? <p><span>location: </span> {location}</p> : ""}
        {bio ? <p><span>bio: </span> {bio} </p> : ""}
        <p><span>Followers: </span>{followers}</p>
        <p><span>Following: </span>{following}</p>
      </div>
    </StyledContributorDetails>
  )
}