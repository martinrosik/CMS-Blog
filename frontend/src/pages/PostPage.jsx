import { useState } from "react";
import api from "../service/api";

export default function PostPage() {
  const [error, setError] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleAddPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/posts", { title, content });
      setTitle("");
      setContent("");
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.response?.data?.errors || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      {error && (
        <div className="text-red-600 text-sm">
          {Array.isArray(error) ? (
            error.map((err, idx) => <p key={idx}>{err}</p>)
          ) : (
            <p>{error}</p>
          )}
        </div>
      )}
      <form onSubmit={handleAddPost} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-2xl font-medium text-gray-700"
          >
            Post Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            required
            className="mt-1 p-3 block w-full rounded-md border-gray-400 bg-gray-100  shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-2xl font-medium text-gray-700"
          >
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 font-semibold rounded-md shadow transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              "Submit Post"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
