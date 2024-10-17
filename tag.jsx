const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && image) {
      const newPost = {
        title,
        description,
        image: URL.createObjectURL(image),
        tags: tags.split(',').map(tag => tag.trim()), // Split tags by commas
      };
      onAddPost(newPost);
      setTitle('');
      setDescription('');
      setImage(null);
      setTags('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Other inputs */}
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};
