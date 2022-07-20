import BaseUrl from './url/BaseUrl';

let urls;
export default urls = {
  BaseUrl,
  get LoginApi() { return `${this.BaseUrl}user_login` },
  get RegisterApi() { return `${this.BaseUrl}user_registration` }
};
