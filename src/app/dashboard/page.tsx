import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="bg-gray-800 w-1/4 h-screen">
        <nav className="mt-10">
          <ul>
            <li>
              <Link href="/login">
                login
              </Link>
            </li>
            <li>
              <Link href="/register">
                Register
              </Link>
            </li>
            <li>
              <Link href="/patients">
                patients
              </Link>
            </li>
            <li>
              <Link href="/sample">
                sample
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-10">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>This is the dashboard page.</p>
      </div>
    </div>
  );
};

export default Dashboard;
