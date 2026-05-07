"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown, Clock, Zap, Monitor, Smartphone, Tv,
  Package, Flame, Cast, Film, CheckCircle2, Info, Key,
  Server, User,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

// ─── Types ────────────────────────────────────────────────────────────────────
type Difficulty = "Easy" | "Medium";
type DeviceData = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: string;
  iconBg: string;
  iconColor: string;
  apps: string[];
  difficulty: Difficulty;
  minutes: number;
  steps: { title: string; detail: string }[];
};

// ─── Device data ──────────────────────────────────────────────────────────────
const devices: DeviceData[] = [
  {
    id: "firestick",
    title: "Amazon Firestick",
    subtitle: "Fire TV Stick 4K / Lite / Max",
    icon: Flame,
    accent: "from-orange-500/10 to-amber-500/5",
    iconBg: "bg-orange-500/15 border-orange-500/30",
    iconColor: "text-orange-400",
    apps: ["IPTV Smarters Pro", "TiviMate"],
    difficulty: "Easy",
    minutes: 5,
    steps: [
      {
        title: "Enable Developer Options",
        detail: "Go to Settings → My Fire TV → Developer Options → Apps from Unknown Sources → turn it ON. This allows installing apps outside the Amazon Store.",
      },
      {
        title: "Install the Downloader app",
        detail: "From the Fire TV home screen, use the search icon and type 'Downloader'. Install the free app by AFTVnews — it lets you download any APK file.",
      },
      {
        title: "Download IPTV Smarters Pro APK",
        detail: "Open Downloader → tap the URL bar → type the download address for IPTV Smarters Pro APK (visit smarters.pro from your phone to get the latest link).",
      },
      {
        title: "Install the APK",
        detail: "After the download finishes, tap Install. If prompted about allowing Downloader to install unknown apps, tap Settings, enable it, and return to install.",
      },
      {
        title: "Log in with Xtream Codes",
        detail: "Open IPTV Smarters Pro → tap 'Login with Xtream Codes API' → enter any name, then your Server URL, Username, and Password (all provided in your purchase email).",
      },
      {
        title: "Start watching",
        detail: "Tap Add User — your channels, movies, series, and sports load automatically. Use the Fire TV remote to navigate between Live TV, VOD, and Series.",
      },
    ],
  },
  {
    id: "android-tv",
    title: "Android TV / Google TV",
    subtitle: "Chromecast with Google TV, Sony, TCL, Xiaomi",
    icon: Tv,
    accent: "from-green-500/10 to-emerald-500/5",
    iconBg: "bg-green-500/15 border-green-500/30",
    iconColor: "text-green-400",
    apps: ["TiviMate", "IPTV Smarters Pro"],
    difficulty: "Easy",
    minutes: 3,
    steps: [
      {
        title: "Open Google Play Store",
        detail: "Navigate to the Play Store icon on your Android TV or Google TV home screen and open it.",
      },
      {
        title: "Search for your IPTV app",
        detail: "Search 'TiviMate IPTV Player' for the best experience (free with optional paid companion app) or 'IPTV Smarters Pro' which is completely free.",
      },
      {
        title: "Install and open",
        detail: "Tap Install and wait. Once installed, open the app from your home screen.",
      },
      {
        title: "Select Xtream Codes API",
        detail: "On the welcome screen, choose 'Login with Xtream Codes API' as the connection method.",
      },
      {
        title: "Enter your credentials",
        detail: "Fill in your Server URL, Username, and Password — all three are in the email sent to you after purchase. Double-check for typos.",
      },
      {
        title: "Done",
        detail: "Tap Add User. Your full channel list, VOD library, and live sports load within seconds. Use your TV remote to browse.",
      },
    ],
  },
  {
    id: "apple-tv",
    title: "Apple TV",
    subtitle: "Apple TV 4K (1st, 2nd, 3rd gen) & Apple TV HD",
    icon: Tv,
    accent: "from-slate-500/10 to-zinc-500/5",
    iconBg: "bg-slate-500/15 border-slate-500/30",
    iconColor: "text-slate-300",
    apps: ["IPTV Smarters Pro", "GSE Smart IPTV"],
    difficulty: "Easy",
    minutes: 4,
    steps: [
      {
        title: "Open the App Store",
        detail: "From the Apple TV home screen, open the App Store app using your Siri Remote.",
      },
      {
        title: "Search and download IPTV Smarters",
        detail: "Search 'IPTV Smarters Pro' (paid, ~$4.99) or 'GSE Smart IPTV' (free). Both work great. Confirm download with Touch ID on your iPhone if prompted.",
      },
      {
        title: "Open the app",
        detail: "Launch the app from your Apple TV home screen after installation completes.",
      },
      {
        title: "Add your playlist",
        detail: "Tap 'Add User / Playlist' → select 'Xtream Codes API' from the connection options.",
      },
      {
        title: "Enter credentials",
        detail: "Use the Siri Remote to type your Server URL, Username, and Password. Tip: use the Apple TV remote app on your iPhone for faster text entry.",
      },
      {
        title: "Enjoy",
        detail: "Tap Save — all channels, series, and movies populate automatically. The Siri Remote swipe pad lets you navigate quickly.",
      },
    ],
  },
  {
    id: "iphone-ipad",
    title: "iPhone & iPad",
    subtitle: "iOS 14+ / iPadOS 14+",
    icon: Smartphone,
    accent: "from-blue-500/10 to-indigo-500/5",
    iconBg: "bg-blue-500/15 border-blue-500/30",
    iconColor: "text-blue-400",
    apps: ["IPTV Smarters Pro", "GSE Smart IPTV"],
    difficulty: "Easy",
    minutes: 3,
    steps: [
      {
        title: "Open the App Store",
        detail: "Tap the App Store icon on your iPhone or iPad home screen.",
      },
      {
        title: "Download IPTV Smarters Pro",
        detail: "Search 'IPTV Smarters' — the Pro version is ~$4.99. Alternatively, 'GSE Smart IPTV' is free and works equally well. Tap Get to install.",
      },
      {
        title: "Open the app",
        detail: "Launch IPTV Smarters Pro once the installation finishes.",
      },
      {
        title: "Tap Add User",
        detail: "Select 'Login with Xtream Codes API' from the connection type options.",
      },
      {
        title: "Enter your credentials",
        detail: "Copy-paste your Server URL, Username, and Password from your InfinityTV purchase email — copy-pasting avoids typos.",
      },
      {
        title: "Watch on the go",
        detail: "Your full channel list loads instantly. Stream anywhere over Wi-Fi or mobile data. Cast to your Apple TV using AirPlay for the big screen experience.",
      },
    ],
  },
  {
    id: "android-mobile",
    title: "Android Phone & Tablet",
    subtitle: "Android 6.0 and above",
    icon: Smartphone,
    accent: "from-teal-500/10 to-green-500/5",
    iconBg: "bg-teal-500/15 border-teal-500/30",
    iconColor: "text-teal-400",
    apps: ["TiviMate", "IPTV Smarters Pro"],
    difficulty: "Easy",
    minutes: 3,
    steps: [
      {
        title: "Open Google Play Store",
        detail: "Tap the Play Store app on your Android phone or tablet.",
      },
      {
        title: "Install your IPTV app",
        detail: "Search 'IPTV Smarters Pro' (free, excellent) or 'TiviMate' (free with premium companion app). Both have millions of downloads.",
      },
      {
        title: "Open the app",
        detail: "Launch the installed app from your app drawer.",
      },
      {
        title: "Choose Xtream Codes API",
        detail: "On the first screen, tap 'Login with Xtream Codes API' as the connection method.",
      },
      {
        title: "Enter your InfinityTV credentials",
        detail: "Paste your Server URL, Username, and Password from your activation email. Tap Add User.",
      },
      {
        title: "Stream anywhere",
        detail: "All channels load in seconds. Cast to your TV using Chromecast or screen mirror to watch on the big screen.",
      },
    ],
  },
  {
    id: "pc-mac",
    title: "Windows & Mac",
    subtitle: "Desktop and laptop computers",
    icon: Monitor,
    accent: "from-primary/10 to-violet-500/5",
    iconBg: "bg-primary/15 border-primary/30",
    iconColor: "text-primary",
    apps: ["IPTV Smarters Pro", "VLC Media Player"],
    difficulty: "Easy",
    minutes: 5,
    steps: [
      {
        title: "Download IPTV Smarters Pro",
        detail: "Windows: search 'IPTV Smarters Pro' in the Microsoft Store (free). Mac: visit the official site to download the desktop version.",
      },
      {
        title: "Alternative: VLC Media Player",
        detail: "VLC is free, works on both Windows and Mac, and supports M3U playlists. Download from videolan.org if you prefer a lightweight option.",
      },
      {
        title: "Add your account (IPTV Smarters)",
        detail: "Open IPTV Smarters → click 'Login with Xtream Codes API' → enter your Server URL, Username, and Password from your email.",
      },
      {
        title: "Or add M3U to VLC",
        detail: "In VLC: go to Media → Open Network Stream (Ctrl+N) → paste your M3U URL → click Play. Channels appear in the playlist sidebar.",
      },
      {
        title: "Use EPG for TV guide",
        detail: "IPTV Smarters supports full EPG (electronic program guide) so you can see what's on. VLC doesn't show EPG — use IPTV Smarters for the full experience.",
      },
      {
        title: "Connect to your TV",
        detail: "Plug your laptop into your TV via HDMI for a cinema experience. Or use Google Cast from Chrome to stream wirelessly to a Chromecast.",
      },
    ],
  },
  {
    id: "smart-tv",
    title: "Smart TV",
    subtitle: "Samsung, LG, Hisense, Philips, Panasonic",
    icon: Tv,
    accent: "from-purple-500/10 to-fuchsia-500/5",
    iconBg: "bg-purple-500/15 border-purple-500/30",
    iconColor: "text-purple-400",
    apps: ["Smart IPTV", "SS IPTV"],
    difficulty: "Medium",
    minutes: 7,
    steps: [
      {
        title: "Open your TV App Store",
        detail: "Samsung: press the Home button → Apps → Search. LG: press Home → LG Content Store → search for the app.",
      },
      {
        title: "Install Smart IPTV or SS IPTV",
        detail: "Smart IPTV is available on Samsung and LG. SS IPTV works on a wider range of Smart TVs. Smart IPTV has a one-time $5.49 activation fee.",
      },
      {
        title: "Note your TV's MAC address",
        detail: "Open the installed app on your TV — it will display a MAC address on screen. Write it down or take a photo with your phone.",
      },
      {
        title: "Activate from your phone or PC",
        detail: "Visit siptv.app (for Smart IPTV) or ssiptv.app (for SS IPTV) from any browser. Create a free account and log in.",
      },
      {
        title: "Enter your MAC and M3U URL",
        detail: "Paste your TV's MAC address and your InfinityTV M3U URL into the activation page, then click Save / Update.",
      },
      {
        title: "Reload the app on your TV",
        detail: "Press the Reload button in the app or close and reopen it. All your channels load with full EPG (TV guide) data.",
      },
    ],
  },
  {
    id: "mag-box",
    title: "MAG Box",
    subtitle: "MAG 254, 256, 322, 324, 351, 420, 424",
    icon: Package,
    accent: "from-red-500/10 to-rose-500/5",
    iconBg: "bg-red-500/15 border-red-500/30",
    iconColor: "text-red-400",
    apps: ["Built-in Portal (no app needed)"],
    difficulty: "Easy",
    minutes: 3,
    steps: [
      {
        title: "Open Settings",
        detail: "Press the Menu button on your MAG remote → navigate to System Settings.",
      },
      {
        title: "Go to Servers → Portals",
        detail: "Inside System Settings, select Servers → then Portals.",
      },
      {
        title: "Enter portal name",
        detail: "In the 'Portal 1 Name' field, type: InfinityTV (or any name you prefer).",
      },
      {
        title: "Enter portal URL",
        detail: "In 'Portal 1 URL', type the portal URL exactly as given in your activation email. Even one wrong character will prevent it from loading.",
      },
      {
        title: "Save and restart",
        detail: "Press OK to save → return to the main menu → select Restart Portal (or unplug/replug your MAG Box).",
      },
      {
        title: "Done — no app needed",
        detail: "The portal loads automatically with your full channel list, VOD, and series. No app installation required — it's all built into the MAG Box system.",
      },
    ],
  },
  {
    id: "roku",
    title: "Roku",
    subtitle: "Roku Stick, Roku Express, Roku Ultra, Roku TV",
    icon: Cast,
    accent: "from-violet-500/10 to-purple-500/5",
    iconBg: "bg-violet-500/15 border-violet-500/30",
    iconColor: "text-violet-400",
    apps: ["Screen Mirror (Android)", "Cast from Chrome (PC/Mac)"],
    difficulty: "Medium",
    minutes: 5,
    steps: [
      {
        title: "Enable Screen Mirroring on Roku",
        detail: "On your Roku device: go to Settings → System → Screen Mirroring → set to Always Allow. This is the most reliable method since Roku doesn't support IPTV apps natively.",
      },
      {
        title: "Install IPTV app on your Android phone",
        detail: "Download IPTV Smarters Pro or TiviMate from the Play Store on your Android phone. Log in with your InfinityTV credentials.",
      },
      {
        title: "Mirror from Android to Roku",
        detail: "On your Android phone: go to Settings → Connected Devices (or Display) → Cast / Screen Mirror → select your Roku from the list.",
      },
      {
        title: "Open IPTV app on your phone",
        detail: "Once mirroring starts, open IPTV Smarters on your phone. The stream appears full-screen on your Roku TV. Use your phone as the remote.",
      },
      {
        title: "Alternative: Cast from Chrome (PC/Mac)",
        detail: "Open Chrome → open your InfinityTV web player URL → click the 3-dot menu → Cast → select your Roku. This works for web-based streams.",
      },
      {
        title: "For the best Roku experience",
        detail: "Consider adding a Firestick or Chromecast with Google TV to the same TV's HDMI port — they offer native IPTV app support without mirroring.",
      },
    ],
  },
  {
    id: "kodi",
    title: "Kodi",
    subtitle: "Windows, Mac, Android, Linux, Raspberry Pi",
    icon: Film,
    accent: "from-sky-500/10 to-blue-500/5",
    iconBg: "bg-sky-500/15 border-sky-500/30",
    iconColor: "text-sky-400",
    apps: ["PVR IPTV Simple Client (built-in)"],
    difficulty: "Medium",
    minutes: 8,
    steps: [
      {
        title: "Download and install Kodi",
        detail: "Visit kodi.tv and download the latest version for your platform (Windows, macOS, Android, etc.). It is completely free and open-source.",
      },
      {
        title: "Open Add-ons",
        detail: "From the Kodi home screen, click the Add-ons icon (the open box icon in the top-left sidebar).",
      },
      {
        title: "Install PVR IPTV Simple Client",
        detail: "Go to Install from Repository → Kodi Add-on Repository → PVR Clients → PVR IPTV Simple Client → Install. Wait for the 'Add-on installed' notification.",
      },
      {
        title: "Configure the add-on",
        detail: "After installation, click Configure. Under the General tab, set Location to 'Remote path (Internet address)'.",
      },
      {
        title: "Paste your M3U URL",
        detail: "In the M3U Playlist URL field, paste your InfinityTV M3U link (included in your activation email). Click OK to save.",
      },
      {
        title: "Add EPG and restart",
        detail: "Optional but recommended: under EPG Settings, paste your XMLTV EPG URL for a full TV guide. Restart Kodi — channels appear under Live TV in the main menu.",
      },
    ],
  },
];

