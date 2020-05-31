import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersActions, usersApi, usersSelectors} from '../../datas/users';

const useUser = (id) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(usersActions.getUser((await usersApi.getUser(id)).data));
        // eslint-disable-next-line
      } catch (error) {}
    })();
    // eslint-disable-next-line
  }, []);

  return useSelector(usersSelectors.getUser(id));
};

export default useUser;
