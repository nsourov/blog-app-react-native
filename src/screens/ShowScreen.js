import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';
import { withNavigation } from 'react-navigation';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);

	const post = state.find((s) => s.id === navigation.getParam('id'));

	return (
		<View>
			<Text>{post.title}</Text>
			<Text>{post.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Edit', { id: navigation.getParam('id') })
				}
			>
				<EvilIcons name='pencil' size={35} />
			</TouchableOpacity>
		),
	};
};

export default withNavigation(ShowScreen);

const styles = StyleSheet.create({});
