import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const Layout = ({ children }) => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <header
        style={{
          padding: "1rem 2rem",
          background: "#f8f8f8",
          borderBottom: "1px solid #ddd",
          marginBottom: "2rem",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* LOGO */}
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Taste of Naija Logo"
              style={{
                height: "50px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* NAV LINKS */}
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
          >
            Home
          </Link>

          <Link
            to="/recipes"
            style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
          >
            Recipes
          </Link>
        </nav>
      </header>

      <main style={{ padding: "0 2rem" }}>{children}</main>

      <footer
        style={{
          marginTop: "3rem",
          padding: "1rem 2rem",
          borderTop: "1px solid #ddd",
          textAlign: "center",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} Taste of Naija
      </footer>
    </div>
  )
}

export default Layout