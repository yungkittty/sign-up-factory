import React from 'react';
import {FlatList} from 'react-native';
import HomeListHeader from './components/home-list-header';
import HomeListItem from './components/home-list-item';
import useUsers from '../../hooks/use-users';

const Home = () => {
  const users = useUsers();

  return (
    <FlatList
      // eslint-disable-line
      data={users}
      keyExtractor={(user) => user.id}
      ListHeaderComponent={HomeListHeader}
      renderItem={HomeListItem}
      contentContainerStyle={{padding: 40}}
    />
  );
};

export default Home;
