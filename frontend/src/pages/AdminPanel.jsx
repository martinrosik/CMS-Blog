import api from "../service/api";
import { useState, useEffect } from "react";
import UpdatePostModal from "../components/UpdatePostModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import { FaRegTrashAlt, FaPen } from "react-icons/fa";

export default function AdminPanel() {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Confirm delete modal state
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

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

  const handleDeletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      closeConfirmDeleteModal();
    } catch (e) {
      console.error(e);
      setError("Failed to delete post.");
    }
  };

  const openUpdateModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    setError(null);
  };

  const handleSavePost = async (updatedPost) => {
    try {
      const res = await api.put(`/posts/${updatedPost.id}`, {
        title: updatedPost.title,
        content: updatedPost.content,
      });
      setPosts(
        posts.map((post) => (post.id === updatedPost.id ? res.data : post))
      );
      closeModal();
    } catch (e) {
      console.error(e);
      setError("Failed to update post.");
    }
  };

  const openConfirmDeleteModal = (post) => {
    setPostToDelete(post);
    setIsConfirmDeleteOpen(true);
  };

  const closeConfirmDeleteModal = () => {
    setIsConfirmDeleteOpen(false);
    setPostToDelete(null);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      handleDeletePost(postToDelete.id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Panel - Manage Posts
      </h1>

      {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}

      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{post.id}</td>
              <td className="border border-gray-300 px-4 py-2">{post.title}</td>
              <td className="border border-gray-300 px-4 py-2">{post.date}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <div className="flex justify-center items-center space-x-2">
                  <button
                    onClick={() => openUpdateModal(post)}
                    className="bg-blue-300 text-blue-500 px-3 py-1 rounded hover:bg-blue-400 transition"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => openConfirmDeleteModal(post)}
                    className="bg-red-200 text-red-400 px-3 py-1 rounded hover:bg-red-300 transition"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <UpdatePostModal
          post={selectedPost}
          onClose={closeModal}
          onSave={handleSavePost}
        />
      )}

      <ConfirmDeleteModal
        isOpen={isConfirmDeleteOpen}
        onConfirm={confirmDelete}
        onCancel={closeConfirmDeleteModal}
        message={`Are you sure you want to delete the post titled "${postToDelete?.title}"?`}
      />
    </div>
  );
}
