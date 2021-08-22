import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import AddPostScreen from './src/screens/AddPostScreen';
import EditPostScreen from './src/screens/EditPostScreen';

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
		Create: AddPostScreen,
		Edit: EditPostScreen,
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			title: 'Blogs',
		},
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
