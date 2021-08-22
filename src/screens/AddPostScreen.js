import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const AddPostScreen = ({ navigation }) => {
	const { addPost } = useContext(BlogContext);

	const handleCreatePost = (title, content) => {
		addPost(title, content, () => {
			navigation.navigate('Index');
		});
	};

	return (
		<View style={styles.container}>
			<BlogPostForm onSubmit={handleCreatePost} />
		</View>
	);
};

export default AddPostScreen;

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
});
