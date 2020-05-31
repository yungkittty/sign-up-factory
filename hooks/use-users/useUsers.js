import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersActions, usersApi, usersSelectors} from '../../datas/users';

const useUsers = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(usersActions.getUsers((await usersApi.getUsers()).data));
        // eslint-disable-next-line
      } catch (error) {}
    })();
    // eslint-disable-next-line
  }, []);

  return useSelector(usersSelectors.getUsers);
};

export default useUsers;
