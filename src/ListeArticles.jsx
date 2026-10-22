import { useDispatch, useSelector } from "react-redux"
import { deleteArticleAction, updateArticleAction } from "./redux/actions/articleActions"

function ListeArticles() {
  const dispatch = useDispatch()
  const list_article = useSelector((state) => state.articles)

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#dbeafe_0%,_#f8fafc_42%,_#f8fafc_100%)] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-6 border-b border-slate-200/80 pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Catalogue
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Vos articles
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Retrouvez les produits enregistrés et leur famille en un coup d’œil.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="m4.5 7.75 7.5 4.5 7.5-4.5M12 12.5V21" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <span className="block text-xl font-bold leading-5 text-slate-950">{list_article.length}</span>
              <span className="mt-1 block text-xs font-medium text-slate-500">
                {list_article.length > 1 ? "articles" : "article"}
              </span>
            </span>
          </div>
        </header>

        {list_article.length > 0 ? (
          <section aria-label="Liste des articles" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list_article.map((article) => (
              <article
                key={article.id}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 transition-colors group-hover:from-blue-100 group-hover:to-indigo-200">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      <path d="m4.5 7.75 7.5 4.5 7.5-4.5M12 12.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                    Disponible
                  </span>
                </div>
                <h2 className="mt-5 truncate text-lg font-semibold capitalize text-slate-900" title={article.designation}>
                  {article.designation}
                </h2>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Famille</span>
                  <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {article.famille}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 gap-2">
                    <button
                        type="button"
                        onClick={() => dispatch(updateArticleAction(article))}
                        className="mt-2 w-full rounded-xl border border-blue-200 px-2 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                        Modifier
                        </button>   
                    <button
                        type="button"
                        onClick={() => dispatch(deleteArticleAction(article.id))}
                        className="mt-2 w-full rounded-xl border border-red-200 px-2 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                        Supprimer
                        </button>
                    </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="rounded-2xl border border-dashed border-slate-300 bg-white/70 px-6 py-16 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <h2 className="mt-5 text-lg font-semibold text-slate-900">Aucun article pour le moment</h2>
            <p className="mt-2 text-sm text-slate-500">Les articles ajoutés apparaîtront ici.</p>
          </section>
        )}
      </div>
    </main>
  )
}

export default ListeArticles