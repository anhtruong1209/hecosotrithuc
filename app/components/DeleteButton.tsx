'use client';

export default function DeleteButton({ id }: { id: number }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bản ghi này? Hành động này không thể hoàn tác.')) {
      e.preventDefault();
    }
  };

  return (
    <form method="POST" action={`/api/admin/submissions/${id}/delete`} className="inline" onSubmit={handleSubmit}>
      <button type="submit" className="px-3 py-1 bg-red-500/40 hover:bg-red-500/50 text-white rounded-lg text-xs font-medium border border-red-400/40 transition">
        🗑️ Xóa
      </button>
    </form>
  );
}

