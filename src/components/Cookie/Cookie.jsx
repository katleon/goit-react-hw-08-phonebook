import React, { useState, useEffect } from 'react';

import { Center, MainHeader, Span, Btn } from './Cookie.styled';

function Cookie() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'accepted') {
      setShowCookieConsent(false);
    }
  }, []);

  const handleAcceptCookie = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  return (
    <>
      {showCookieConsent && (
        <Center>
          <MainHeader>Do you like cookies?</MainHeader>
          <Span>
            This website uses cookies to ensure you get the best experience on
            our website.
          </Span>
          <Btn onClick={handleAcceptCookie}>Yum!</Btn>
        </Center>
      )}
    </>
  );
}

export default Cookie;
