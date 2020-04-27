import React from 'react';
import {FlatList} from 'react-native';
import HomeListHeader from './components/home-list-header';
import {usersApi} from '../../datas/users';

/**
 * @todo:
 *  [] - use token as cookies.
 *  [] - use token as creds.
 *  [] - show user on home. (w/ user schema or network)
 *  [] - use id instead on hash.
 *  [] - create loader for feedback. (sign-in, sign-up, home, ...)
 */

const Home = () => {
  const [users /* setUsers */] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        await usersApi.getUsers();
        // eslint-disable-next-line
      } catch (error) {}
    })();
  }, []);

  const renderListItem = () => null;

  return (
    <FlatList
      // eslint-disable-line
      data={users}
      keyExtractor={(user) => user.hash}
      ListHeaderComponent={HomeListHeader}
      renderItem={renderListItem}
      contentContainerStyle={{padding: 40}}
    />
  );
};

export default Home;
