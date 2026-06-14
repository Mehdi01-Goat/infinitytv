"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Clock, Zap, Monitor, Tv, Package, Film,
  Info, Key, Server, User, MessageCircle, ChevronLeft, Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

// ─── Brand SVG icons ──────────────────────────────────────────────────────────
function BrandIcon({ id, size = 26 }: { id: string; size?: number }) {
  const s = size;
  switch (id) {
    case "amazon":
      return (
        <svg width={s} height={s} viewBox="0 0 448 512" fill="#FF9900" aria-hidden="true">
          <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
        </svg>
      );
    case "android":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="#3DDC84" aria-hidden="true">
          <path d="M18.44 5.56c-.68 1.17-1.35 2.33-2.03 3.5-.04-.02-.07-.03-.11-.04-1.82-.7-3.48-.8-4.42-.79-1.86.02-3.35.46-4.26.82-.08-.15-1.75-3.02-2.02-3.49a1.15 1.15 0 0 0-.14-.19c-.33-.36-.91-.49-1.38-.2-.48.28-.71.94-.39 1.5 1.95 3.37-.1-.22 1.95 3.36.02.03-.49.26-1.39 1.02C2.9 12.18.45 14.77 0 18.99h24c-.12-1.11-.37-2.1-.75-3.07-.74-1.91-1.84-3.29-2.74-4.18a12.1 12.1 0 0 0-2.13-1.69c.66-1.12 1.31-2.26 1.96-3.38.21-.36.19-.8-.01-1.12a1.1 1.1 0 0 0-.85-.53c-.52-.05-.94.31-1.05.54zm-.04 8.46c.39.59.32 1.33-.16 1.65-.48.32-1.19.1-1.58-.49-.39-.59-.32-1.33.16-1.65.47-.32 1.18-.11 1.58.49zM7.21 13.53c.48.32.55 1.06.16 1.65-.39.59-1.1.81-1.58.49-.48-.32-.55-1.06-.16-1.65.4-.6 1.11-.81 1.58-.49z" />
        </svg>
      );
    case "android-tv":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="#4285F4" aria-hidden="true">
          <path d="M3.11 3.245A3.117 3.117 0 0 0 0 6.355V13.7a1.87 1.87 0 0 0 1.878 1.878h2.588V5.124c0-.73.313-1.399.814-1.879zm3.944 0a1.87 1.87 0 0 0-1.879 1.879V7.71h16.947v.021c.73 0 1.398.313 1.878.814v-2.19a3.117 3.117 0 0 0-3.11-3.11zm12.48 5.176v10.455c0 .73-.313 1.399-.814 1.879h2.17a3.117 3.117 0 0 0 3.11-3.11V10.3a1.87 1.87 0 0 0-1.878-1.878zM0 15.475v2.17a3.117 3.117 0 0 0 3.11 3.11h13.836a1.87 1.87 0 0 0 1.878-1.879V16.29H1.878c-.73 0-1.398-.314-1.878-.814" />
        </svg>
      );
    case "roku":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="#662D91" aria-hidden="true">
          <path d="M16.34 9.853l-2.254 2.254v-2.26H12.13v5.744h1.957v-2.33l2.353 2.33h2.46l-2.988-2.99 2.477-2.476v3.411c0 1.133.679 2.177 2.393 2.177.815 0 1.56-.462 1.922-.88l.88.759H24v-5.74h-1.951v3.718c-.22.384-.528.627-1.002.627-.482 0-.703-.286-.703-1.198V9.853zm-4.591 2.869A3.004 3.004 0 1 1 8.738 9.73a2.997 2.997 0 0 1 3.011 2.99m-3.011-1.57c-.518 0-.956.704-.956 1.572 0 .867.438 1.57.956 1.57.528 0 .968-.702.968-1.57 0-.869-.438-1.572-.968-1.572zm-2.206 4.447H4.313L2.55 13.153h-.594v2.44H0V8.26h2.8c1.616 0 2.935 1.1 2.935 2.45 0 .826-.505 1.562-1.273 2.013l2.07 2.875m-2.75-4.888A1.226 1.226 0 0 0 2.56 9.478h-.604v2.453h.605a1.225 1.225 0 0 0 1.22-1.221Z" />
        </svg>
      );
    case "apple":
      return (
        <svg width={s} height={s} viewBox="0 0 384 512" fill="currentColor" className="text-slate-300" aria-hidden="true">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      );
    case "windows":
      return (
        <svg width={s} height={s} viewBox="0 0 448 512" fill="#00A4EF" aria-hidden="true">
          <path d="M0 93.7l183.6-25.3v177H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
        </svg>
      );
    default:
      return <Tv size={s} className="text-muted-foreground" />;
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────
type AppData = {
  id: string;
  name: string;
  note: string;
  steps: { title: string; detail: string }[];
};

