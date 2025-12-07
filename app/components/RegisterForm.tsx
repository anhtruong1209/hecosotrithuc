'use client';

import { useState } from 'react';

export default function RegisterForm({ submissionId }: { submissionId: number }) {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: submissionId,
          ...formData
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        alert('Có lỗi xảy ra khi cập nhật thông tin. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi cập nhật thông tin. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="glass-card rounded-xl p-6 mb-6 border border-green-300/50 bg-green-50/30">
        <div className="text-center">
          <div className="text-4xl mb-2">✅</div>
          <p className="text-sm md:text-base text-green-700 font-semibold">
            Đăng ký thành công! Đang tải lại trang...
          </p>
        </div>
      </div>
    );
  }

  if (dismissed) {
    return null; // Ẩn form nếu đã bỏ qua
  }

  if (!showForm) {
    return (
      <div className="glass-card rounded-xl p-6 mb-6 border border-blue-300/50">
        <div className="text-center">
          <div className="text-4xl mb-3">📝</div>
          <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-2">
            Đăng ký để lưu kết quả (Tùy chọn)
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Bạn có thể xem và xuất kết quả miễn phí. Điền thông tin (không bắt buộc) để lưu kết quả và nhận đề xuất tốt nhất từ trường học.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:scale-105 transition"
            >
              Đăng ký (Tùy chọn) →
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 text-gray-700 rounded-xl text-sm md:text-base font-medium transition"
            >
              Bỏ qua
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-6 mb-6 border border-blue-300/50">
      <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-2 text-center">
        📝 Đăng ký để lưu kết quả (Tùy chọn)
      </h3>
      <p className="text-xs text-gray-600 mb-4 text-center">
        Thông tin này giúp trường học liên hệ và hỗ trợ bạn tốt hơn. Tất cả các trường đều có thể xem kết quả miễn phí.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Họ và tên <span className="text-gray-400 text-xs">(Tùy chọn)</span>
          </label>
          <input
            type="text"
            value={formData.fullname}
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition"
            placeholder="Nhập họ và tên (không bắt buộc)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số điện thoại <span className="text-gray-400 text-xs">(Tùy chọn)</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition"
            placeholder="Nhập số điện thoại (không bắt buộc)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-gray-400 text-xs">(Tùy chọn)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition"
            placeholder="Nhập địa chỉ email (không bắt buộc)"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Đang lưu...' : 'Lưu thông tin (Tùy chọn) →'}
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 text-gray-700 rounded-xl text-sm md:text-base font-medium transition"
          >
            Bỏ qua
          </button>
        </div>
      </form>
    </div>
  );
}


