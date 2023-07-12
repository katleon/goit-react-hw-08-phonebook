import React from 'react';

import { Main, Card, Header, StyledLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Main>
        <Card>
          <Header>Page Not Found</Header>
          <div>
            <p>
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </p>
            <StyledLink to="/">Back to our site</StyledLink>
          </div>
        </Card>
      </Main>
    </>
  );
};

export default NotFound;