type DeviceData = {
  id: string;
  title: string;
  subtitle: string;
  brandIcon: string;
  popular?: boolean;
  difficulty: "Easy" | "Medium";
  minutes: number;
  apps: AppData[];
};

// ─── Device + app data ────────────────────────────────────────────────────────
const devices: DeviceData[] = [
  {
    id: "firestick",
    title: "Amazon Fire TV",
    subtitle: "Fire Stick · Fire TV · Cube",
    brandIcon: "amazon",
    popular: true,
    difficulty: "Easy",
    minutes: 5,
    apps: [
      {
        id: "smarters",
        name: "IPTV Smarters Pro",
        note: "Free · Most popular",
        steps: [
          { title: "Enable Developer Options", detail: "Go to Settings → My Fire TV → Developer Options → Apps from Unknown Sources → turn it ON. This lets you install apps outside the Amazon Store." },
          { title: "Install the Downloader app", detail: "From the Fire TV home screen, search for 'Downloader'. Install the free app by AFTVnews — it lets you download any APK file." },
          { title: "Download IPTV Smarters Pro", detail: "Open Downloader → tap the URL bar → type the download link for IPTV Smarters Pro APK (visit smarters.pro on your phone for the latest link)." },
          { title: "Install the APK", detail: "Once downloaded, tap Install. If prompted about allowing Downloader to install unknown apps, tap Settings, enable it, then return to install." },
          { title: "Log in with Xtream Codes", detail: "Open IPTV Smarters Pro → tap 'Login with Xtream Codes API' → enter any name, then your Server URL, Username, and Password from your purchase email." },
          { title: "Start watching", detail: "Tap Add User — channels, movies, series, and sports load automatically. Use your Fire TV remote to navigate between sections." },
        ],
      },
      {
        id: "tivimate",
        name: "TiviMate",
        note: "Free · Best interface",
        steps: [
          { title: "Enable Developer Options", detail: "Go to Settings → My Fire TV → Developer Options → Apps from Unknown Sources → turn it ON." },
          { title: "Install the Downloader app", detail: "Search for 'Downloader' on the Fire TV home screen. Install the free app by AFTVnews." },
          { title: "Download TiviMate APK", detail: "Open Downloader → tap the URL bar → type the TiviMate APK link. Visit tivimate.com from your phone to get the latest direct download link." },
          { title: "Install TiviMate", detail: "Once downloaded, tap Install. Allow Downloader to install unknown apps when prompted, then return to complete the installation." },
          { title: "Add your playlist", detail: "Open TiviMate → tap 'Add Playlist' → select 'Xtream Codes API' → enter your Server URL, Username, and Password from your purchase email." },
          { title: "Start watching", detail: "Tap Add — all your channels, movies, and series load. Navigate Live TV, VOD, and Series from the main menu." },
        ],
      },
    ],
  },
  {
    id: "android-phone",
    title: "Android Phone & Tablet",
    subtitle: "Android 5.0 and newer",
    brandIcon: "android",
    difficulty: "Easy",
    minutes: 3,
    apps: [
      {
        id: "smarters",
        name: "IPTV Smarters Pro",
        note: "Free · Simple setup",
        steps: [
          { title: "Open Google Play Store", detail: "Tap the Play Store app on your Android phone or tablet." },
          { title: "Install IPTV Smarters Pro", detail: "Search 'IPTV Smarters Pro' and install the free app. It has millions of downloads and works great." },
          { title: "Open the app", detail: "Launch IPTV Smarters Pro from your app drawer once installation is done." },
          { title: "Select Xtream Codes API", detail: "On the welcome screen, tap 'Login with Xtream Codes API' as the connection method." },
          { title: "Enter your credentials", detail: "Paste your Server URL, Username, and Password from your activation email. Tap Add User." },
          { title: "Stream anywhere", detail: "All channels load in seconds. Use your phone on the go, or cast to your TV via Chromecast for the big screen." },
        ],
      },
      {
        id: "tivimate",
        name: "TiviMate",
        note: "Free · Best interface",
        steps: [
          { title: "Open Google Play Store", detail: "Tap the Play Store app on your Android phone or tablet." },
          { title: "Install TiviMate", detail: "Search 'TiviMate IPTV Player' and install the free app." },
          { title: "Open TiviMate", detail: "Launch TiviMate from your app drawer." },
          { title: "Tap Add Playlist", detail: "On the home screen, tap 'Add Playlist' to get started." },
          { title: "Select Xtream Codes API", detail: "Choose 'Xtream Codes API' and enter your Server URL, Username, and Password from your purchase email." },
          { title: "Done", detail: "Tap Add — your full library loads. Navigate between Live TV, VOD, and Series from the bottom tabs." },
        ],
      },
    ],
  },
  {
    id: "android-tv",
    title: "Android TV / Google TV",
    subtitle: "Shield · Chromecast · boxes",
    brandIcon: "android-tv",
    difficulty: "Easy",
    minutes: 3,
    apps: [
      {
        id: "tivimate",
        name: "TiviMate",
        note: "Free · Best for TV",
        steps: [
          { title: "Open Google Play Store", detail: "Navigate to the Play Store on your Android TV or Google TV home screen." },
          { title: "Search for TiviMate", detail: "Search 'TiviMate IPTV Player' and install the free app." },
          { title: "Open TiviMate", detail: "Launch TiviMate from your home screen after installation." },
          { title: "Add Playlist", detail: "On the welcome screen, tap 'Add Playlist'." },
          { title: "Enter Xtream Codes", detail: "Select 'Xtream Codes API' → enter your Server URL, Username, and Password from your purchase email." },
          { title: "Done", detail: "Tap Add — all channels load automatically. Use your TV remote to browse Live TV, Movies, and Series." },
        ],
      },
      {
        id: "smarters",
        name: "IPTV Smarters Pro",
        note: "Free · Works on any TV",
        steps: [
          { title: "Open Google Play Store", detail: "Navigate to the Play Store on your Android TV or Google TV home screen." },
          { title: "Search for IPTV Smarters Pro", detail: "Search 'IPTV Smarters Pro' and install the free app." },
          { title: "Open the app", detail: "Launch it from your home screen once installed." },
          { title: "Login with Xtream Codes API", detail: "On the welcome screen, select 'Login with Xtream Codes API'." },
          { title: "Enter your credentials", detail: "Fill in your Server URL, Username, and Password — all three are in the email sent after your purchase." },
          { title: "Done", detail: "Tap Add User. Your full channel list, VOD library, and sports load within seconds." },
        ],
      },
    ],
  },
  {
    id: "roku",
    title: "Roku",
    subtitle: "Stick · Express · Roku TV",
    brandIcon: "roku",
    difficulty: "Medium",
    minutes: 5,
    apps: [
      {
        id: "mirror",
        name: "Screen Mirror (Android)",
        note: "Free · Easy",
        steps: [
          { title: "Enable Screen Mirroring on Roku", detail: "On your Roku: go to Settings → System → Screen Mirroring → set to Always Allow." },
          { title: "Install IPTV app on Android phone", detail: "Download IPTV Smarters Pro or TiviMate from the Play Store. Log in with your InfinityTV credentials." },
          { title: "Start mirroring", detail: "On your Android phone: Settings → Connected Devices → Cast → select your Roku from the list." },
          { title: "Open IPTV app", detail: "Once mirroring starts, open IPTV Smarters on your phone. The stream appears full-screen on your Roku TV." },
          { title: "Use your phone as remote", detail: "Control playback from your phone. The screen mirrors everything you see — tap a channel to start watching." },
          { title: "Best Roku tip", detail: "For a better experience, consider a Firestick or Chromecast with Google TV plugged into your TV's HDMI — they support native IPTV apps." },
        ],
      },
      {
        id: "cast",
        name: "Cast from Chrome (PC/Mac)",
        note: "Free · No install needed",
        steps: [
          { title: "Enable Screen Mirroring on Roku", detail: "On your Roku: go to Settings → System → Screen Mirroring → set to Always Allow." },
          { title: "Open Chrome on your PC or Mac", detail: "Open Google Chrome on your computer (download it from google.com/chrome if needed)." },
          { title: "Open your IPTV stream", detail: "Navigate to your InfinityTV web player URL in Chrome." },
          { title: "Cast to Roku", detail: "Click the 3-dot menu (⋮) in Chrome → Cast → select your Roku device from the list." },
          { title: "Start watching", detail: "The stream appears on your Roku TV. Control it from your computer." },
          { title: "Best Roku tip", detail: "For the best experience, use a Firestick or Chromecast with Google TV — they support native IPTV apps without casting." },
        ],
      },
    ],
  },
  {
    id: "iphone",
    title: "iPhone & iPad",
    subtitle: "iOS 14+ / iPadOS 14+",
    brandIcon: "apple",
    difficulty: "Easy",
    minutes: 3,
    apps: [
      {
        id: "smarters",
        name: "IPTV Smarters Pro",
        note: "~$4.99 · Best option",
        steps: [
          { title: "Open the App Store", detail: "Tap the App Store icon on your iPhone or iPad home screen." },
          { title: "Install IPTV Smarters Pro", detail: "Search 'IPTV Smarters Pro' — it's ~$4.99. Tap Get to install." },
          { title: "Open the app", detail: "Launch IPTV Smarters Pro once installation finishes." },
          { title: "Login with Xtream Codes API", detail: "Tap 'Login with Xtream Codes API' on the welcome screen." },
          { title: "Enter your credentials", detail: "Copy-paste your Server URL, Username, and Password from your purchase email. Copy-pasting avoids typos." },
          { title: "Watch anywhere", detail: "Your full channel list loads instantly. Use AirPlay to cast to your Apple TV for the big screen experience." },
        ],
      },
      {
        id: "gse",
        name: "GSE Smart IPTV",
        note: "Free · Great alternative",
        steps: [
          { title: "Open the App Store", detail: "Tap the App Store icon on your iPhone or iPad home screen." },
          { title: "Install GSE Smart IPTV", detail: "Search 'GSE Smart IPTV' and install the free app. Tap Get." },
          { title: "Open the app", detail: "Launch GSE Smart IPTV once installed." },
          { title: "Add a new playlist", detail: "Tap the '+' button or 'Add Playlist' and select 'Xtream Codes Compatible'." },
          { title: "Enter your credentials", detail: "Fill in your Server URL, Username, and Password from your activation email. Tap Save." },
          { title: "Start watching", detail: "All channels, movies, and series load automatically. Use AirPlay to stream to your Apple TV or smart TV." },
        ],
      },
    ],
  },
  {
    id: "apple-tv",
    title: "Apple TV",
    subtitle: "Apple TV 4K & Apple TV HD",
    brandIcon: "apple",
    difficulty: "Easy",
    minutes: 4,
    apps: [
      {
        id: "smarters",
        name: "IPTV Smarters Pro",
        note: "~$4.99 · Best option",
        steps: [
          { title: "Open the App Store", detail: "From the Apple TV home screen, open the App Store using your Siri Remote." },
          { title: "Install IPTV Smarters Pro", detail: "Search 'IPTV Smarters Pro'. It's ~$4.99. Confirm your purchase with Touch ID on your iPhone if prompted." },
          { title: "Open the app", detail: "Launch IPTV Smarters Pro from your Apple TV home screen." },
          { title: "Add your playlist", detail: "Tap 'Add User / Playlist' → select 'Xtream Codes API'." },
          { title: "Enter credentials", detail: "Type your Server URL, Username, and Password. Tip: use the Apple TV Remote app on your iPhone for faster text entry." },
          { title: "Done", detail: "Tap Save — all channels, series, and movies populate automatically. The Siri Remote swipe pad lets you navigate quickly." },
        ],
      },
      {
        id: "gse",
        name: "GSE Smart IPTV",
        note: "Free · Good alternative",
        steps: [
          { title: "Open the App Store", detail: "From the Apple TV home screen, open the App Store using your Siri Remote." },
          { title: "Install GSE Smart IPTV", detail: "Search 'GSE Smart IPTV' and install the free app." },
          { title: "Open the app", detail: "Launch GSE Smart IPTV from your home screen." },
          { title: "Add a playlist", detail: "Tap the '+' button → select 'Xtream Codes Compatible'." },
          { title: "Enter credentials", detail: "Fill in your Server URL, Username, and Password from your purchase email. Tap Save." },
          { title: "Done", detail: "All channels and content load automatically. Use your Siri Remote to browse Live TV, Movies, and Series." },
        ],
      },
    ],
  },
  {
    id: "smart-tv",
    title: "Smart TV",
    subtitle: "Samsung · LG · Hisense · Philips",
    brandIcon: "tv",
    difficulty: "Medium",
    minutes: 7,
    apps: [
      {
        id: "smartiptv",
        name: "Smart IPTV",
        note: "One-time $5.49 fee",
        steps: [
          { title: "Open your TV App Store", detail: "Samsung: press Home → Apps → Search. LG: press Home → LG Content Store → search." },
          { title: "Install Smart IPTV", detail: "Search 'Smart IPTV' and install. Note: there is a one-time $5.49 activation fee after the 7-day trial." },
          { title: "Note your MAC address", detail: "Open the app on your TV — it shows a MAC address on screen. Write it down or photograph it with your phone." },
          { title: "Activate from phone or PC", detail: "Visit siptv.app from any browser, create a free account, and log in." },
          { title: "Enter MAC + M3U URL", detail: "Paste your TV's MAC address and your InfinityTV M3U URL, then click Save." },
          { title: "Reload app on TV", detail: "Press Reload in the app or close and reopen it. All channels load with full EPG data." },
        ],
      },
      {
        id: "ssiptv",
        name: "SS IPTV",
        note: "Free · More compatible",
        steps: [
          { title: "Open your TV App Store", detail: "Samsung: Home → Apps → Search. LG: Home → LG Content Store. For Hisense/Philips, check your specific TV's app store." },
          { title: "Install SS IPTV", detail: "Search 'SS IPTV' and install. It's free and works on a wide range of Smart TVs." },
          { title: "Note your Device ID", detail: "Open SS IPTV on your TV — it shows a Device ID. Note it down or photograph it." },
          { title: "Activate from phone or PC", detail: "Visit ssiptv.app from any browser. Create a free account and log in." },
          { title: "Enter Device ID + M3U URL", detail: "Paste your Device ID and InfinityTV M3U URL, then click Save." },
          { title: "Reload on your TV", detail: "Close and reopen SS IPTV. All your channels appear with EPG guide data." },
        ],
      },
    ],
  },
  {
    id: "pc-mac",
    title: "Windows & Mac",
    subtitle: "Desktop and laptop",
    brandIcon: "windows",
    difficulty: "Easy",
    minutes: 5,
    apps: [
      {
        id: "smarters",
        name: "IPTV Smarters Pro",
        note: "Free · Full EPG guide",
        steps: [
          { title: "Download IPTV Smarters Pro", detail: "Windows: search 'IPTV Smarters Pro' in the Microsoft Store (free). Mac: visit the official Smarters site for the desktop version." },
          { title: "Open the app", detail: "Launch IPTV Smarters Pro once installed." },
          { title: "Login with Xtream Codes API", detail: "Click 'Login with Xtream Codes API' on the welcome screen." },
          { title: "Enter your credentials", detail: "Fill in your Server URL, Username, and Password from your purchase email. Click Add User." },
          { title: "Browse your content", detail: "Your full channel list, movies, and series are all available. The EPG guide shows you what's on now and next." },
          { title: "Cast to your TV", detail: "Plug your laptop into your TV via HDMI, or use Google Cast from Chrome to stream wirelessly." },
        ],
      },
      {
        id: "vlc",
        name: "VLC Media Player",
        note: "Free · Lightweight",
        steps: [
          { title: "Download VLC", detail: "Visit videolan.org and download VLC for Windows or Mac. It's 100% free and open source." },
          { title: "Open VLC", detail: "Launch VLC once installed." },
          { title: "Open Network Stream", detail: "Go to Media → Open Network Stream (Ctrl+N on Windows, Cmd+N on Mac)." },
          { title: "Paste your M3U URL", detail: "Paste your InfinityTV M3U URL (from your activation email) into the URL field and click Play." },
          { title: "Browse channels", detail: "Channels appear in the playlist panel on the right. Double-click any channel to start watching." },
          { title: "Note", detail: "VLC doesn't display an EPG guide. For a full TV guide, use IPTV Smarters Pro instead — it shows what's on now and next for every channel." },
        ],
      },
    ],
  },
  {
    id: "mag-box",
    title: "MAG Box",
    subtitle: "MAG 254, 256, 322, 324, 420",
    brandIcon: "box",
    difficulty: "Easy",
    minutes: 3,
    apps: [
      {
        id: "portal",
        name: "Built-in Portal",
        note: "No app needed",
        steps: [
          { title: "Open Settings", detail: "Press the Menu button on your MAG remote → navigate to System Settings." },
          { title: "Go to Servers → Portals", detail: "Inside System Settings, select Servers → then Portals." },
          { title: "Enter portal name", detail: "In the 'Portal 1 Name' field, type: InfinityTV (or any name you like)." },
          { title: "Enter portal URL", detail: "In 'Portal 1 URL', enter the portal URL exactly as given in your activation email. One wrong character will prevent loading." },
          { title: "Save and restart", detail: "Press OK → return to main menu → select Restart Portal (or unplug and replug your MAG Box)." },
          { title: "Done", detail: "The portal loads automatically with your full channel list, movies, and series — no external app needed." },
        ],
      },
    ],
  },
  {
    id: "kodi",
    title: "Kodi",
    subtitle: "Windows · Mac · Android · Linux",
    brandIcon: "kodi",
    difficulty: "Medium",
    minutes: 8,
    apps: [
      {
        id: "pvr",
        name: "PVR IPTV Simple Client",
        note: "Free · Built-in add-on",
        steps: [
          { title: "Download and install Kodi", detail: "Visit kodi.tv and download the latest version for your platform. It's completely free." },
          { title: "Open Add-ons", detail: "From the Kodi home screen, click the Add-ons icon (open box icon in the top-left sidebar)." },
          { title: "Install PVR IPTV Simple Client", detail: "Go to Install from Repository → Kodi Add-on Repository → PVR Clients → PVR IPTV Simple Client → Install. Wait for the confirmation notification." },
          { title: "Configure the add-on", detail: "After install, click Configure. Under the General tab, set Location to 'Remote path (Internet address)'." },
          { title: "Paste your M3U URL", detail: "In the M3U Playlist URL field, paste your InfinityTV M3U link from your activation email. Click OK." },
          { title: "Restart and watch", detail: "Optional: paste your XMLTV EPG URL under EPG Settings for a full TV guide. Restart Kodi — channels appear under Live TV in the main menu." },
        ],
      },
    ],
  },
];

