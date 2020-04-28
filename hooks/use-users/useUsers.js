import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {usersActions, /* usersApi, */ usersSelectors} from '../../datas/users';

const useUsers = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    /* async  */ (() => {
      try {
        const payload = [{}]; /* await usersApi.getUsers();  */
        dispatch(usersActions.getUsers(payload));
        // eslint-disable-next-line
      } catch (error) {}
    })();
    // eslint-disable-next-line
  }, []);

  return useSelector(usersSelectors.getUsers, shallowEqual);
};

export default useUsers;
