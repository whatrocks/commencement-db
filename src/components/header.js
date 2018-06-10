import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => {
  const prodMode = process.env.NODE_ENV === "production" ? true : false;
  return (
    <div
      style={{
        background: "rebeccapurple",
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
        <h1 style={{ margin: 0 }}>
          <Link
            to={prodMode ? "/commencement-db" : ""}
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
