import { h as r, j as o, H as v } from "./iframe-D93LbwGv.js";
const L = {
    title: "Components/Media & Icons/AudioPlayer",
    component: r,
    argTypes: {
      audioType: {
        control: { type: "radio" },
        options: ["file", "libsyn", "soundcloud", "spotify"],
      },
      className: { control: !1 },
      descriptionText: { control: "text" },
      embedCode: { control: !1 },
      headingText: { control: "text" },
      helperText: { control: "text" },
      id: { control: !1 },
      iframeTitle: { control: "text" },
    },
  },
  d =
    '<iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/18268511/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/" height="90" width="100%" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>',
  e = {
    args: {
      audioType: "libsyn",
      className: void 0,
      descriptionText:
        "Audio description lorem ipsum dolor simet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.",
      embedCode: d,
      headingText: "Audio Title",
      helperText: "Audio helper text lorem ipsum dolor simet.",
      id: "audioplayer-id",
      iframeTitle: "Libsyn Audio",
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25338",
      },
      jest: ["AudioPlayer.test.tsx"],
    },
  },
  t = {
    render: () =>
      o.jsx(r, {
        headingText: o.jsx(v, { level: "h4", children: "Custom H4 Heading" }),
        embedCode: d,
        audioType: "libsyn",
      }),
  },
  a = { render: () => o.jsx(r, { embedCode: d, audioType: "libsyn" }) },
  s = {
    render: () =>
      o.jsx(r, {
        embedCode:
          '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311382449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" ></iframe> <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;" > <a href="https://soundcloud.com/nypl" title="New York Public Library" target="_blank" style="color: #cccccc; text-decoration: none;" >New York Public Library</a > · <a href="https://soundcloud.com/nypl/journalism-in-the-age-of-trump" title="Journalism in the Age of Trump" target="_blank" style="color: #cccccc; text-decoration: none;" >Journalism in the Age of Trump</a > </div>',
        audioType: "soundcloud",
      }),
  },
  i = {
    render: () =>
      o.jsx(r, {
        embedCode:
          '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0uqkwkR49kK?utm_source=generator" width="100%" height="380" frameborder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>',
        audioType: "spotify",
      }),
  },
  n = {
    render: () =>
      o.jsx(r, {
        embedCode: "<h1>Invalid Embed Code</h1>",
        audioType: "spotify",
      }),
  };
var l, c, u, m, p;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    audioType: "libsyn",
    className: undefined,
    descriptionText: "Audio description lorem ipsum dolor simet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.",
    embedCode: libsynPlayerEmbedCode,
    headingText: "Audio Title",
    helperText: "Audio helper text lorem ipsum dolor simet.",
    id: "audioplayer-id",
    iframeTitle: "Libsyn Audio"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25338"
    },
    jest: ["AudioPlayer.test.tsx"]
  }
}`,
      ...((u = (c = e.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : u.source),
    },
    description: {
      story:
        "Main Story for the AudioPlayer component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((p = (m = e.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : p.description),
    },
  },
};
var y, h, f;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((y = t.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  render: () => <AudioPlayer headingText={<Heading level="h4">Custom H4 Heading</Heading>} embedCode={libsynPlayerEmbedCode} audioType="libsyn" />
}`,
      ...((f = (h = t.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : f.source),
    },
  },
};
var b, g, w;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((b = a.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => <AudioPlayer embedCode={libsynPlayerEmbedCode} audioType="libsyn" />
}`,
      ...((w = (g = a.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : w.source),
    },
  },
};
var x, T, A;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((x = s.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: () => <AudioPlayer embedCode='<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311382449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" ></iframe> <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;" > <a href="https://soundcloud.com/nypl" title="New York Public Library" target="_blank" style="color: #cccccc; text-decoration: none;" >New York Public Library</a > · <a href="https://soundcloud.com/nypl/journalism-in-the-age-of-trump" title="Journalism in the Age of Trump" target="_blank" style="color: #cccccc; text-decoration: none;" >Journalism in the Age of Trump</a > </div>' audioType="soundcloud" />
}`,
      ...((A = (T = s.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : A.source),
    },
  },
};
var C, _, S;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((C = i.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  render: () => <AudioPlayer embedCode='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0uqkwkR49kK?utm_source=generator" width="100%" height="380" frameborder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>' audioType="spotify" />
}`,
      ...((S = (_ = i.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var k, P, E;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((k = n.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  render: () => <AudioPlayer embedCode="<h1>Invalid Embed Code</h1>" audioType="spotify" />
}`,
      ...((E = (P = n.parameters) == null ? void 0 : P.docs) == null
        ? void 0
        : E.source),
    },
  },
};
const j = [
    "WithControls",
    "WithCustomHeading",
    "LibsynExample",
    "SoundcloudExample",
    "SpotifyExample",
    "ErroredExample",
  ],
  N = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ErroredExample: n,
        LibsynExample: a,
        SoundcloudExample: s,
        SpotifyExample: i,
        WithControls: e,
        WithCustomHeading: t,
        __namedExportsOrder: j,
        default: L,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { N as A, n as E, a as L, s as S, e as W, t as a, i as b };
