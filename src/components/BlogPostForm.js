import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Title:</Text>
			<TextInput
				value={title}
				onChangeText={(e) => setTitle(e)}
				style={styles.input}
			/>
			<Text style={styles.label}>Content:</Text>
			<TextInput
				value={content}
				onChangeText={(e) => setContent(e)}
				style={styles.input}
			/>
			<Button title='Save' onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: '',
	},
};

export default BlogPostForm;

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
	},
});
