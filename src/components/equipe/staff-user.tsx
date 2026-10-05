import { useState, useSyncExternalStore } from "react";
import { authEnabled, signOut } from "@/lib/auth/client";
import { hasGateSessionMarker } from "@/lib/auth/gate-session-marker";
import { useCurrentUser } from "@/lib/auth/use-current-user";

const subscribeToNothing = () => () => {};
const noGateSessionOnServer = () => false;

export function StaffUser() {
  const user = useCurrentUser();
  const [signingOut, setSigningOut] = useState(false);
  const gateSession = useSyncExternalStore(
    subscribeToNothing,
    hasGateSessionMarker,
    noGateSessionOnServer,
  );
  if (!user) return null;
  const label = user.displayName ?? user.primaryEmail ?? "Compte";
  return (
    <div className="flex items-center gap-2">
      {user.profileImageUrl ? (
        <img
          src={user.profileImageUrl}
          alt=""
          className="size-8 rounded-full object-cover"
        />
      ) : (
        <span className="grid size-8 place-items-center rounded-full bg-lime text-xs font-semibold text-lime-ink">
          {label.charAt(0).toUpperCase()}
        </span>
      )}
      <span className="hidden max-w-40 truncate text-sm sm:inline">{label}</span>
      {authEnabled && !gateSession ? (
        <button
          type="button"
          disabled={signingOut}
          onClick={() => {
            setSigningOut(true);
            void signOut().catch(() => setSigningOut(false));
          }}
          className="text-sm text-mist underline-offset-4 hover:underline disabled:cursor-wait"
        >
          {signingOut ? "Déconnexion…" : "Se déconnecter"}
        </button>
      ) : null}
    </div>
  );
}
