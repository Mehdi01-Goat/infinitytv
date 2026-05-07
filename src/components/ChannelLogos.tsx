const channels = [
  { name: "ESPN", logo: "/assets/logo-espn.png" },
  { name: "HBO", logo: "/assets/logo-hbo.png" },
  { name: "Netflix", logo: "/assets/logo-netflix.png" },
  { name: "beIN Sports", logo: "/assets/logo-bein.png" },
  { name: "CBS", logo: "/assets/logo-cbs.png" },
  { name: "Sky Sports", logo: "/assets/logo-skysports.png" },
  { name: "DSTV", logo: "/assets/logo-dstv.png" },
  { name: "Showmax", logo: "/assets/logo-showmax.png" },
  { name: "Fox", logo: "/assets/logo-fox.png" },
  { name: "CNN", logo: "/assets/logo-cnn.png" },
  { name: "BBC", logo: "/assets/logo-bbc.png" },
];

const ChannelLogos = () => (
  <section className="py-10 border-y border-border overflow-hidden">
    <div className="flex animate-scroll items-center" style={{ width: "max-content" }}>
      {[...channels, ...channels].map((channel, i) => (
        <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center h-14 w-28 brightness-0 invert opacity-65 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300">
          <img src={channel.logo} alt={channel.name} loading="lazy" className="max-h-full max-w-full object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default ChannelLogos;
