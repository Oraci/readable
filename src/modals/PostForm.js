import React from 'react';
import { Button, Form, Listbox, TextInput, TextArea } from '../components';

const PostForm = ({
  categories,
  onClose,
  onSave,
  onTextChange,
  post,
}) => {
  const {
    title, author, category, body,
  } = post;

  return (
    <Form>
      <TextInput
        name="title"
        label="Title"
        value={title}
        onChange={onTextChange('title')}
      />

      <TextInput
        name="author"
        label="Author"
        value={author}
        onChange={onTextChange('author')}
      />

      <Listbox
        name="category"
        label="Category"
        value={category}
        options={categories}
        onChange={onTextChange('category')}
      />

      <TextArea
        name="body"
        label="Body"
        value={body}
        onChange={onTextChange('body')}
      />

      <Button label="Save" onClick={onSave} />
      <Button label="Cancel" onClick={onClose} />
    </Form>
  );
};

export default PostForm;
