import React from 'react';
import {FlatList} from 'react-native';
import HomeListHeader from './components/home-list-header';
import HomeListItem from './components/home-list-item';
import useUsers from '../../hooks/use-users';

/**
 * @todo:
 *  [] - use token as cookies.
 *  [] - use token as creds.
 *  [] - show user on home. (w/ user schema or network)
 *  [] - use id instead on hash as keyExtractor.
 *  [] - create loader for feedback. (sign-in, sign-up, home, ...)
 */

const Home = () => {
  const users = useUsers();

  return (
    <FlatList
      // eslint-disable-line
      data={users}
      ListHeaderComponent={HomeListHeader}
      renderItem={HomeListItem}
      contentContainerStyle={{padding: 40}}
    />
  );
};

export default Home;
