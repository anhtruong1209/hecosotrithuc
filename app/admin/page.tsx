'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DeleteButton from '../components/DeleteButton';

interface Submission {
  id: number;
  fullname: string;
  phone: string;
  email: string;
  ip_address?: string;
  major: string;
  created_at: string;
  [key: string]: any;
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMajor, setFilterMajor] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [sortBy, setSortBy] = useState<'id' | 'created_at' | 'fullname'>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    withEmail: 0,
    withPhone: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0
  });

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    filterAndSort();
  }, [submissions, searchTerm, filterMajor, filterDate, sortBy, sortOrder]);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
        calculateStats(data);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data: Submission[]) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    setStats({
      total: data.length,
      withEmail: data.filter(s => s.email && s.email.trim() !== '').length,
      withPhone: data.filter(s => s.phone && s.phone.trim() !== '').length,
      today: data.filter(s => new Date(s.created_at) >= today).length,
      thisWeek: data.filter(s => new Date(s.created_at) >= weekAgo).length,
      thisMonth: data.filter(s => new Date(s.created_at) >= monthAgo).length
    });
  };

  const filterAndSort = () => {
    let filtered = [...submissions];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(s =>
        s.fullname?.toLowerCase().includes(term) ||
        s.email?.toLowerCase().includes(term) ||
        s.phone?.includes(term) ||
        s.major?.toLowerCase().includes(term) ||
        s.ip_address?.includes(term)
      );
    }

    // Major filter
    if (filterMajor) {
      filtered = filtered.filter(s => s.major === filterMajor);
    }

    // Date filter
    if (filterDate) {
      const filterDateObj = new Date(filterDate);
      filtered = filtered.filter(s => {
        const submissionDate = new Date(s.created_at);
        return submissionDate.toDateString() === filterDateObj.toDateString();
      });
    }

    // Sort
    filtered.sort((a, b) => {
      let aVal: any = a[sortBy];
      let bVal: any = b[sortBy];

      if (sortBy === 'created_at') {
        aVal = new Date(aVal).getTime();
        bVal = new Date(bVal).getTime();
      } else if (sortBy === 'id') {
        aVal = Number(aVal);
        bVal = Number(bVal);
      } else {
        aVal = String(aVal || '').toLowerCase();
        bVal = String(bVal || '').toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      } else {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
      }
    });

    setFilteredSubmissions(filtered);
  };

  const handleSort = (field: 'id' | 'created_at' | 'fullname') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredSubmissions.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredSubmissions.map(s => s.id));
    }
  };

  const exportToExcel = () => {
    const dataToExport = selectedIds.length > 0
      ? filteredSubmissions.filter(s => selectedIds.includes(s.id))
      : filteredSubmissions;

    // Create CSV content with proper formatting
    const escapeCSV = (str: string) => {
      if (!str) return '';
      const stringValue = String(str);
      // Escape quotes and wrap in quotes if contains comma, quote, or newline
      if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`;
      }
      return stringValue;
    };

    const headers = ['ID', 'Họ tên', 'SĐT', 'Email', 'IP Address', 'Ngành gợi ý', 'Ngày gửi'];
    const rows = dataToExport.map(s => [
      s.id,
      s.fullname || '',
      s.phone || '',
      s.email || '',
      s.ip_address || '',
      s.major || '',
      new Date(s.created_at).toLocaleString('vi-VN')
    ]);

    // Create CSV content
    const csvRows = [
      headers.map(h => escapeCSV(h)).join(','),
      ...rows.map(row => row.map(cell => escapeCSV(String(cell))).join(','))
    ];

    const csvContent = csvRows.join('\n');

    // Create blob with UTF-8 BOM for Excel compatibility
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `submissions_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  };

  const getUniqueMajors = () => {
    return Array.from(new Set(submissions.map(s => s.major).filter(Boolean))).sort();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-yellow-200 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="clay-card clay-card-purple p-6 mb-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Quản trị - Danh sách kết quả tư vấn
              </h1>
              <p className="text-gray-700">Quản lý và xuất dữ liệu submissions</p>
            </div>
            <form method="POST" action="/api/admin/logout" className="inline">
              <button type="submit" className="clay-button-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                Đăng xuất
              </button>
            </form>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <div className="clay-card clay-card-blue p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-xs text-gray-600 mt-1">Tổng số</div>
          </div>
          <div className="clay-card clay-card-green p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{stats.withEmail}</div>
            <div className="text-xs text-gray-600 mt-1">Có Email</div>
          </div>
          <div className="clay-card clay-card-yellow p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{stats.withPhone}</div>
            <div className="text-xs text-gray-600 mt-1">Có SĐT</div>
          </div>
          <div className="clay-card clay-card-pink p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{stats.today}</div>
            <div className="text-xs text-gray-600 mt-1">Hôm nay</div>
          </div>
          <div className="clay-card clay-card-purple p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{stats.thisWeek}</div>
            <div className="text-xs text-gray-600 mt-1">Tuần này</div>
          </div>
          <div className="clay-card clay-card-blue p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{stats.thisMonth}</div>
            <div className="text-xs text-gray-600 mt-1">Tháng này</div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="clay-card clay-card-blue p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">🔍 Tìm kiếm</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tên, email, SĐT, IP, ngành..."
                className="w-full p-3 bg-white/80 border border-white/60 rounded-xl text-gray-800 focus:outline-none focus:border-white/80"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">📚 Lọc theo ngành</label>
              <select
                value={filterMajor}
                onChange={(e) => setFilterMajor(e.target.value)}
                className="w-full p-3 bg-white/80 border border-white/60 rounded-xl text-gray-800 focus:outline-none focus:border-white/80"
              >
                <option value="">Tất cả ngành</option>
                {getUniqueMajors().map(major => (
                  <option key={major} value={major}>{major}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">📅 Lọc theo ngày</label>
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full p-3 bg-white/80 border border-white/60 rounded-xl text-gray-800 focus:outline-none focus:border-white/80"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">📊 Sắp xếp</label>
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [field, order] = e.target.value.split('-');
                  setSortBy(field as 'id' | 'created_at' | 'fullname');
                  setSortOrder(order as 'asc' | 'desc');
                }}
                className="w-full p-3 bg-white/80 border border-white/60 rounded-xl text-gray-800 focus:outline-none focus:border-white/80"
              >
                <option value="id-desc">ID: Mới nhất</option>
                <option value="id-asc">ID: Cũ nhất</option>
                <option value="created_at-desc">Ngày: Mới nhất</option>
                <option value="created_at-asc">Ngày: Cũ nhất</option>
                <option value="fullname-asc">Tên: A-Z</option>
                <option value="fullname-desc">Tên: Z-A</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={exportToExcel}
              className="clay-button-secondary text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              📥 Xuất Excel {selectedIds.length > 0 && `(${selectedIds.length})`}
            </button>
            {selectedIds.length > 0 && (
              <button
                onClick={() => setSelectedIds([])}
                className="px-6 py-2 bg-white/60 border border-white/80 hover:bg-white/80 text-gray-700 rounded-full text-sm font-medium transition"
              >
                Bỏ chọn tất cả
              </button>
            )}
            <div className="ml-auto text-sm text-gray-600 flex items-center">
              Hiển thị: <strong className="ml-1">{filteredSubmissions.length}</strong> / {submissions.length}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="clay-card clay-card-blue overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-xs md:text-sm text-gray-700 border-b border-white/40 bg-white/30">
                  <th className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === filteredSubmissions.length && filteredSubmissions.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4"
                    />
                  </th>
                  <th className="p-3 cursor-pointer hover:bg-white/40" onClick={() => handleSort('id')}>
                    ID {sortBy === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="p-3 cursor-pointer hover:bg-white/40" onClick={() => handleSort('fullname')}>
                    Họ tên {sortBy === 'fullname' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="p-3">SĐT</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">IP</th>
                  <th className="p-3">Ngành gợi ý</th>
                  <th className="p-3 cursor-pointer hover:bg-white/40" onClick={() => handleSort('created_at')}>
                    Ngày gửi {sortBy === 'created_at' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="p-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="p-8 text-center text-gray-500">
                      {searchTerm || filterMajor || filterDate ? 'Không tìm thấy kết quả phù hợp' : 'Chưa có dữ liệu'}
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((sub) => (
                    <tr key={sub.id} className="border-t border-white/30 hover:bg-white/20 transition">
                      <td className="p-3">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(sub.id)}
                          onChange={() => toggleSelect(sub.id)}
                          className="w-4 h-4"
                        />
                      </td>
                      <td className="p-3 text-gray-700 font-medium">{sub.id}</td>
                      <td className="p-3 text-gray-700">{sub.fullname || '-'}</td>
                      <td className="p-3 text-gray-600 text-xs">{sub.phone || '-'}</td>
                      <td className="p-3 text-gray-600 text-xs">{sub.email || '-'}</td>
                      <td className="p-3 text-gray-600 text-xs font-mono">{sub.ip_address || '-'}</td>
                      <td className="p-3 text-gray-700 text-xs md:text-sm">{sub.major}</td>
                      <td className="p-3 text-gray-600 text-xs">{new Date(sub.created_at).toLocaleString('vi-VN')}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Link href={`/admin/${sub.id}`} className="clay-button-secondary text-white px-3 py-1 rounded-lg text-xs font-medium hover:scale-105 transition">
                            Xem
                          </Link>
                          <DeleteButton id={sub.id} />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
