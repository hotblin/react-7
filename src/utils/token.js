import Cookies from 'js-cookie';
export const getToken = () => Cookies.get('__UID__');

export const setToken = (token) => {
  Cookies.set('__UID__', token, {
    expires: 7
  });
}