// ─── Step indicator ───────────────────────────────────────────────────────────
function StepIndicator({ step }: { step: 1 | 2 | 3 }) {
  const steps = [
    { n: 1 as const, label: "Device" },
    { n: 2 as const, label: "App" },
    { n: 3 as const, label: "Setup" },
  ];

  return (
    <ol className="flex items-center justify-center gap-2 sm:gap-3 mb-8">
      {steps.map((s, i) => {
        const isActive = step === s.n;
        const isDone = step > s.n;
        return (
          <React.Fragment key={s.n}>
            <li className="flex items-center gap-2">
              <span
                className={
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all " +
                  (isActive
                    ? "bg-gradient-to-r from-primary to-violet-400 text-white shadow-[0_0_0_4px_hsl(var(--primary)/0.18)]"
                    : isDone
                    ? "bg-primary text-white"
                    : "border border-border bg-card text-muted-foreground opacity-60")
                }
              >
                {isDone ? <Check size={14} /> : s.n}
              </span>
              <span
                className={
                  "text-sm hidden sm:inline " +
                  (isActive ? "font-semibold text-foreground" : "font-medium text-muted-foreground opacity-60")
                }
              >
                {s.label}
              </span>
            </li>
            {i < steps.length - 1 && <span className="h-px w-5 sm:w-8 bg-border shrink-0" aria-hidden="true" />}
          </React.Fragment>
        );
      })}
    </ol>
  );
}

