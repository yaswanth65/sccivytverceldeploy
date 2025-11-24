"use client";

export default function ContactForm() {
  return (
    <div className="bg-[#F5F5F0] p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-medium">Get in touch</h3>
        <span className="text-sm text-gray-400">* Required fields</span>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-500">First Name *</label>
            <input
              type="text"
              className="w-full bg-gray-50 border-b border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-500">Last Name</label>
            <input
              type="text"
              className="w-full bg-gray-50 border-b border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-500">Email Address *</label>
          <input
            type="email"
            className="w-full bg-gray-50 border-b border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-500">Message</label>
          <textarea
            rows={4}
            className="w-full bg-gray-50 border-b border-gray-200 p-3 focus:outline-none focus:border-black transition-colors resize-none"
          ></textarea>
        </div>

        <button className="bg-black text-white px-8 py-4 rounded-full w-full md:w-auto hover:bg-gray-800 transition-colors mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
}
