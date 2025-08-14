"use client";

type Buyer = {
  id: string;
  name: string;
  avatar: string;
  budget: string;
  experience: string;
  preferredIndustry: string;
  location: string;
  involvement: string;
};

type SellerProfile = {
  businessName?: string;
  industry?: string;
  askingPrice?: number;
  uniqueSellingPoint?: string;
  buyerType?: string;
};

type Match = {
  id: string;
  buyerId: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: number;
};

type Activity = {
  id: string;
  type:
    | "buyer_accepted"
    | "buyer_rejected"
    | "acquisition_created"
    | "nda_signed"
    | "doc_uploaded";
  timestamp: number;
  details?: Record<string, unknown>;
};

const KEY = {
  BUYERS: "df:buyers",
  MATCHES: "df:matches",
  SELLER: "df:seller",
  ACTIVITY: "df:activity",
};

const isBrowser = () => typeof window !== "undefined" && typeof localStorage !== "undefined";

function read<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (!isBrowser()) return;
  localStorage.setItem(key, JSON.stringify(value));
}

function pushActivity(entry: Activity) {
  const list = read<Activity[]>(KEY.ACTIVITY, []);
  list.unshift(entry);
  write(KEY.ACTIVITY, list);
}

export function logActivity(
  type: Activity["type"],
  details?: Record<string, unknown>
): Activity | null {
  if (!isBrowser()) return null;
  const now = Date.now();
  const id = `${type}-${now}-${Math.random().toString(36).slice(2, 8)}`;
  const entry: Activity = { id, type, timestamp: now, details };
  pushActivity(entry);
  return entry;
}

export function seedBuyersIfEmpty() {
  const buyers = read<Buyer[]>(KEY.BUYERS, []);
  if (buyers.length === 0) {
    const mock: Buyer[] = [
      {
        id: "1",
        name: "John Acquirer",
        avatar: "https://i.pravatar.cc/80?img=1",
        budget: "$1M - $5M",
        experience: "5 years in SaaS acquisitions",
        preferredIndustry: "Tech/SaaS",
        location: "New York, USA",
        involvement: "Owner-operator",
      },
      {
        id: "2",
        name: "Sarah Capital",
        avatar: "https://i.pravatar.cc/80?img=2",
        budget: "$500K - $2M",
        experience: "Angel investor in retail",
        preferredIndustry: "Retail/E-commerce",
        location: "Los Angeles, USA",
        involvement: "Passive investor",
      },
    ];
    write(KEY.BUYERS, mock);
  }
}

export function getBuyers(): Buyer[] {
  return read<Buyer[]>(KEY.BUYERS, []);
}

export function getBuyer(id: string): Buyer | undefined {
  return getBuyers().find((b) => b.id === id);
}

export function upsertSellerProfile(profile: SellerProfile) {
  const current = read<SellerProfile>(KEY.SELLER, {});
  write(KEY.SELLER, { ...current, ...profile });
}

export function getSellerProfile(): SellerProfile {
  return read<SellerProfile>(KEY.SELLER, {});
}

export function createMatch(buyerId: string): Match {
  const now = Date.now();
  const match: Match = { id: `${buyerId}-${now}`, buyerId, status: "accepted", createdAt: now };
  const matches = read<Match[]>(KEY.MATCHES, []);
  matches.unshift(match);
  write(KEY.MATCHES, matches);
  logActivity("acquisition_created", { matchId: match.id, buyerId });
  return match;
}


export function getMatches(): Match[] {
  return read<Match[]>(KEY.MATCHES, []);
}

export function clearAll() {
  if (!isBrowser()) return;
  localStorage.removeItem(KEY.BUYERS);
  localStorage.removeItem(KEY.MATCHES);
  localStorage.removeItem(KEY.SELLER);
  localStorage.removeItem(KEY.ACTIVITY);
}

// Types are exported once at the bottom alongside Activity
export function getActivity(limit?: number): Activity[] {
  const list = read<Activity[]>(KEY.ACTIVITY, []);
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function acceptBuyer(buyerId: string): Match {
  logActivity("buyer_accepted", { buyerId });
  return createMatch(buyerId);
}

export function rejectBuyer(buyerId: string): void {
  logActivity("buyer_rejected", { buyerId });
}

export type { Buyer, SellerProfile, Match, Activity };