// ─── Device card ──────────────────────────────────────────────────────────────
function DeviceCard({ device, onClick }: { device: DeviceData; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_44px_-14px_hsl(var(--primary)/0.3)]"
    >
      {device.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-violet-400 px-3 py-1 text-[10px] font-semibold text-white whitespace-nowrap shadow-lg">
          Most popular
        </span>
      )}
      <span className="inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-xl border border-border bg-secondary px-3 transition-colors group-hover:border-primary/30">
        <BrandIcon id={device.brandIcon} size={26} />
      </span>
      <span className="mt-3 text-sm font-semibold leading-tight text-foreground">{device.title}</span>
      <span className="mt-1 text-xs text-muted-foreground">{device.subtitle}</span>
      <div className="mt-2 flex items-center gap-1.5">
        <span
          className={
            "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border " +
            (device.difficulty === "Easy"
              ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
              : "bg-amber-500/10 border-amber-500/25 text-amber-400")
          }
        >
          <Zap size={8} className="fill-current" />
          {device.difficulty}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
          <Clock size={8} />
          ~{device.minutes} min
        </span>
      </div>
    </button>
  );
}

// ─── App card ─────────────────────────────────────────────────────────────────
function AppCard({ app, onClick }: { app: AppData; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_44px_-14px_hsl(var(--primary)/0.3)]"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:bg-primary/10">
        <Monitor size={24} />
      </span>
      <span className="mt-3 text-sm font-semibold text-foreground">{app.name}</span>
      <span className="mt-1 text-xs text-muted-foreground">{app.note}</span>
    </button>
  );
}

