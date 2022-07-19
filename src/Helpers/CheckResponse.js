import toastr from 'toastr';
toastr.options.closeButton = true;

export default (result = false, message = false) => {
    // if (!!result && !!result.status) { toastr.success(!!result && !!result.message ? result.message : 'Something went wrong'); return true }
    if (!!result && !!result.status) return true;
    else { toastr.error(!!result && !!result.message ? result.message : !!message ? message : 'Something went wrong'); return false }
}
export const CheckResponseWM = (result = false, message = false) => {
    if (!!result && !!result.status) { toastr.success(!!result && !!result.message ? result.message : 'Success'); return true }
    // if (!!result && !!result.status) return true;
    else { toastr.error(!!result && !!result.message ? result.message : !!message ? message : 'Something went wrong'); return false }
}
