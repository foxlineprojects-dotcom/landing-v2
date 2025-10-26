"use client";

import { useState } from "react";
import { CheckCircle, Upload } from "lucide-react";

export default function FreeAnalysisForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      setFileName(file.name);
    }
  };

  // ✅ Convert file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.firstName || !formData.email || !formData.file) {
      return setError("Please fill all fields and upload your contract.");
    }

    try {
      setLoading(true);

      const fileBase64 = await toBase64(formData.file);

      // ✅ Cloudinary Direct Upload — Only allowed parameters!
      const formData2 = new FormData();
      formData2.append("file", formData.file); // or the file object
      formData2.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );
      // optional: formData.append('folder', 'user-uploads'); etc
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData2,
        }
      );

      const cloudData = await res.json();
      if (!cloudData.secure_url) throw new Error("Upload failed");

      // ✅ Save record to backend (Sanity)
      const metaRes = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          fileUrl: cloudData.secure_url, // ✅ Send the URL!
        }),
      });

      if (!metaRes.ok) throw new Error("Meta save failed");

      setSubmitted(true);
    } catch (err) {
      console.error("❌ Upload error:", err);
      setError("Upload failed — try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[300px] flex flex-col gap-4 items-center justify-center">
        <CheckCircle className="w-12 h-12 text-emerald-600" />
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          Thanks! We’ll reach out soon.
        </p>
      </div>
    );
  }

  return (
    <section
      id="analysis"
      className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 my-20"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
        Get Your Free Analysis
      </h2>
      {/* <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
            Upload Your Car Contract
          </label>
          <input
            type="file"
            required
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            className="block w-full text-slate-600 dark:text-gray-200 border border-slate-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800"
          />
          {fileName && (
            <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">
              {fileName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
            First Name
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-100"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-100"
            placeholder="your@email.com"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full font-semibold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg text-white bg-[#e08e79] hover:bg-[#d97a62]"
        >
          {loading ? "Uploading..." : "Analyze My Car Contract Free"}
        </button>

        <p className="text-center text-xs text-slate-500 dark:text-gray-400">
          🔒 Files encrypted & auto-deleted after 30 days.
        </p>
      </form> */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none transition-all"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Upload Your Car Contract or Estimate
          </label>
          <div className="relative">
            <input
              type="file"
              required
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2c5f5f";
                e.currentTarget.style.backgroundColor = "#f5e6d3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#d1d5db";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Upload className="w-8 h-8 text-slate-400 mb-2" />
              {fileName ? (
                <span className="text-sm text-slate-700 font-medium">
                  {fileName}
                </span>
              ) : (
                <>
                  <span className="text-sm text-slate-600 font-medium">
                    Click to upload
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    PDF, JPG, PNG, or DOCX (Max 10MB)
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full font-semibold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl text-white"
          style={{ backgroundColor: "#e08e79" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#d17d68")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#e08e79")
          }
        >
          Analyze My Car Contract Free
        </button>

        <p className="text-center text-xs text-slate-500">
          🔒 We never spam or share your info. One analysis, one email.
        </p>
      </div>
    </section>
  );
}
