export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GradProject</title>
  <script src=" /static/client.js" type="application/javascript"></script>
  <script>
    window.__token__= '${token}'
  </script>
  <style>
  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    min-width: 320px;
  }
</style>
</head>
<body>
  <div id="root">${content}</div>
</body>
</html>
`;