// ─── Device card ──────────────────────────────────────────────────────────────
function DeviceCard({ device, index }: { device: DeviceData; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = device.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors duration-300 shadow-card flex flex-col"
    >
      {/* Card header */}
      <div className={`p-6 bg-gradient-to-br ${device.accent} border-b border-border/50`}>
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${device.iconBg}`}>
            <Icon size={26} className={device.iconColor} />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-heading font-bold text-foreground text-lg leading-tight">{device.title}</h2>
            <p className="text-muted-foreground text-xs mt-0.5 leading-snug">{device.subtitle}</p>
            <div className="flex flex-wrap items-center gap-1.5 mt-3">
              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                device.difficulty === "Easy"
                  ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                  : "bg-amber-500/10 border-amber-500/25 text-amber-400"
              }`}>
                <Zap size={9} className="fill-current" />
                {device.difficulty}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                <Clock size={9} />
                ~{device.minutes} min
              </span>
            </div>
          </div>
        </div>

        {/* Recommended apps */}
        <div className="mt-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1.5">
            Recommended App
          </p>
          <div className="flex flex-wrap gap-1.5">
            {device.apps.map((app) => (
              <span
                key={app}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-background/60 border border-border/80 text-foreground/80"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Steps toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors duration-200 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">
          {open ? "Hide" : "View"} {device.steps.length} Setup Steps
        </span>
        <ChevronDown
          size={16}
          className={`text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Steps — CSS grid accordion (no JS height calc) */}
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 border-t border-border/40 pt-5 space-y-4">
            {device.steps.map((step, i) => (
              <div key={i} className="flex gap-3.5">
                <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${device.iconBg} ${device.iconColor}`}>
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{step.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InstallationTutorial() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-14 pb-12 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
        <div className="container relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Step-by-Step Guides</p>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              InfinityTV <span className="text-gradient">Setup Guide</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Full installation instructions for every device. Pick your device and follow the steps — you'll be streaming in under 5 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Tv, label: "10 Devices Supported" },
                { icon: Clock, label: "~3 Min Average Setup" },
                { icon: CheckCircle2, label: "No Tech Skills Needed" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon size={14} className="text-primary shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before you start */}
      <section className="py-5 border-b border-border bg-primary/5">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
              <Info size={17} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">What you need before starting</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                After your purchase, you receive an email with your credentials. Keep it handy — every guide below requires these 3 items:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Server, label: "Server URL" },
                  { icon: User, label: "Username" },
                  { icon: Key, label: "Password" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    <Icon size={11} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device grid */}
      <section className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {devices.map((device, i) => (
              <DeviceCard key={device.id} device={device} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
