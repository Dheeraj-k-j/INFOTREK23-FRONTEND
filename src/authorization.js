export const setJwtTokenInCookie = (token, expirationDays) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);

  document.cookie = `jwt=${token}; expires=${expirationDate.toUTCString()}; path=/;`;
};

export const removeJwtTokenFromCookie = () => {
  document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export const getJwtTokenFromCookie = () => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      if (cookie.startsWith('jwt=')) {
        return cookie.substring('jwt='.length);
      }
    }
    return null;
};