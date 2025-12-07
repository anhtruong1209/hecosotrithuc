'use client';

import { useState } from 'react';

interface TestInfoFormProps {
  onSave: (data: { fullname: string; phone: string; email?: string }) => void;
  onSkip?: () => void;
}

export default function TestInfoForm({ onSave, onSkip }: TestInfoFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!showForm) {
    return (
      <div className="glass-card rounded-xl p-4 md:p-6 mb-6 border border-blue-300/50">
        <div className="text-center">
          <div className="text-3xl mb-2">📝</div>
          <h3 className="text-base md:text-lg font-bold text-blue-700 mb-2">
            Lưu kết quả test (Tùy chọn)
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">
            Điền thông tin để lưu kết quả và nhận tư vấn từ trường học
          </p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="glass-button text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:scale-105 transition"
            >
              Điền thông tin
            </button>
            {onSkip && (
              <button
                onClick={onSkip}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 text-gray-700 rounded-lg text-xs md:text-sm font-medium transition"
              >
                Bỏ qua
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-4 md:p-6 mb-6 border border-blue-300/50">
      <h3 className="text-base md:text-lg font-bold text-blue-700 mb-3 text-center">
        📝 Thông tin của bạn (Tùy chọn)
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-gray-400 text-xs">(Tùy chọn)</span>
          </label>
          <input
            type="text"
            value={formData.fullname}
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            className="w-full p-2 glass border border-blue-200/50 rounded-lg bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition text-sm"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Số điện thoại <span className="text-gray-400 text-xs">(Tùy chọn)</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2 glass border border-blue-200/50 rounded-lg bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition text-sm"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email <span className="text-gray-400 text-xs">(Tùy chọn)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 glass border border-blue-200/50 rounded-lg bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition text-sm"
            placeholder="Nhập email (để liên kết với bài tư vấn)"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 glass-button text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:scale-105 transition"
          >
            Lưu thông tin →
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 text-gray-700 rounded-lg text-xs md:text-sm font-medium transition"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

