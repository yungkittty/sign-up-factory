import {useSelector} from 'react-redux';
import {currentUserSelectors} from '../../datas/current-user';

const useCurrentUser = () => {
  const currentUserId = useSelector(currentUserSelectors.getCurrentUserId);

  return {currentUserId};
};

export default useCurrentUser;
