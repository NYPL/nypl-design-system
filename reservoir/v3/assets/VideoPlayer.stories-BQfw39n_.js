import {
  bh as b,
  bi as I,
  x as a,
  j as e,
  H,
  L as C,
} from "./iframe-D93LbwGv.js";
import { a as V } from "./storybookUtils-BmTl87w5.js";
const j = {
    title: "Components/Media & Icons/VideoPlayer",
    component: a,
    argTypes: {
      aspectRatio: {
        controls: { type: "radio" },
        options: I,
        table: { defaultValue: { summary: "sixteenByNine" } },
      },
      className: { control: !1 },
      descriptionText: { control: "text" },
      embedCode: { control: !1 },
      headingText: { control: "text" },
      helperText: { control: "text" },
      id: { control: !1 },
      iframeTitle: { control: "text" },
      showHelperInvalidText: V("true"),
      videoId: { control: "text" },
      videoType: { controls: { type: "radio" }, options: b },
    },
  },
  t = {
    args: {
      aspectRatio: "sixteenByNine",
      className: void 0,
      descriptionText:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      embedCode:
        '<iframe src="https://player.vimeo.com/video/421404144?h=5467db7edd" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
      headingText: "NYPL Video",
      helperText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      id: "videoPlayer-id",
      iframeTitle: void 0,
      showHelperInvalidText: !0,
      videoId: void 0,
      videoType: void 0,
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36835-25314&t=AEGDRpspvTyuSWSA-4",
      },
      jest: "VideoPlayer.test.tsx",
    },
    render: (o) =>
      e.jsx(a, {
        ...o,
        aspectRatio: o.aspectRatio,
        embedCode: o.embedCode,
        videoId: o.videoId,
        videoType: o.videoType,
      }),
  },
  i = {
    render: () =>
      e.jsx(a, {
        headingText: e.jsx(H, { level: "h4", children: "Custom H4 Heading" }),
        videoId: "474719268",
        videoType: "vimeo",
      }),
  },
  r = {
    render: () =>
      e.jsx(a, { videoId: "https://vimeo.com/474719268", videoType: "vimeo" }),
  },
  s = {
    render: () =>
      e.jsx(a, {
        helperText: e.jsxs(e.Fragment, {
          children: [
            "This helper text contains ",
            e.jsx("b", { children: "bold text" }),
            " and a",
            " ",
            e.jsx(C, { href: "https://nypl.org", children: "link" }),
            ".",
          ],
        }),
        videoId: "474719268",
        videoType: "vimeo",
      }),
  };
var d, n, l, c, p;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((d = t.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    aspectRatio: "sixteenByNine",
    className: undefined,
    descriptionText: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    embedCode: \`<iframe src="https://player.vimeo.com/video/421404144?h=5467db7edd" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>\`,
    headingText: "NYPL Video",
    helperText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    id: "videoPlayer-id",
    iframeTitle: undefined,
    showHelperInvalidText: true,
    videoId: undefined,
    videoType: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36835-25314&t=AEGDRpspvTyuSWSA-4"
    },
    jest: "VideoPlayer.test.tsx"
  },
  render: args => <VideoPlayer {...args} aspectRatio={args.aspectRatio} embedCode={args.embedCode} videoId={args.videoId} videoType={args.videoType} />
}`,
      ...((l = (n = t.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : l.source),
    },
    description: {
      story:
        "Main Story for the VideoPlayer component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((p = (c = t.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : p.description),
    },
  },
};
var m, u, v;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((m = i.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: () => <VideoPlayer headingText={<Heading level="h4">Custom H4 Heading</Heading>} videoId="474719268" videoType="vimeo" />
}`,
      ...((v = (u = i.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : v.source),
    },
  },
};
var y, h, g;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((y = r.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  render: () => <VideoPlayer videoId="https://vimeo.com/474719268" videoType="vimeo" />
}`,
      ...((g = (h = r.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : g.source),
    },
  },
};
var x, T, f;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((x = s.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: () => <VideoPlayer helperText={<>
          This helper text contains <b>bold text</b> and a{" "}
          <Link href="https://nypl.org">link</Link>.
        </>} videoId="474719268" videoType="vimeo" />
}`,
      ...((f = (T = s.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : f.source),
    },
  },
};
const P = ["WithControls", "WithCustomHeading", "Errored", "HTMLInHelperText"],
  R = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Errored: r,
        HTMLInHelperText: s,
        WithControls: t,
        WithCustomHeading: i,
        __namedExportsOrder: P,
        default: j,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { r as E, s as H, R as V, t as W, i as a };
