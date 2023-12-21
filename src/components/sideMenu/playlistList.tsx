import PlaylistCard from "./playlistCard";

//! fake
const mockData = [
  {
    collaborative: false,
    description: "This is haruka nakamura.單一播放清單，一網打盡必備曲目。",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2XLWcU",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO2XLWcU",
    id: "37i9dQZF1DZ06evO2XLWcU",
    images: [
      {
        height: null,
        url: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2XLWcU-large.jpg",
        width: null,
      },
    ],
    name: "This Is haruka nakamura",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: false,
    snapshot_id:
      "MjgzNDU3MjAsMDAwMDAwMDA4MTVmOTQzMTA3MjY0NDk1ZGZiNDI3NDFiMjAzMGVhZg==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO2XLWcU/tracks",
      total: 49,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1DZ06evO2XLWcU",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/0tymD4Pu5mvaed5QNxqVJR",
    },
    href: "https://api.spotify.com/v1/playlists/0tymD4Pu5mvaed5QNxqVJR",
    id: "0tymD4Pu5mvaed5QNxqVJR",
    images: [
      {
        height: null,
        url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb07877b80514624dda0fd4746",
        width: null,
      },
    ],
    name: "YMO全集",
    owner: {
      display_name: "Marquee Moon",
      external_urls: {
        spotify: "https://open.spotify.com/user/nbgc2vqdpm2ee9wfmnn9sftce",
      },
      href: "https://api.spotify.com/v1/users/nbgc2vqdpm2ee9wfmnn9sftce",
      id: "nbgc2vqdpm2ee9wfmnn9sftce",
      type: "user",
      uri: "spotify:user:nbgc2vqdpm2ee9wfmnn9sftce",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MTQxLGQ1Y2U2ZmRjOTBmYWY0NzVhMDYxZDhmNjYzMjMxMWZkMjAxMmE4ZDg=",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/0tymD4Pu5mvaed5QNxqVJR/tracks",
      total: 113,
    },
    type: "playlist",
    uri: "spotify:playlist:0tymD4Pu5mvaed5QNxqVJR",
  },
  {
    collaborative: false,
    description: "Playlist created by the tutorial on developer.spotify.com",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/29KvFFsadhp6hlcmCsGzhR",
    },
    href: "https://api.spotify.com/v1/playlists/29KvFFsadhp6hlcmCsGzhR",
    id: "29KvFFsadhp6hlcmCsGzhR",
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b2730ff980c7f33f8ab367027490ab67616d0000b27312d6dbf619ed3e044f05d904ab67616d0000b273526cab1078d8b1fabf1409a6ab67616d0000b273c1989bbd2254bfff5444dba3",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b2730ff980c7f33f8ab367027490ab67616d0000b27312d6dbf619ed3e044f05d904ab67616d0000b273526cab1078d8b1fabf1409a6ab67616d0000b273c1989bbd2254bfff5444dba3",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b2730ff980c7f33f8ab367027490ab67616d0000b27312d6dbf619ed3e044f05d904ab67616d0000b273526cab1078d8b1fabf1409a6ab67616d0000b273c1989bbd2254bfff5444dba3",
        width: 60,
      },
    ],
    name: "My recommendation playlist",
    owner: {
      display_name: "freshmeatball",
      external_urls: {
        spotify: "https://open.spotify.com/user/freshmeatball",
      },
      href: "https://api.spotify.com/v1/users/freshmeatball",
      id: "freshmeatball",
      type: "user",
      uri: "spotify:user:freshmeatball",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MywxZmMyY2U3NWUyOTEwMWQzNDA3ODRlMTQzZTcyOGIyNDU3MTk4Mzli",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/29KvFFsadhp6hlcmCsGzhR/tracks",
      total: 10,
    },
    type: "playlist",
    uri: "spotify:playlist:29KvFFsadhp6hlcmCsGzhR",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/4Iu3Uk2n0RYYSMFtOyMWko",
    },
    href: "https://api.spotify.com/v1/playlists/4Iu3Uk2n0RYYSMFtOyMWko",
    id: "4Iu3Uk2n0RYYSMFtOyMWko",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273218f23e309df278d5b04748c",
        width: 640,
      },
    ],
    name: "toe – For Long Tomorrow",
    owner: {
      display_name: "freshmeatball",
      external_urls: {
        spotify: "https://open.spotify.com/user/freshmeatball",
      },
      href: "https://api.spotify.com/v1/users/freshmeatball",
      id: "freshmeatball",
      type: "user",
      uri: "spotify:user:freshmeatball",
    },
    primary_color: null,
    public: true,
    snapshot_id: "MixhYmE5ZDAyOGI2ZDg5ZTJmNDBmZTNiNzA0YWVmNzAyN2VjYzA5YTIz",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/4Iu3Uk2n0RYYSMFtOyMWko/tracks",
      total: 13,
    },
    type: "playlist",
    uri: "spotify:playlist:4Iu3Uk2n0RYYSMFtOyMWko",
  },
  {
    collaborative: false,
    description: "Spotify 年度總回顧為你呈現你今年最愛的歌曲",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1EUMDoJuT8yJsl",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1EUMDoJuT8yJsl",
    id: "37i9dQZF1EUMDoJuT8yJsl",
    images: [
      {
        height: null,
        url: "https://lineup-images.scdn.co/wrapped-2021-top100_LARGE-zh-Hant.jpg",
        width: null,
      },
    ],
    name: "2021 年你的最愛歌曲",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MCwwMDAwMDAwMDRiZWRhMjBiZWJjZTE5YzhlZWNlM2M3NDhmYTFlMmE1",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1EUMDoJuT8yJsl/tracks",
      total: 100,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1EUMDoJuT8yJsl",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/44jIQtox0qLoyCSqMSU2eJ",
    },
    href: "https://api.spotify.com/v1/playlists/44jIQtox0qLoyCSqMSU2eJ",
    id: "44jIQtox0qLoyCSqMSU2eJ",
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b27309c32d8e1f8f66a74acb38b8ab67616d0000b2734e3e87fce4c3bdebcdcc584dab67616d0000b2737b1d57038ef4e2f8251834c5ab67616d0000b273a3146ecf031deddffd710d39",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b27309c32d8e1f8f66a74acb38b8ab67616d0000b2734e3e87fce4c3bdebcdcc584dab67616d0000b2737b1d57038ef4e2f8251834c5ab67616d0000b273a3146ecf031deddffd710d39",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b27309c32d8e1f8f66a74acb38b8ab67616d0000b2734e3e87fce4c3bdebcdcc584dab67616d0000b2737b1d57038ef4e2f8251834c5ab67616d0000b273a3146ecf031deddffd710d39",
        width: 60,
      },
    ],
    name: "Sleeping At Last",
    owner: {
      display_name: "豬豬",
      external_urls: {
        spotify: "https://open.spotify.com/user/11101126585",
      },
      href: "https://api.spotify.com/v1/users/11101126585",
      id: "11101126585",
      type: "user",
      uri: "spotify:user:11101126585",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MTEsMTE5ZTdjOGU5MjkwM2Q5NWM5ZWFjNTdhYTFiZDE1MDc4MDFlYjAzMA==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/44jIQtox0qLoyCSqMSU2eJ/tracks",
      total: 108,
    },
    type: "playlist",
    uri: "spotify:playlist:44jIQtox0qLoyCSqMSU2eJ",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/6hd1KuBE6gaeidUd4x7X3O",
    },
    href: "https://api.spotify.com/v1/playlists/6hd1KuBE6gaeidUd4x7X3O",
    id: "6hd1KuBE6gaeidUd4x7X3O",
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b27333303bc437e035e6425c967bab67616d0000b27335f789114136f34853ef622fab67616d0000b273a4e87baa510feb4362af0ba6ab67616d0000b273f7c30632bd3a197fc6555777",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b27333303bc437e035e6425c967bab67616d0000b27335f789114136f34853ef622fab67616d0000b273a4e87baa510feb4362af0ba6ab67616d0000b273f7c30632bd3a197fc6555777",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b27333303bc437e035e6425c967bab67616d0000b27335f789114136f34853ef622fab67616d0000b273a4e87baa510feb4362af0ba6ab67616d0000b273f7c30632bd3a197fc6555777",
        width: 60,
      },
    ],
    name: "This is 92914",
    owner: {
      display_name: "Mattana Wongwijarn",
      external_urls: {
        spotify: "https://open.spotify.com/user/21xbpe3zgdrfy2ykuvpsmussy",
      },
      href: "https://api.spotify.com/v1/users/21xbpe3zgdrfy2ykuvpsmussy",
      id: "21xbpe3zgdrfy2ykuvpsmussy",
      type: "user",
      uri: "spotify:user:21xbpe3zgdrfy2ykuvpsmussy",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MjIsNGM4M2E5YThlNzQyZTBlZWVjZTIzMDYzMmM4YTIzY2I4Y2FmMGQ4Zg==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/6hd1KuBE6gaeidUd4x7X3O/tracks",
      total: 18,
    },
    type: "playlist",
    uri: "spotify:playlist:6hd1KuBE6gaeidUd4x7X3O",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/5l2sa0inIdN17B0JMBGI8S",
    },
    href: "https://api.spotify.com/v1/playlists/5l2sa0inIdN17B0JMBGI8S",
    id: "5l2sa0inIdN17B0JMBGI8S",
    images: [
      {
        height: null,
        url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb88344294d826d5450020d377",
        width: null,
      },
    ],
    name: "The Black Skirts • 黑裙子",
    owner: {
      display_name: "Cammie",
      external_urls: {
        spotify: "https://open.spotify.com/user/21xnvlt6sgwsrp4u7picfbsuq",
      },
      href: "https://api.spotify.com/v1/users/21xnvlt6sgwsrp4u7picfbsuq",
      id: "21xnvlt6sgwsrp4u7picfbsuq",
      type: "user",
      uri: "spotify:user:21xnvlt6sgwsrp4u7picfbsuq",
    },
    primary_color: null,
    public: false,
    snapshot_id: "OSw2MmY3NDUwNDMyYzY0MDNhMDFkNGNkOTE1YTI2NzlhOGE0NzlmM2Q4",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/5l2sa0inIdN17B0JMBGI8S/tracks",
      total: 31,
    },
    type: "playlist",
    uri: "spotify:playlist:5l2sa0inIdN17B0JMBGI8S",
  },
  {
    collaborative: false,
    description: "freshmeatball與羅元廷的音樂共享合輯。每日更新。",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1EJFpk2HQyjlzV",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1EJFpk2HQyjlzV",
    id: "37i9dQZF1EJFpk2HQyjlzV",
    images: [
      {
        height: null,
        url: "https://blend-playlist-covers.spotifycdn.com/v2/blend_LARGE-azure-pink-zh-tw.jpg",
        width: null,
      },
    ],
    name: "羅元廷 + freshmeatball",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MCwwMDAwMDAwMDk5NTA1OWRkMzM3YjAyNjg2MDc0ZTBkYWUyMjI3ZTI4",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1EJFpk2HQyjlzV/tracks",
      total: 50,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1EJFpk2HQyjlzV",
  },
  {
    collaborative: false,
    description: "This is Hideyuki Hashimoto.單一播放清單，一網打盡必備曲目。",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2doFng",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO2doFng",
    id: "37i9dQZF1DZ06evO2doFng",
    images: [
      {
        height: null,
        url: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2doFng-large.jpg",
        width: null,
      },
    ],
    name: "This Is Hideyuki Hashimoto",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: false,
    snapshot_id:
      "MjgzNDU3MjAsMDAwMDAwMDBkOGM4NTViMDRiMGY1YWNhNzRjMzgyODY3MDU2OGY2Ng==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO2doFng/tracks",
      total: 51,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1DZ06evO2doFng",
  },
  {
    collaborative: false,
    description:
      '今週も話題の新曲を最速で。 Cover: Furui Riho *👉 <a href="https://spice.eplus.jp/articles/324014?utm_source=spotify.com&utm_medium=referral">SPICE連動記事</a>から新着情報をキャッチ! ',
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1DWYBDycFJuxRt",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWYBDycFJuxRt",
    id: "37i9dQZF1DWYBDycFJuxRt",
    images: [
      {
        height: null,
        url: "https://i.scdn.co/image/ab67706f0000000331bc38b24ad0a9672c66ed49",
        width: null,
      },
    ],
    name: "New Music Wednesday",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: false,
    snapshot_id:
      "MTcwMDY1NTQ1MywwMDAwMDAwMDJlY2JiOTNkYjU0YzA4ZTE2ZDk1ZWM0NjVjYWM3YzY2",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWYBDycFJuxRt/tracks",
      total: 81,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1DWYBDycFJuxRt",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/1OJtzpiQITYnWEos8Nlkdf",
    },
    href: "https://api.spotify.com/v1/playlists/1OJtzpiQITYnWEos8Nlkdf",
    id: "1OJtzpiQITYnWEos8Nlkdf",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27325daf1913433c523dd216f0c",
        width: 640,
      },
    ],
    name: "FKJ – Just Piano",
    owner: {
      display_name: "freshmeatball",
      external_urls: {
        spotify: "https://open.spotify.com/user/freshmeatball",
      },
      href: "https://api.spotify.com/v1/users/freshmeatball",
      id: "freshmeatball",
      type: "user",
      uri: "spotify:user:freshmeatball",
    },
    primary_color: null,
    public: true,
    snapshot_id: "MiwzYzExZmZhMGM4ZmM0MTE5ZmFmM2E0OTJkYTBhZWYzOTZiNjNkMDE2",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/1OJtzpiQITYnWEos8Nlkdf/tracks",
      total: 8,
    },
    type: "playlist",
    uri: "spotify:playlist:1OJtzpiQITYnWEos8Nlkdf",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/7fxDK4LRuiPzS0xoEDXHha",
    },
    href: "https://api.spotify.com/v1/playlists/7fxDK4LRuiPzS0xoEDXHha",
    id: "7fxDK4LRuiPzS0xoEDXHha",
    images: [
      {
        height: null,
        url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb21465d809f14eda3ed1958d2",
        width: null,
      },
    ],
    name: "Naruto Openings (Original Songs)",
    owner: {
      display_name: "Vinícius Pellizzon",
      external_urls: {
        spotify: "https://open.spotify.com/user/224pxvutumbwoiktanp45i4ky",
      },
      href: "https://api.spotify.com/v1/users/224pxvutumbwoiktanp45i4ky",
      id: "224pxvutumbwoiktanp45i4ky",
      type: "user",
      uri: "spotify:user:224pxvutumbwoiktanp45i4ky",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MTgzLGQ5ODEzNTc2YjdjYTEyOTZjYTQ2NTNlYjI3MjFlN2QxM2RmMmEzNDQ=",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/7fxDK4LRuiPzS0xoEDXHha/tracks",
      total: 53,
    },
    type: "playlist",
    uri: "spotify:playlist:7fxDK4LRuiPzS0xoEDXHha",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/1c4q6NKF7OkV1cHIYSHItE",
    },
    href: "https://api.spotify.com/v1/playlists/1c4q6NKF7OkV1cHIYSHItE",
    id: "1c4q6NKF7OkV1cHIYSHItE",
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b2731f7e4a14a894499462aa82ceab67616d0000b2734ef60ae407930a1d1b9f702eab67616d0000b27364c8cf7bc530a05dd10e8efeab67616d0000b27387ea9bd0cb1152da554d4403",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b2731f7e4a14a894499462aa82ceab67616d0000b2734ef60ae407930a1d1b9f702eab67616d0000b27364c8cf7bc530a05dd10e8efeab67616d0000b27387ea9bd0cb1152da554d4403",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b2731f7e4a14a894499462aa82ceab67616d0000b2734ef60ae407930a1d1b9f702eab67616d0000b27364c8cf7bc530a05dd10e8efeab67616d0000b27387ea9bd0cb1152da554d4403",
        width: 60,
      },
    ],
    name: "日本動畫神曲",
    owner: {
      display_name: "Toby",
      external_urls: {
        spotify: "https://open.spotify.com/user/cmx2r3w7py3tqefsx3hghtgn8",
      },
      href: "https://api.spotify.com/v1/users/cmx2r3w7py3tqefsx3hghtgn8",
      id: "cmx2r3w7py3tqefsx3hghtgn8",
      type: "user",
      uri: "spotify:user:cmx2r3w7py3tqefsx3hghtgn8",
    },
    primary_color: null,
    public: false,
    snapshot_id: "ODI2LDJlYzRkOGMyZmRkZTQ0OTlmM2JlZWNkZGQzY2NhMjI5NjQ3OTM4MWI=",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/1c4q6NKF7OkV1cHIYSHItE/tracks",
      total: 799,
    },
    type: "playlist",
    uri: "spotify:playlist:1c4q6NKF7OkV1cHIYSHItE",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/1gssRLriKL9gM6DLGQFomz",
    },
    href: "https://api.spotify.com/v1/playlists/1gssRLriKL9gM6DLGQFomz",
    id: "1gssRLriKL9gM6DLGQFomz",
    images: [
      {
        height: null,
        url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb911fb8a6c3701cd6f4e4b663",
        width: null,
      },
    ],
    name: "FROM THE FIRST TAKE ",
    owner: {
      display_name: "THE FIRST TAKE",
      external_urls: {
        spotify: "https://open.spotify.com/user/xtgt5610jvz19okfei9tbmj08",
      },
      href: "https://api.spotify.com/v1/users/xtgt5610jvz19okfei9tbmj08",
      id: "xtgt5610jvz19okfei9tbmj08",
      type: "user",
      uri: "spotify:user:xtgt5610jvz19okfei9tbmj08",
    },
    primary_color: null,
    public: false,
    snapshot_id: "ODg5LDQ1ZTU3OWVjOTZiMjliNDI2N2NhNTU3MzU3YTYzMDVkOTQ0YTliYzQ=",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/1gssRLriKL9gM6DLGQFomz/tracks",
      total: 243,
    },
    type: "playlist",
    uri: "spotify:playlist:1gssRLriKL9gM6DLGQFomz",
  },
  {
    collaborative: false,
    description: "只要是用 Shazam 辨識的歌曲，都會自動新增至此播放清單。",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/1rgzXg2ILb8ud69xVPWM3M",
    },
    href: "https://api.spotify.com/v1/playlists/1rgzXg2ILb8ud69xVPWM3M",
    id: "1rgzXg2ILb8ud69xVPWM3M",
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b2732ea4b848296468f759304331ab67616d0000b273819af8e10dcea2df949d65d5ab67616d0000b273a17ac56b8aad0525e7ae5ca2ab67616d0000b273d817c993b12fc0847a369910",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b2732ea4b848296468f759304331ab67616d0000b273819af8e10dcea2df949d65d5ab67616d0000b273a17ac56b8aad0525e7ae5ca2ab67616d0000b273d817c993b12fc0847a369910",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b2732ea4b848296468f759304331ab67616d0000b273819af8e10dcea2df949d65d5ab67616d0000b273a17ac56b8aad0525e7ae5ca2ab67616d0000b273d817c993b12fc0847a369910",
        width: 60,
      },
    ],
    name: "我的 Shazam 曲目",
    owner: {
      display_name: "freshmeatball",
      external_urls: {
        spotify: "https://open.spotify.com/user/freshmeatball",
      },
      href: "https://api.spotify.com/v1/users/freshmeatball",
      id: "freshmeatball",
      type: "user",
      uri: "spotify:user:freshmeatball",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MjMsNmRhODg1ZTJkM2I0M2IzZjRiOTEzZTE2NzlhYWM5MmViNTExMzE2Mg==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/1rgzXg2ILb8ud69xVPWM3M/tracks",
      total: 21,
    },
    type: "playlist",
    uri: "spotify:playlist:1rgzXg2ILb8ud69xVPWM3M",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/5eoVKeQ4bqLWUSS3ugGmRd",
    },
    href: "https://api.spotify.com/v1/playlists/5eoVKeQ4bqLWUSS3ugGmRd",
    id: "5eoVKeQ4bqLWUSS3ugGmRd",
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b27336ca66e9d748d81c19b313e6ab67616d0000b2733f8ac300ea57ebc31052b3bfab67616d0000b27363a6e1a3b0fd3ee9c2b5d7bfab67616d0000b273ec4ae36326215ea8a8f3a9ff",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b27336ca66e9d748d81c19b313e6ab67616d0000b2733f8ac300ea57ebc31052b3bfab67616d0000b27363a6e1a3b0fd3ee9c2b5d7bfab67616d0000b273ec4ae36326215ea8a8f3a9ff",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b27336ca66e9d748d81c19b313e6ab67616d0000b2733f8ac300ea57ebc31052b3bfab67616d0000b27363a6e1a3b0fd3ee9c2b5d7bfab67616d0000b273ec4ae36326215ea8a8f3a9ff",
        width: 60,
      },
    ],
    name: "我的播放清單 #48",
    owner: {
      display_name: "freshmeatball",
      external_urls: {
        spotify: "https://open.spotify.com/user/freshmeatball",
      },
      href: "https://api.spotify.com/v1/users/freshmeatball",
      id: "freshmeatball",
      type: "user",
      uri: "spotify:user:freshmeatball",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MzUsYmY3MTMyMzdiODNjMTM1OTI0MDY3NDQwYTEwZjZjZTA1MGM3ZWE4Yw==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/5eoVKeQ4bqLWUSS3ugGmRd/tracks",
      total: 34,
    },
    type: "playlist",
    uri: "spotify:playlist:5eoVKeQ4bqLWUSS3ugGmRd",
  },
  {
    collaborative: false,
    description: "愜意放鬆，使自己沉浸在這些動人而優美的鋼琴曲之中。",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1DWTIcwQEMKk2L",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWTIcwQEMKk2L",
    id: "37i9dQZF1DWTIcwQEMKk2L",
    images: [
      {
        height: null,
        url: "https://i.scdn.co/image/ab67706f000000036fdab9832efd7287ed81cd33",
        width: null,
      },
    ],
    name: "安寧鋼琴聲",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: false,
    snapshot_id:
      "MTcwMDQ0ODE3MywwMDAwMDAwMDlhNTNlYjAyNzc4ODgzMDFmZWI3ZmY1MTk3ZTk1NTkx",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWTIcwQEMKk2L/tracks",
      total: 100,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1DWTIcwQEMKk2L",
  },
  {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/5EQAvyAXhNb8Wpof8c6WBq",
    },
    href: "https://api.spotify.com/v1/playlists/5EQAvyAXhNb8Wpof8c6WBq",
    id: "5EQAvyAXhNb8Wpof8c6WBq",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f35ca19ede18b73dca257a9d",
        width: 640,
      },
    ],
    name: "Nomadland",
    owner: {
      display_name: "freshmeatball",
      external_urls: {
        spotify: "https://open.spotify.com/user/freshmeatball",
      },
      href: "https://api.spotify.com/v1/users/freshmeatball",
      id: "freshmeatball",
      type: "user",
      uri: "spotify:user:freshmeatball",
    },
    primary_color: null,
    public: true,
    snapshot_id: "OCwzZTc1MmRiZmRlZWU4MGMzZDM3OWVjMjE5YjMzMjAyMTRlYTc1NWZj",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/5EQAvyAXhNb8Wpof8c6WBq/tracks",
      total: 6,
    },
    type: "playlist",
    uri: "spotify:playlist:5EQAvyAXhNb8Wpof8c6WBq",
  },
  {
    collaborative: false,
    description: "update weekly maybe",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/1jIdaWPe2UBQbln1Sn4q88",
    },
    href: "https://api.spotify.com/v1/playlists/1jIdaWPe2UBQbln1Sn4q88",
    id: "1jIdaWPe2UBQbln1Sn4q88",
    images: [
      {
        height: null,
        url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbf7f97261cdb96270ee7784f7",
        width: null,
      },
    ],
    name: "Achi Radar",
    owner: {
      display_name: "Achi",
      external_urls: {
        spotify: "https://open.spotify.com/user/achijoseph",
      },
      href: "https://api.spotify.com/v1/users/achijoseph",
      id: "achijoseph",
      type: "user",
      uri: "spotify:user:achijoseph",
    },
    primary_color: null,
    public: false,
    snapshot_id: "MTQsYTY3MmJhNDY5ODljNzE4Njc2ODBmYTUxNjIxY2JhNWEzNTQ1ZDVjOQ==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/1jIdaWPe2UBQbln1Sn4q88/tracks",
      total: 31,
    },
    type: "playlist",
    uri: "spotify:playlist:1jIdaWPe2UBQbln1Sn4q88",
  },
];
//! fake

type Props = { isSideMenuOpen: boolean };
const PlaylistList = ({ isSideMenuOpen }: Props) => {
  return (
    <>
      {mockData.map((item, index) => {
        return (
          <PlaylistCard
            key={item.id}
            {...{
              id: item.id,
              name: item.name,
              owner: item.owner.display_name,
              images: item.images[0].url,
              url: item.external_urls.spotify,
              isSideMenuOpen,
            }}
          />
        );
      })}
    </>
  );
};

export default PlaylistList;
