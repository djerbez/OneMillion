const videos = [
  {
    slika:
      "https://i.ytimg.com/vi/mvqUu2fZixI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3WhUeUGpYO0wk-ay1AS5dZPoSCw",
    logotip:
      "https://yt3.ggpht.com/ytc/AMLnZu8J3UKEI34D7TufndTxwt9Prs2WBIHwF1U4jTGiNg=s48-c-k-c0x00ffffff-no-rj",
    naslov: "1 Hour of Wise Mystical Tree",
    kanal: "IssaBreh",
    pregledi: "1.8M views ● 3 weeks ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/WCiOfHBGIDU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaWz2fAKdKnjlzhrlXVjiCLTmrlw",
    logotip:
      "https://yt3.ggpht.com/EkBFoqgpcilvSe_L1D4vBHCocRuBB_ZNm_Bm9RIlZ6-yG9Qi_NkWdWs-oRtG9Y9h5AyW4QUe=s88-c-k-c0x00ffffff-no-rj",
    naslov: "Neymar Jr & Ronaldinho ● SAMBA SKILLS ● Barcelona",
    kanal: "JavierNathaniel",
    pregledi: "7M views ● 7 years ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/Zsw4LYlHG-o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBA09IGBKv79m2XkIMjo7bfqcOZ0g",
    logotip:
      "https://yt3.ggpht.com/nPM3NEdW99lNRmlTpx0GT5iAmnnZABeg9MC_rxRFbR-dL7Nu1mPbrRqcZjPv9Dl_bsF4-1zykA=s68-c-k-c0x00ffffff-no-rj",
    naslov: "Alphabet With JoJo",
    kanal: "Satô Benkei",
    pregledi: "1M views ● 3 years ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/5ngWIDkPP3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqKQWhI7ug0dyVnEDVlD4tfCwySA",
    logotip:
      "https://yt3.ggpht.com/ytc/AMLnZu8aFU4F-oQcH2_nOUfd8sUPlG823s1--jRjVdBePg=s68-c-k-c0x00ffffff-no-rj",
    naslov: "Arabian cat - (Official Music VIdeo) ft.Panjabi MC",
    kanal: "RETKORT",
    pregledi: "9.1M views ● 2 years ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/MAG1LoaYVFI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHk41IP90Dn7W9i4INKK8WCJ2Mkw",
    logotip:
      "https://yt3.ggpht.com/ytc/AMLnZu8aFU4F-oQcH2_nOUfd8sUPlG823s1--jRjVdBePg=s68-c-k-c0x00ffffff-no-rj",
    naslov: "spoderman",
    kanal: "quagmire toilet gaming",
    pregledi: "21M views ● 3 months ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/sBJmRD7kNTk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxEagovSNe2yY0UgfYkA024iRCxQ",
    logotip:
      "https://yt3.ggpht.com/DnF7_67_DOyb5d7O0YPF94SLvLYIn6sAodWonN2BnfVHnFPQKS41qNetPkugplbEGP6g3cRRl5I=s48-c-k-c0x00ffffff-no-rj",
    naslov: "ASMR Programming - Calculator App Coding - No Talking",
    kanal: "AsmrClips",
    pregledi: "303k views ● 4 weeks ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/gmE8JMDDi4Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2qRDQ-Xu7t1SPmx01T9JTtfoqlw",
    logotip:
      "https://yt3.ggpht.com/iWWltV545WhLJiI3R1k3syh7RbDgp5YcPppvjobWOOJbOrbWZDwHtylWmAA9mtPOgfkzjrMQzcc=s48-c-k-c0x00ffffff-no-rj",
    naslov: "I LOVE the Pixel Tablet",
    kanal: "Waveform Clips",
    pregledi: "167k views ● 13 days ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/IlkB_oMfbtY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9VcBUOB1aZhjZuJVbbSU6Owsoew",
    logotip:
      "https://yt3.ggpht.com/ytc/AMLnZu9KeF4NfGZTVLfQnJd8K6lz09lL993W8OJOGYFqVw=s48-c-k-c0x00ffffff-no-rj",
    naslov: "ALBINO X AMNA - PRODJI SA MNOM BOSNOM (OFFICIAL VIDEO)",
    kanal: "IDJVideos.TV",
    pregledi: "937k views ● 3 days ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/nrQpvU6K4Cg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAdP0HISSVazP9BiWr1IeJ2MRprw",
    logotip:
      "https://yt3.ggpht.com/TPV9VxXBwHOyqQXmyJVVcei-3t0v2x4TzrXs6l4VwTHLtYfSBsQ9FsIg1YG1RfKaTj6Aafbj5Q=s48-c-k-c0x00ffffff-no-rj",
    naslov: "One UI 5: Official Introduction Film | Samsung",
    kanal: "Samsung",
    pregledi: "508k views ● 2 days ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/SWrXT5X-Ke4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAHegKyU4TF6QRmDuHac3UlNlrTA",
    logotip:
      "https://yt3.ggpht.com/ytc/AMLnZu8dgfb-EOG--mVDlA6da8u5luAYU0LGo8ploU3ZWw=s48-c-k-c0x00ffffff-no-rj",
    naslov: "I Used Apple Watch Ultra WITHOUT an iPhone...",
    kanal: "Unbox Therapy",
    pregledi: "86k views ● 4 hours ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/nfitZKO1jM0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAW6HP37WuBUPNMBQE5BAyJtZMT0g",
    logotip:
      "https://yt3.ggpht.com/ytc/AMLnZu-01AzHsHPEliFPvVhj6xV4vzLfa2muMW8osr9FUA=s48-c-k-c0x00ffffff-no-rj",
    naslov: "J. COLE 1 HOUR CHILL SONGS (2021)",
    kanal: "Peeco",
    pregledi: "11M views ● 1 years ago",
  },
  {
    slika:
      "https://i.ytimg.com/vi/iogcY_4xGjo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9M_qYowfR38q9m4uD1SF8-Gplcw",
    logotip:
      "https://yt3.ggpht.com/ytc/AMLnZu9NaXMe8tiBBVF3N608TFvJSihHF2Ez8yPIqkTl1g=s48-c-k-c0x00ffffff-no-rj",
    naslov: "$1 vs $1,000,000 Hotel Room!",
    kanal: "MrBeast",
    pregledi: "38M views ● 3 days ago",
  },
];
function createDiv(slika, logotip, naslov, kanal, pregledi) {
  const div = document.createElement("div");
  const maindiv = document.getElementById("maindiv");
  const img = document.createElement("img");
  img.src = slika;
  const container = document.createElement("div");
  const logo = document.createElement("img");
  logo.src = logotip;
  const h1 = document.createElement("h1");
  h1.innerText = naslov;
  const p = document.createElement("p");
  p.innerText = kanal;
  p.innerText = pregledi;
  maindiv.appendChild(div);
  div.appendChild(img);
  div.appendChild(container);
  div.appendChild(p);
  container.appendChild(logo);
  container.appendChild(h1);
  maindiv.classList.add("container")
  img.classList.add("slika");
  h1.classList.add("h1");
  logo.classList.add("logo");
  maindiv.classList.add("container");
  p.classList.add("p");
  container.classList.add("container")
}
videos.forEach(video=>{
    createDiv(video.slika, video.logotip, video.naslov, video.kanal, video.pregledi)
})
