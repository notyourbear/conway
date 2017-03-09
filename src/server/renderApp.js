import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config';
import { isProd } from '../shared/util';

const renderApp = (title) => {
  const template = `
  <!doctype html>
  <html>
    <head>
      <title>${title}</title>
      <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
      <link href="https://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet">
      <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
    </head>
    <body>
      <div class="${APP_CONTAINER_CLASS}"></div>
      <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
    </body>
  </html>`;

  return template;
};

export default renderApp;
