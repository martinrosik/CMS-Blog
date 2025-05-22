import { useEffect, useState } from "react";
import Post from "../components/Post";
import api from "../service/api";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/posts");
        setPosts(res.data);
      } catch (e) {
        console.error(e);
        setError("Failed to load posts.");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      {error && <p className="text-red-600">{error}</p>}
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))
      ) : (
        <p className="text-gray-500">No posts available.</p>
      )}
    </div>
  );
}
