import { useState } from "react";
import { Search, Trash2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [messages, setMessages] = useState([
    // Sample data; replace with actual data source
    { _id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", message: "Hello!" },
    { _id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", message: "Need assistance." }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg._id !== id));
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6" id="admin">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neutral-50">Feedback of Contacts</h1>
          <button
            onClick={() => navigate("/")}
            className="flex items-center px-4 py-2 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search messages by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          {filteredMessages.map((msg) => (
            <div key={msg._id} className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-900">{msg.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <p className="text-sm text-gray-600">{msg.email}</p>
                    <span className="text-sm text-gray-500">•</span>
                    <p className="text-sm text-gray-600">{msg.phone}</p>
                  </div>
                  <p className="text-gray-800">{msg.message}</p>
                </div>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  aria-label="Delete message"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          {filteredMessages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No messages found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
