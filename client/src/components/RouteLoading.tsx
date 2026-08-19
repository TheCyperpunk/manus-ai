/** Proof in Motion — a restrained Source Atlas loading field for deferred portfolio routes. */
import "./route-loading.css";

export default function RouteLoading() {
  return (
    <main className="route-loading" aria-busy="true" aria-live="polite">
      <section className="route-loading__field" aria-labelledby="route-loading-title">
        <div className="route-loading__topline" aria-hidden="true">
          <span />
          <i />
        </div>

        <div className="route-loading__meta" aria-hidden="true">
          <span><i /> 00 / ROUTE TRANSITION</span>
          <span>ATLAS / RETRIEVING</span>
        </div>

        <div className="route-loading__layout" aria-hidden="true">
          <div className="route-loading__copy">
            <div className="route-loading__eyebrow skeleton-shimmer" />
            <div className="route-loading__title skeleton-shimmer" />
            <div className="route-loading__title route-loading__title--short skeleton-shimmer" />
            <div className="route-loading__body skeleton-shimmer" />
            <div className="route-loading__body route-loading__body--short skeleton-shimmer" />
            <div className="route-loading__actions">
              <span className="skeleton-shimmer" />
              <span className="skeleton-shimmer" />
            </div>
          </div>

          <div className="route-loading__instrument">
            <div className="route-loading__instrument-bar"><span /> <i /> <i /> <i /></div>
            <div className="route-loading__instrument-grid">
              {Array.from({ length: 12 }, (_, index) => <span key={index} className="skeleton-shimmer" />)}
            </div>
            <div className="route-loading__instrument-line skeleton-shimmer" />
            <div className="route-loading__spinner" />
          </div>
        </div>

        <div className="route-loading__footer" aria-hidden="true">
          <span>ROUTE / IN TRANSIT</span>
          <div><i /><i /><i /><i /></div>
        </div>

        <p id="route-loading-title" className="route-loading__sr-only" role="status">Loading route content</p>
      </section>
    </main>
  );
}
