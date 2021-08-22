import React, { useContext, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';
import { withNavigation } from 'react-navigation';

const IndexScreen = ({ navigation }) => {
	const { state, deletePost, getPosts } = useContext(BlogContext);

	useEffect(() => {
		getPosts();
		// when the screen is active fetch posts
		const listener = navigation.addListener('didFocus', () => {
			getPosts();
		});
		return () => {
			// turn off listener when component is not in used
			listener.remove();
		};
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={state}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}
						>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity onPress={() => deletePost(item.id)}>
									<Feather name='trash' style={styles.icon} />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name='plus' size={30} />
			</TouchableOpacity>
		),
	};
};

export default withNavigation(IndexScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		borderTopWidth: 1,
		borderColor: 'grey',
		marginHorizontal: 10,
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
		color: 'black',
	},
});
