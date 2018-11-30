import Cookies from 'js-cookie';
export const getToken = () => !!Cookies.get('token') ? decodeURIComponent(Cookies.get('token')) : null;

export const setToken = token => {
  Cookies.set('token', encodeURIComponent(token), {
    expires: 7
  });
}