// Aggregate headers from the latest confirmed Devnet saves. One batched read per source.
(async () => {
  const metrics = {
  "magic-over": [
    "friend matches recorded",
    "MOBOARD1",
    [
      "AbHYLgyXTPC5bUoP1UdZmC8zAVbmddPKGCEjrk4MeJcC"
    ],
    12
  ],
  "streaks": [
    "habit check-ins",
    "SMSTRK01",
    [
      "6NmQWntFAdSf6eynndRAb635dWH2z9DaaFnh5SxKiaWh",
      "Fh6FMcLNS8ywUpjq3rpVeKZzWDnT6ZrPFhbc3FtKVsPj",
      "BWiJwj3KAFeX4ZkgqxqHwK6qWftH8kpZmBbH1q8r8g3s",
      "3n9tjh96dX6KmsRU2SLPQB92Swufpx2pVzFhUQ8t6GBK",
      "HMp5UNs1ghm8LBbzAzEW1HUbErveBqT3opzTfWqpqwAa",
      "YKLRy2zHFX9AfjNkgCKbV4zfvgPthj4DZZYGLrLDoFf",
      "BGNAYbXzcadZjS13xZ3n4ARuLcQmCJYAiTLkwVCQxa7L",
      "H1kLbCiSoWqMhabbvhLv2MSsQ6HcK3zkVGTMLMZwahRC"
    ],
    20
  ],
  "eternalbliss": [
    "shared worlds created",
    "EBWRLD01",
    [
      "GjYsCcq2r5KkVab7suzvStwYkAcJ3nTe9yXN8EcC5T9E",
      "4BjzEs6z9hyN8bLFFS72D1xAX6QmrBdpCaHiM17PcNGt",
      "4HWDd69H9QFJF7XbafHb9iCdqFefJwvARtyrgAtJJcm9",
      "DA2v98URwgZtJgnxtkbk5NdyeJ9domyAur9KCSD4NE8p",
      "4fKyyYJWpux3KLoEAe4o9PM2FwxnZwYgneeqZzN2vh5Z",
      "EWbxByn6SyJZ8QpSw1FT8vARtPXsSjbJdQNo2BSTKpZ7",
      "5ewyvsG4DqSzUWUBPugxhFcbytwsrnbiip82PC5p99JL",
      "9keAxqzZoFfSy3JMNuSY46pzzBg2njJeju3LCbxv947j",
      "E8aUdXYuX69tEB6yngoxXwyCnLbUVhAJ35K5vKuuseqM",
      "Ahd5vTt5EiLtCcmgPkfVngWqpigsRWkE59FsqCtgHLbC",
      "384n6y5LZpzwGZhmLk54b8dv68zJ88SyPQ9UZw7MoN1u",
      "G9KGHJBayixfyGWSoGSQtwoeha3GTeUNqjvwd36LWLaL",
      "5j15jPPWUPT1bAiXqhKDyJyH2yYqcgyM2qVNZs1uj6cH",
      "8zpajqYtp715ysara4fYp9wJ3WF2HqrdzC8TgGPZ5MwV",
      "47CvQ57spi3LkBDYEtPjhP82n5GTkCK5PaCHoZiQPNXv",
      "EHstHLK7GGrKDTTe4sqqQB2NkVjPeMPnzE5f1HzkgK1M",
      "Ed3LZXew4nUQvTAmuvdedJUR9reucvvYoKPvBg8sR1KE",
      "4MgTjgHbYij1HzhqAQDABfLoasNNzbzTRWb26jQQ6gsj",
      "HDKqmjs8uQmWEubW9pnk8oCwdKGZ7Uc6XzQRn4BjCSbo",
      "Po6btWv791Jt9CVhYX5Pvv5BujKQWbLvC2KxUj7Hnoh",
      "B3Cm2yRdhjH8G7j9pbXFVbyeRAd72vd6JBD3HWMR6B7w",
      "53UrkCEhoZuFq4Pj8PkifKqhyLmWSpUMCqjfKigGMed2",
      "ExEStxmNfcTfuW7pqe97UAUspkSAwRpYjSBFYtJbvrAj",
      "CiJoZ3ntkGUcwsdfcHa1Aw6sFKpeu2uS9yaxyrc66vXD",
      "ArBQKwp6YeRSAedsP7vJSK4CvyeDG6Z8u1W4Evn68PNV",
      "8B5UbLRynSzTuNwN8H1TQGxgkYvJojYDyeXtxtAQCfmj",
      "31gNjm34GsTreBW2yQXniAuFJd14hfvTYY9k18XfQDB5",
      "FJezwEww23ccX38zas6FAhkLdqNsLXc8McTfNdyc6KC2",
      "GFB2doPAYYRfq8sW4dSPkmd2y723mnsricaMkcYVig5M",
      "H1qHVqHZ8UrQbc1rsGzcxExB2HgSmomiXP6U9EZaCLK7",
      "9m2itDG3sDrDs5zfdaAU66oYbPoPa9msWwXFrkwmV44g",
      "3vvEgfUdaxTUs8DSUcKwhXYwnsK7qP3KpT64yQtbQWoK",
      "8Rg56ZwXAn7DeZRffRSKVF7W8Uv48oZRiqR3ZrzPHNoF",
      "HBP8P8qgqnb3fknxn2aToCnJ6C6fBihLh7TmnygQu1PF",
      "GVM4z7NqBaRoaoZbwtdWS8rk7Td3VCmcdzshvNSRzQyo",
      "BGrdx1T3YjRKFabWvNajmfkzXEYHFVUghsEHw8MuoPnX",
      "2o1m5vwMPsK3iM9pDwU1tzXva1JUutKjNXvqmwJ8AhNY",
      "2F22n5axfFVNkukQv8zUzibVvDLeeZEEyvejmbre4jaY",
      "i2x6Qj1kkvgYDZpXhW6FUmyxk4CAduMZy665YuoweBU",
      "GtChRoKfxkWYJDuECbkhRJGGApp2LjYw4d367mrPK9f4",
      "2jcExrKjbKAY4uwzncMTVBvHsehtecqs1RPfdKaMqvKq",
      "G7t6MR7ZAD1h7nUD5bu5snmzWNCwSoEBiqLDFzKQDLJU",
      "HP6BF1XHY3MMhF4YRaAiaw9i1Z1eeZ31s1C5r78B8Vm5",
      "G5JHdfWgnpC6e9nvj2494pofBkkhRe9ZyGzjSF3i2op6",
      "XkkrvZHmpW9jDCKJpVHRUCXFsRseof797eLbzkubNUo",
      "5nJ6szTKLJ31eYKQtBZyZ1GNN56zMAE9njHVVJLX73o1",
      "8BUBxhMfnU221aARs5d5EZZcEKeMkrDKQHLcpLwNqfHz",
      "FfU8R7QADC6KcubaXPuACrpZS5pfLrcXCQHAyaxTmfm1",
      "9gKv6otVcFJdBZRGQ7ncw6fWRpMGUGPwnB1hKwEjQpWk",
      "Gbh2K3F18QpsT5jZxyN75VeB4TLdth8c4CGgwaxp7HXr",
      "6eYbFBV6Esg2bQwoVyHsF6JiDZ5pxyd3xBJqa4bwXx4c",
      "7adhyWc8WF2g6Tg3qsVgFauLwtZWuhNVj2o8jPzyX2r",
      "n9cFbDPKis8BSJDJs5rAW5xHE9fXWrATUBSfuDaaJgC",
      "3b9WejEqihkwvKEAQQSeJhWu7yo814ELT8subPkbxMsh",
      "7YHwryq1rEcU1j1QKGiGKtCEbG2VYKratihWUrUzYyT5",
      "C8Huz96Yg6qzvMD9dodedtfqogWYyUNKLcCHeU8gzYtB",
      "BXtUYg4wQbkCXapTRcwzkPkZZcUR249sbLAwaqMnpA4E",
      "Db7sf9ZuusG1hfGXGuJCsFUykM8m6sdYzALN19oMNNJy",
      "8zdaWhhwMEw6S37JZSUNDxbpxkTLXpugfdGKqZ1rgnBk",
      "B6qcDXQK5cbm6tijj4ch5ExdhNuh2XYi5LKfHSowybCr",
      "9TFqHDcn52M6fN9zmgZSopj4QHFCoRAhKjcsrguGLhoU",
      "RTogXv6iweb1yHys6Qyxr8egKQ7ihPq7x5W2dYUnCaC",
      "9Bwf2srkryHhK6E68jyHbycBfgaBvEzoGtLdRoWS9g3z",
      "9TCbYF22EDNxM7iGWcneStg2jhrq58q7VsyM14hTdtHe"
    ],
    -1
  ],
  "ludo-freeflow": [
    "online matches opened",
    "LUDOFF01",
    [
      "8t7ZuVw2xyRSpt3JBoJBb7PWQq1qykoDZAzgjwrB452e",
      "E9Dmo2XPPpFCC9ZXoXmucgGUJ4fsoXfEP1k83W4dmEBV",
      "CwKDiScRmWbRtVPAZMfYFKzLBunK3mhvzymKg7iVqySx",
      "FSsdfeUShdGVuGrQUoeMXhapNDRvUL3ETxPvTHaskGDy",
      "D4CqHPPgaVsd1TmRrArfaPNYsqHbKmpCh1XJFQsm9oen",
      "Dv8nC1e8weNW6YRJCFiRT2Aj3m2T33SahMtwysQBhYLN",
      "5CL71pVwfEYDLEWMWt1su1STdWGrGCfpt4tnPYSpZMjj",
      "91vENFxWfoiMF5L2bmvVmNRBS9XdkpR7opYtLrQcQ5G4"
    ],
    12
  ],
  "smaranworld": [
    "world chat messages",
    "SMCHAT01",
    [
      "GSrgEBnypHGwxEBpWRCaYjjz8PW6v3KdNqx6Nm5jUfxW"
    ],
    12
  ]
};
  const labels = Array.from(document.querySelectorAll('[data-smaran-total]'));
  async function read(groups, endpoint, source) {
    if (!groups.length) return;
    const keys = groups.flatMap(label => metrics[label.dataset.smaranTotal][2]);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({jsonrpc:'2.0', id:1, method:'getMultipleAccounts', params:[keys,
          {encoding:'base64', commitment:'confirmed', dataSlice:{offset:0,length:24}}]}),
        signal: AbortSignal.timeout(12000)
      });
      if (!response.ok) return;
      const accounts = (await response.json()).result?.value;
      if (!Array.isArray(accounts) || accounts.length !== keys.length) return;
      let cursor = 0;
      for (const label of groups) {
        const [unit, magic, addresses, offset] = metrics[label.dataset.smaranTotal];
        const present = accounts.slice(cursor, cursor + addresses.length).filter(Boolean);
        cursor += addresses.length;
        if (!present.length || label.dataset.source === 'live rollup') continue;
        const headers = present.map(a => atob(a.data[0]));
        if (!headers.every(h => h.length === 24 && h.startsWith(magic))) continue;
        let count = 0;
        for (const h of headers) {
          count += offset < 0 ? 1 : new DataView(Uint8Array.from(h, c => c.charCodeAt(0)).buffer).getUint32(offset,true);
        }
        label.textContent = count.toLocaleString() + ' ' + unit + ' · Devnet, ' + source;
        label.dataset.source = source;
        label.hidden = false;
      }
    } catch { /* A failed read leaves the available source on screen. */ }
  }
  await Promise.all([
    read(labels, 'https://api.devnet.solana.com', 'last Solana save'),
    read(labels.filter(label => label.dataset.smaranTotal !== 'magic-over'), 'https://devnet-as.magicblock.app', 'live rollup')
  ]);
})();
