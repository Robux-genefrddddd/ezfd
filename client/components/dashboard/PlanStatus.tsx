import { ChevronRight } from "lucide-react";
import { getThemeColors } from "@/lib/theme-colors";

interface UserPlan {
  type: "free" | "premium";
  storageLimit: number;
  storageUsed: number;
  validatedAt?: string;
}

interface PlanStatusProps {
  plan: UserPlan;
  theme: string;
  onUpgradeClick: () => void;
}

export function PlanStatus({ plan, theme, onUpgradeClick }: PlanStatusProps) {
  const colors = getThemeColors(theme);
  const storageLimitMB = plan.storageLimit / (1024 * 1024);
  const storageUsedMB = plan.storageUsed / (1024 * 1024);
  const storagePercentage = (plan.storageUsed / plan.storageLimit) * 100;
  const isPremium = plan.type === "premium";

  return (
    <div
      className="rounded-lg border p-6 mb-6"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold" style={{ color: colors.text }}>
            {isPremium ? "Premium Plan" : "Free Plan"}
          </h3>
          <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
            {isPremium
              ? "Enjoy unlimited storage and advanced features"
              : "Upgrade to Premium for more storage"}
          </p>
        </div>
        {!isPremium && (
          <button
            onClick={onUpgradeClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-80"
            style={{
              backgroundColor: colors.accentLight,
              color: colors.primary,
            }}
          >
            Upgrade
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Storage Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p
            className="text-sm font-medium"
            style={{
              color: colors.textSecondary,
            }}
          >
            Storage Used
          </p>
          <p
            className="text-sm font-semibold"
            style={{
              color: colors.text,
            }}
          >
            {storageUsedMB.toFixed(2)} MB / {storageLimitMB.toFixed(0)} MB
          </p>
        </div>
        <div
          className="w-full h-2 rounded-full overflow-hidden"
          style={{
            backgroundColor: colors.accentLight,
          }}
        >
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{
              width: `${Math.min(storagePercentage, 100)}%`,
              backgroundColor:
                storagePercentage > 90
                  ? "#EF4444"
                  : storagePercentage > 70
                    ? "#F59E0B"
                    : colors.primary,
            }}
          ></div>
        </div>
      </div>

      {/* Premium Badge */}
      {isPremium && plan.validatedAt && (
        <div
          className="mt-4 px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            color: "#22C55E",
          }}
        >
          <span>✓</span>
          <span>Premium activated on {new Date(plan.validatedAt).toLocaleDateString()}</span>
        </div>
      )}
    </div>
  );
}
