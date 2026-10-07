<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio's sections in the index route with hash anchors because the requested experience is one smooth-scrolling page.
- Keep portfolio content in a browser-safe data module shared by the page; this separates supplied facts from presentation.
- Use local concept images and an intentional monogram profile placeholder; no real portrait or project screenshots were supplied.
- The contact form validates locally and must not claim delivery until a sending service is configured.
- Serve a downloadable draft PDF containing only supplied portfolio facts; replace it when an official resume is supplied.
