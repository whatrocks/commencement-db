import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => {
  const prodMode = process.env.NODE_ENV === "production" ? true : false;
  return (
    <div
      style={{
        background: "#89C7B6",
        marginBottom: "1.45rem"
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem"
        }}
      >
        <h2 style={{ margin: 0 }}>
          <Link
            to={prodMode ? "/commencement-db" : ""}
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            🎓&nbsp;{siteTitle}
          </Link>
        </h2>
        <div style={{ color: 'white', margin: 0, padding: 0, marginTop: "0.5rem" }}>
          Do you have another speech's transcript?&nbsp;
          <a
            href="https://github.com/whatrocks/commencement-db/"
            target="_blank"
          >Pull requests
          </a>
          &nbsp;are open!
        </div>
      </div>
    </div>
  );
};

export default Header;
