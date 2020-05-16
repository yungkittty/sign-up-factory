import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-native';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import SceneTopbar from '../../components/scene-topbar';
import HomeListHeader from './components/home-list-header';
import HomeListItem from './components/home-list-item';
import useUsers from '../../hooks/use-users';
import useCurrentUser from '../../hooks/use-current-user';
import {currentUserApi, currentUserActions} from '../../datas/current-user';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useUsers();
  const {id} = useCurrentUser();

  const currentUserAvatarData = (users.find((user) => user.id === id) || {}).avatarData;

  const logout = useCallback(async () => {
    try {
      await currentUserApi.logout();
      dispatch(currentUserActions.signOut());
      history.push('/sign-in');
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, history]);

  return (
    <>
      <SceneTopbar
        actions={{
          left: {icon: faPowerOff, onPress: logout},
          right: {image: currentUserAvatarData, onPress: () => history.push(`/users/${id}`)},
        }}
      />
      <FlatList
        // eslint-disable-line
        data={users}
        keyExtractor={(user) => user.id}
        ListHeaderComponent={HomeListHeader}
        renderItem={HomeListItem}
        style={{marginTop: 60}}
        contentContainerStyle={{padding: 40}}
      />
    </>
  );
};

export default Home;