// ─── Setup steps ──────────────────────────────────────────────────────────────
function SetupSteps({ steps }: { steps: { title: string; detail: string }[] }) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4 relative">
          {i < steps.length - 1 && <div className="absolute left-5 top-10 bottom-0 w-px bg-border/50" />}
          <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0 z-10">
            {i + 1}
          </div>
          <div className="pb-6 flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground leading-snug pt-2">{step.title}</p>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InstallationTutorial() {
  const [wizardStep, setWizardStep] = useState<1 | 2 | 3>(1);
  const [selectedDevice, setSelectedDevice] = useState<DeviceData | null>(null);
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const [issuesOpen, setIssuesOpen] = useState(false);

  function handleDeviceClick(device: DeviceData) {
    setSelectedDevice(device);
    if (device.apps.length === 1) {
      setSelectedApp(device.apps[0]);
      setWizardStep(3);
    } else {
      setSelectedApp(null);
      setWizardStep(2);
    }
    setTimeout(() => {
      document.getElementById("wizard-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function handleAppClick(app: AppData) {
    setSelectedApp(app);
    setWizardStep(3);
    setTimeout(() => {
      document.getElementById("wizard-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function goBack() {
    if (wizardStep === 3 && selectedDevice && selectedDevice.apps.length > 1) {
      setWizardStep(2);
      setSelectedApp(null);
    } else {
      setWizardStep(1);
      setSelectedDevice(null);
      setSelectedApp(null);
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-14 pb-12 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
        <div className="container relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Step-by-step guides</p>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              Easy Setup on <span className="text-gradient">Any Device</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Pick a player app, load your InfinityTV login, and start watching in minutes.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {["Works on every device", "~5 min setup", "No tech skills needed"].map((t) => (
                <li key={t} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">How it works</p>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight">
              Up and running in three steps
            </h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-3">
            {[
              { n: "1", title: "Subscribe & get your login", detail: "After you subscribe, we send your login on WhatsApp — a Server URL, Username & Password, or an M3U link." },
              { n: "2", title: "Install a player app", detail: "Pick your device below and we'll show you exactly which free app to install and how to set it up." },
              { n: "3", title: "Load your credentials & watch", detail: "Enter your login into the app — that's it. Thousands of channels and movies load instantly." },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-violet-400 text-sm font-black text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-5 border-b border-border bg-primary/5">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
              <Info size={17} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">What you need before starting</p>
              <p className="text-muted-foreground text-sm mb-3">
                After your purchase, we send you these 3 items on WhatsApp. Keep them handy:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Server, label: "Server URL" },
                  { icon: User, label: "Username" },
                  { icon: Key, label: "Password" },
                ].map(({ icon: CIcon, label }) => (
                  <div key={label} className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    <CIcon size={11} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <StepIndicator step={wizardStep} />

          <div id="wizard-content" className="scroll-mt-24">
            <AnimatePresence mode="wait">

              {/* Step 1 — Device */}
              {wizardStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                  <h2 className="text-center text-xl font-semibold sm:text-2xl mb-8">Which device do you have?</h2>
                  <div className="flex flex-wrap justify-center gap-4">
                    {devices.map((device) => (
                      <div key={device.id} className="basis-[calc(50%-0.6rem)] lg:basis-[calc(33.333%-0.8rem)]">
                        <DeviceCard device={device} onClick={() => handleDeviceClick(device)} />
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-sm text-muted-foreground">
                    <a
                      href="https://wa.me/14702642482?text=Hi%20InfinityTV%2C%20I%20need%20help%20setting%20up%20IPTV%20on%20my%20device."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-4 transition-colors hover:underline"
                    >
                      Don&apos;t see your device? We&apos;ll set it up with you →
                    </a>
                  </p>
                </motion.div>
              )}

              {/* Step 2 — App */}
              {wizardStep === 2 && selectedDevice && (
                <motion.div key="step2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                  <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
                    <ChevronLeft size={16} />
                    Back to devices
                  </button>
                  <h2 className="text-center text-xl font-semibold sm:text-2xl mb-2">Which app would you like to use?</h2>
                  <p className="text-center text-sm text-muted-foreground mb-8">on your {selectedDevice.title}</p>
                  <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
                    {selectedDevice.apps.map((app) => (
                      <div key={app.id} className="basis-[calc(50%-0.6rem)]">
                        <AppCard app={app} onClick={() => handleAppClick(app)} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3 — Setup */}
              {wizardStep === 3 && selectedDevice && selectedApp && (
                <motion.div key="step3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                  <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
                    <ChevronLeft size={16} />
                    {selectedDevice.apps.length > 1 ? "Back to app selection" : "Back to devices"}
                  </button>

                  <div className="rounded-2xl border border-primary/25 bg-card overflow-hidden">
                    {/* Panel header */}
                    <div className="flex items-center gap-4 p-6 border-b border-border/50">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary shrink-0">
                        <BrandIcon id={selectedDevice.brandIcon} size={26} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <h2 className="font-heading font-bold text-foreground text-lg leading-tight">
                          {selectedDevice.title}
                        </h2>
                        <p className="text-muted-foreground text-xs mt-0.5">{selectedDevice.subtitle}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                            {selectedApp.name}
                          </span>
                          <span
                            className={
                              "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border " +
                              (selectedDevice.difficulty === "Easy"
                                ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                                : "bg-amber-500/10 border-amber-500/25 text-amber-400")
                            }
                          >
                            <Zap size={8} className="fill-current" />
                            {selectedDevice.difficulty}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                            <Clock size={8} />
                            ~{selectedDevice.minutes} min
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="p-6">
                      <SetupSteps steps={selectedApp.steps} />

                      <a
                        href="https://wa.me/14702642482?text=Hi%20InfinityTV%2C%20I%20need%20help%20installing%20on%20my%20device."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-colors mt-2"
                      >
                        <MessageCircle size={15} />
                        Need help? Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-10 border-t border-border">
        <div className="container max-w-2xl space-y-5">
          <div className="rounded-2xl border border-border bg-card px-5 sm:px-6">
            <button
              type="button"
              aria-expanded={issuesOpen}
              onClick={() => setIssuesOpen(!issuesOpen)}
              className="flex w-full cursor-pointer items-center justify-between gap-3 py-4 text-left text-sm font-semibold"
            >
              Having issues?
              <ChevronDown
                size={18}
                className={"shrink-0 text-muted-foreground transition-transform duration-300 " + (issuesOpen ? "rotate-180" : "")}
              />
            </button>
            <div className={"grid transition-[grid-template-rows] duration-300 ease-out " + (issuesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <div className="space-y-4 pb-5 border-t border-border/50 pt-4">
                  {[
                    { title: "Video keeps buffering", detail: "Check your internet speed — live TV needs at least 10 Mbps. Switch to HD on slower connections, or restart your router." },
                    { title: "Channels won't load", detail: "Re-check your Server URL, Username, and Password — they're case-sensitive. Re-enter them carefully from your purchase email." },
                    { title: "The app is frozen", detail: "Close and reopen the app. If it persists, restart your device and open the app again." },
                    { title: "Can't activate the app", detail: "Some apps (Smart IPTV, SS IPTV) need a Device ID activation. Send your Device ID on WhatsApp and we'll re-activate it right away." },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                  <p className="text-sm text-muted-foreground pt-1">
                    Still stuck?{" "}
                    <a
                      href="https://wa.me/14702642482"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline underline-offset-4"
                    >
                      We&apos;ll fix it with you on WhatsApp.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA card */}
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="text-xl font-semibold text-foreground">Need help? We&apos;ll set it up with you</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Send us a message and we&apos;ll guide you through every step on your specific device.
            </p>
            <a
              href="https://wa.me/14702642482?text=Hi%20InfinityTV%2C%20I%20need%20help%20installing%20on%20my%20device."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-violet-400 text-white font-semibold shadow-[0_0_0_0_hsl(var(--primary)/0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_34px_-6px_hsl(var(--primary)/0.5)]"
            >
              <MessageCircle size={18} />
              Get help on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
