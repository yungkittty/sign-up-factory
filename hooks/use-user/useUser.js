import _ from 'lodash';
import {useSelector} from 'react-redux';
import {usersSelectors} from '../../datas/users';

const useUser = (id) => {
  const users = useSelector(usersSelectors.getUsers);

  return _.find(users, ({_id}) => _id === id);
};

export default useUser;
