import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { useMaintenanceMode } from "@/hooks/use-maintenance-mode";
import { getThemeColors } from "@/lib/theme-colors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getUserRole } from "@/lib/auth-utils";

export function MaintenanceScreen() {
  const { isMaintenanceEnabled, maintenanceMessage } = useMaintenanceMode();
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const role = await getUserRole(user.uid);
          setIsAdmin(role === "admin" || role === "founder");
        } catch (error) {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAdmin && e.ctrlKey && e.key === "F1") {
        e.preventDefault();
        setShowAdminPanel(!showAdminPanel);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAdmin, showAdminPanel]);

  if (!isMaintenanceEnabled) {
    return null;
  }

  if (isAdmin && showAdminPanel) {
    return null;
  }

  const colors = getThemeColors("dark");

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
      style={{
        backgroundColor: colors.background,
      }}
    >
      <div className="text-center max-w-2xl">
        <div className="flex justify-center mb-6">
          <div
            className="p-4 rounded-full"
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.15)",
            }}
          >
            <AlertCircle
              className="w-12 h-12"
              style={{ color: "#EF4444" }}
            />
          </div>
        </div>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: "#EF4444" }}
        >
          Maintenance Mode
        </h1>

        <p
          className="text-lg mb-8"
          style={{ color: colors.text }}
        >
          {maintenanceMessage}
        </p>

        <div
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderColor: "rgba(59, 130, 246, 0.3)",
          }}
        >
          <p
            className="text-sm"
            style={{ color: colors.textSecondary }}
          >
            We'll be back online shortly. Thank you for your patience!
          </p>
        </div>

        {isAdmin && (
          <p
            className="text-xs mt-6"
            style={{ color: colors.textSecondary }}
          >
            Press <kbd style={{ backgroundColor: colors.sidebar, padding: "2px 6px", borderRadius: "4px" }}>Ctrl+F1</kbd> to access admin panel
          </p>
        )}
      </div>
    </div>
  );
}
