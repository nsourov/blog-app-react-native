import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const EditPostScreen = ({ navigation }) => {
	const { state, editPost } = useContext(BlogContext);
	const id = navigation.getParam('id');
	const post = state.find((s) => s.id === id);

	const handleEditPost = (title, content) => {
		editPost(id, title, content, () => {
			navigation.pop();
		});
	};

	return (
		<View style={styles.container}>
			<BlogPostForm
				onSubmit={handleEditPost}
				initialValues={{ title: post.title, content: post.content }}
			/>
		</View>
	);
};

export default withNavigation(EditPostScreen);

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
});
