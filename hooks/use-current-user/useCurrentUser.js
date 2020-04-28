import {useSelector} from 'react-redux';
import {currentUserSelectors} from '../../datas/current-user';

const useCurrentUser = () => {
  const id = useSelector(currentUserSelectors.getCurrentUserId);

  return {id};
};

export default useCurrentUser;
