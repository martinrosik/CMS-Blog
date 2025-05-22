export default function Post({ title, content }) {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{content}</p>
    </div>
  );
}
