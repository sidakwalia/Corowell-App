import BaseUrl from './url/BaseUrl';

let urls;
export default urls = {
  BaseUrl,
  get LoginApi() { return `${this.BaseUrl}user_login` },
  get RegisterApi() { return `${this.BaseUrl}user_registration` },
  get GetScentApi() { return `https://backend.fadean.com/ticket/api/list-request` },
  get GenerateTestApi() { return `${this.BaseUrl}api/cornwell/generate_test_result` }
};
