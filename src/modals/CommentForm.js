import React from 'react';
import { Button, Form, TextInput, TextArea } from '../components';

const CommentForm = ({
  onClose,
  onSave,
  onTextChange,
  comment,
}) => {
  const {author, body} = comment;

  return (
    <Form>
      <TextInput
        name="author"
        label="Author"
        value={author}
        onChange={onTextChange('author')}
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

export default CommentForm;
