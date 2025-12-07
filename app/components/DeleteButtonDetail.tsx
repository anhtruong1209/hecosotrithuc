'use client';

export default function DeleteButtonDetail({ id }: { id: number }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bản ghi này? Hành động này không thể hoàn tác.')) {
      e.preventDefault();
    }
  };

  return (
    <form method="POST" action={`/api/admin/submissions/${id}/delete`} className="inline" onSubmit={handleSubmit}>
      <button type="submit" className="px-4 md:px-6 py-2 md:py-3 bg-red-500/40 hover:bg-red-500/50 text-white rounded-xl text-sm md:text-base font-medium transition border border-red-400/40">
        🗑️ Xóa bản ghi
      </button>
    </form>
  );
}

