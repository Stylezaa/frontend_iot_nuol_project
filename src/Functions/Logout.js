import { useHistory } from 'react-router-dom';

// exports.logout = () => {

//     const history = useHistory;
    
//     localStorage.removeItem('token');
//     localStorage.removeItem('Profile');
//     history.replace('/');
// };

export default function Logout() {
    const history = useHistory();
    
    localStorage.removeItem('token');
    localStorage.removeItem('Profile');
    history.replace('/');
}  