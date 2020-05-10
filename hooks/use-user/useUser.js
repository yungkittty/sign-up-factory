import _ from 'lodash';
import {useSelector} from 'react-redux';
import {usersSelectors} from '../../datas/users';

const useUser = (id) => {
  const user = useSelector(usersSelectors.getUsers);

  return _.find(user, ({_id}) => _id === id);
};

export default useUser;
