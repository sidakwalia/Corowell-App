export default (object = false) => {
    if (!!object) {
        let formData = new FormData();
        Object.keys(object).map((obj) => {
            formData.append(obj, object[obj])
        });
        return formData;
    } else return {}
};
