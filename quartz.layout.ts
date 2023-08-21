import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "YouTube": "https://www.youtube.com/@Ski_Freak",
      "Twitch": "https://www.twitch.tv/that_ski_freak",
      "Discord Server": "https://discord.gg/sRB54zg",
      "Twitter": "https://twitter.com/That_Ski_Freak",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Posts",
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("notes/Posts/") && f.slug! !== "_index" && !f.frontmatter?.noindex,
        sort: (f1, f2) =>
          (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) -
          (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "./tags/posts" as SimpleSlug,
      }),
    ),
  ],
  right: [Component.Graph(), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
