export function NotFound() {
  return (
    <section id="error-status" className="error-status" data-state="3">
      <div className="overlay"></div>
      <div className="flex-wrapper no-pad">
        <div className="flex-col">
          <div className="error-copy">
            <h1>Pagina mais rara que a primeira edicao do Hulk. Error 404</h1>
            <h1>404 Page Not Found</h1>
            <p>
              Check that you typed the address correctly, go back to your previous page or try using our site search to
              find something specific.
            </p>
          </div>
        </div>
        <img
          src="https://cdn.marvel.com/content/u/open-html-assets/marvel-error-pages/captain-marvel-char.c7a46c65.jpg"
          alt="Captain MArvel"
        />
      </div>
    </section>
  );
}

