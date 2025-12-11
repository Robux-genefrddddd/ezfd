import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Cloud,
  File,
  TrendingUp,
  Grid,
  Star,
  User,
  BarChart3,
  Search,
  Bell,
  Settings,
  HardDrive,
  Upload,
  Share2,
  LogOut,
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

interface StatItem {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ComponentType<{ className: string }>;
}

interface FileItem {
  id: string;
  provider: string;
  usage: string;
  period: string;
  amount: string;
  change: string;
  projected: string;
}

const stats: StatItem[] = [
  {
    label: "Total Storage",
    value: "$1,390,021",
    change: "+8%",
    trend: "up",
    icon: HardDrive,
  },
  {
    label: "Files Uploaded",
    value: "3,900",
    change: "+15%",
    trend: "up",
    icon: Upload,
  },
  {
    label: "Shared Files",
    value: "78%",
    change: "+2%",
    trend: "up",
    icon: Share2,
  },
];

const files: FileItem[] = [
  {
    id: "165372",
    provider: "AWS",
    usage: "10170 Hours",
    period: "Oct 1 - Oct 31",
    amount: "$45,000",
    change: "+8%",
    projected: "$32,000",
  },
  {
    id: "216452",
    provider: "Azure",
    usage: "540 Hours",
    period: "Oct 1 - Oct 31",
    amount: "$20,000",
    change: "+4%",
    projected: "$25,000",
  },
  {
    id: "234343",
    provider: "GCP",
    usage: "2900 Hours",
    period: "Oct 1 - Oct 31",
    amount: "$12,000",
    change: "+9%",
    projected: "$18,000",
  },
  {
    id: "104281",
    provider: "Oracle",
    usage: "2300 Hours",
    period: "Oct 1 - Oct 31",
    amount: "$10,000",
    change: "+9%",
    projected: "$7,000",
  },
];

export default function Dashboard() {
  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      setUserName(auth.currentUser.displayName || "User");
      setUserEmail(auth.currentUser.email || "");
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: "#0E0E0F",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23222223' fill-opacity='0.08'%3E%3Cpath d='M29 30l-1-1 1-1 1 1-1 1M30 29l-1-1 1-1 1 1-1 1M30 31l-1 1 1 1 1-1-1-1M31 30l 1-1-1-1-1 1 1 1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      {/* Sidebar */}
      <aside
        className="w-64 text-white p-6 flex flex-col fixed left-0 top-0 h-screen overflow-y-auto border-r"
        style={{
          backgroundColor: "#111214",
          borderColor: "#1F2124",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 mb-10 hover:opacity-80 transition"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F91e2732f1c03487e879c66ee97e72712%2Fee08390eccc04e8dbea3ce5415d97e92?format=webp&width=800"
            alt="PinPinCloud"
            className="w-7 h-7"
          />
          <span className="text-lg font-bold">PinPinCloud</span>
        </Link>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors"
            style={{
              backgroundColor: "#1A2647",
              color: "#60A5FA",
            }}
          >
            <BarChart3 className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:text-white"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F2124")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <File className="w-5 h-5" />
            <span>Reports</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:text-white"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F2124")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <TrendingUp className="w-5 h-5" />
            <span>Performance</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:text-white"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F2124")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Grid className="w-5 h-5" />
            <span>Allocations</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:text-white"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F2124")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Star className="w-5 h-5" />
            <span>Tags</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:text-white"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F2124")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <User className="w-5 h-5" />
            <span>Manage Users</span>
          </button>
        </nav>

        {/* User Info */}
        <div
          className="mt-6 p-4 rounded-lg border space-y-4"
          style={{
            backgroundColor: "#141518",
            borderColor: "#1F2124",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold text-white"
              style={{ backgroundColor: "#1A2647" }}
            >
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{userName}</p>
              <p className="text-xs text-slate-400 truncate">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white transition-colors border"
            style={{
              backgroundColor: "#0F1113",
              borderColor: "#1F2124",
            }}
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 overflow-auto">
        {/* Header */}
        <header
          className="border-b px-8 py-6 sticky top-0 z-40"
          style={{
            backgroundColor: "#111214",
            borderColor: "#1F2124",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                Welcome {userName}! 👋
              </h1>
              <p className="text-sm text-slate-400">
                Manage your cloud resources and spending
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2.5 w-80 rounded-lg text-white placeholder-slate-600 text-sm border focus:outline-none focus:ring-1"
                  style={{
                    backgroundColor: "#141518",
                    borderColor: "#1F2124",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#2A2E33";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#1F2124";
                  }}
                />
              </div>
              <button
                className="p-2.5 rounded-lg transition-colors"
                style={{
                  backgroundColor: "#141518",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F2124")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#141518")}
              >
                <Bell className="w-5 h-5 text-slate-400" />
              </button>
              <button
                className="p-2.5 rounded-lg transition-colors"
                style={{
                  backgroundColor: "#141518",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F2124")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#141518")}
              >
                <Settings className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg p-6 border transition-colors hover:border-blue-500/50"
                  style={{
                    backgroundColor: "#111214",
                    borderColor: "#1F2124",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#1A2647" }}
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold text-blue-400 flex items-center gap-1">
                      {stat.change}
                      <TrendingUp className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Charges */}
          <div
            className="rounded-lg border overflow-hidden"
            style={{
              backgroundColor: "#111214",
              borderColor: "#1F2124",
            }}
          >
            <div className="px-6 py-4 border-b" style={{ borderColor: "#1F2124" }}>
              <h2 className="text-xl font-bold text-white">Recent Charges</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr
                    className="border-b"
                    style={{ borderColor: "#1F2124" }}
                  >
                    <th className="px-6 py-4 text-left font-semibold text-slate-300">
                      Provider
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300">
                      Usage
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300">
                      Period
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300">
                      Change
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-300">
                      Projected
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr
                      key={file.id}
                      className="border-b hover:bg-slate-800/20 transition-colors"
                      style={{ borderColor: "#1F2124" }}
                    >
                      <td className="px-6 py-4 font-medium text-white">
                        {file.provider}
                      </td>
                      <td className="px-6 py-4 text-slate-400">{file.usage}</td>
                      <td className="px-6 py-4 text-slate-400">{file.period}</td>
                      <td className="px-6 py-4 font-semibold text-white">
                        {file.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-blue-400 font-medium">
                          {file.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">
                        {file.projected}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
