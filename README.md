# SignUpFactory

## What's it ?

It's an application where you can register and see the profile of other registered members.

It also allows you to enrich your profile with a photo to make other members jealous!

## How to build it ?

First you will have to install the environment for React Native.

To do this, simply follow the instructions here :

https://reactnative.dev/docs/environment-setup.

Make sure to follow all the instructions using the React Native CLI, not Expo.

For Node, I recommend to use NVM if possible, because it's more flexible, as described here :

https://github.com/nvm-sh/nvm.

Once you're setup, clone the repository. By default the "develop" branch will be used.

Install the npm packages using :

`npm install`

Then, start the local server in a terminal using :

- For Windows developers :

`npm run start-windows`

- For others developers :

`npm run start`

Finaly, start the build in another terminal using :

- For iOS devices :

`npm run ios`

- For Android devices :

` npm run android`

It should work !

## How to deploy it ?

The code is automatically deployed, using Travis CI, as soon as it is merged to "develop".

In practice, it is advised to develop a feature in a separate branch and to do a "pull-request".

Once this "pull-request" is tested and validated, it must be merged to the "develop" branch.
