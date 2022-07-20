import toastr from 'toastr';
toastr.options.closeButton = true;

export default (response = false, message = false) => {
    let result = JSON.parse(JSON.stringify(response));
    if (!!result && result.status === 1) return true;
    if (!!result && result.status === 401) { 
        //toastr.error('Not authorized.'); 
        return false; }
    else { toastr.error(!!result && !!result.message ? result.message : !!message ? message : 'Something went wrong'); return false }
}
export const CheckResponseWM = (result = false, message = false) => {
    if (!!result && result.status_code == 200) { toastr.success(!!result && !!result.data ? result.data : 'Success'); return true }
    else { toastr.error(!!result.data ? result.data : 'Something went wrong'); return false }
}
export const CheckResponseFWM = (result = false, message = false) => {
    if (!!result && !!result.status) { toastr.success(!!result && !!result.message ? result.message : 'Congratulations! We are so HAPPY to HAVE YOU on board!'); return true }
    else { toastr.error(!!result && !!result.message ? result.message : !!message ? message : 'Something went wrong'); return false }
}
export const CheckResponseWMU = (result = false, message = false) => {
    if (!!result && result.status === 2) return 2;
    if (!!result && !!result.status) { toastr.success(!!result && !!result.message ? result.message : 'Success'); return 1 }
    else { toastr.error(!!result && !!result.message ? result.message : !!message ? message : 'Something went wrong'); return false }
}
export const CheckResponseNT = (result = false, message = false) => {
    if (!!result && result.status === 2) return 2;
    if (!!result && !!result.status) { return 1 }
    else {  return false }
}
