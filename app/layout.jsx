import styles from "@/styles/globals.css";

function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>RPS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}

export default layout;
