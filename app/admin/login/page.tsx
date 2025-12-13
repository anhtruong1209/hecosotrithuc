import LoginForm from '@/app/components/LoginForm';

export default async function AdminLoginPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ error?: string }> | { error?: string } 
}) {
  // Handle both Promise and direct searchParams for Next.js compatibility
  const resolvedSearchParams = searchParams instanceof Promise 
    ? await searchParams 
    : searchParams;
  
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
        <div className="max-w-md mx-auto py-20 px-6">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Đăng nhập quản trị</h1>
            
            {resolvedSearchParams.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
                Tên đăng nhập hoặc mật khẩu không đúng
              </div>
            )}

            <LoginForm />
          </div>
        </div>
    </div>
  );
}

