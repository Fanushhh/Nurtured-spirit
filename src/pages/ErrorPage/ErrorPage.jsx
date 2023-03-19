import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import './ErrorPage.scss';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
    <Link to='/Nurtured-spirit/'>Go back to the homepage.</Link>
      <iframe src="https://giphy.com/embed/3o84sF21zQYacFcl68" width="480" height="206" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starwars-movie-star-wars-3o84sF21zQYacFcl68">via GIPHY</a></p>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>It looks like this page is not yet created.</p>
    </div>
  );
}