
export default (event = {}, CallBack = () => { }) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
        CallBack();
    }
}