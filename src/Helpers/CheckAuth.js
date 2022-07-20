import { Redirect } from 'react-router-dom';

export default (props) => {
    if (!props || !props.user || !props.user.status) return props.history.push('/login');
}