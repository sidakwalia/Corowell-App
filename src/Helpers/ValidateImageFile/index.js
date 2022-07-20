import React from 'react';
import toastr from 'toastr';

const ValidateImageSize = (event: React.ChangeEvent<HTMLInputElement>, callBack) => {
    if (!!event.target && event.target.files.length) {
        if (!event.target.files[0].type.includes('jpeg') && !event.target.files[0].type.includes('png') && !event.target.files[0].type.includes('jpg')) {
            // document.getElementById('profile-update-field').value = '';
            event.currentTarget.value = ''
            return toastr.warning('Upload Failed! Invalid file type.');
        }
        else if (event.target.files[0].size > 2097152) {
            // document.getElementById('profile-update-field').value = '';
            event.currentTarget.value = ''
            return toastr.warning('File size is too large. The maximum upload limit is 2MB.');
        } else {
            return callBack(event.target.files[0]);
        }
    } else {

    }
};

export default ValidateImageSize;

export const ValidateMultiImageSize = (event: React.ChangeEvent<HTMLInputElement>, callBack) => {
    if (!!event.target && event.target.files.length) {
        let allow = true;
        for (let i = 0; i < [...event.target.files].length; i++) {
            if (!event.target.files[i].type.includes('jpeg') && !event.target.files[i].type.includes('png') && !event.target.files[i].type.includes('jpg')) {
                event.currentTarget.value = '';
                allow = false;
                toastr.warning('Upload Failed! Invalid file type.');
                return;
            }
            else if (event.target.files[i].size > 2097152) {
                event.currentTarget.value = ''
                allow = false;
                toastr.warning('File size is too large. The maximum upload limit is 2MB.');
                return;
            }
        }
        // [...event.target.files].map(file => {
        //     if (!file.type.includes('jpeg') && !file.type.includes('png') && !file.type.includes('jpg')) {
        //         event.currentTarget.value = '';
        //         allow = false;
        //         return toastr.warning('Upload Failed! Invalid file type.');
        //     }
        //     else if (file.size > 2097152) {
        //         event.currentTarget.value = ''
        //         allow = false;
        //         return toastr.warning('File size is too large. The maximum upload limit is 2MB.');
        //     }
        // })
        if (!!allow) {
            return callBack(event.target.files);
        }
    } else {

    }
};