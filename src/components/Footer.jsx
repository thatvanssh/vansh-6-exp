import CodeIcon from "@mui/icons-material/Code";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import siteData from "../data/siteData";
import Logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(148, 163, 184, 0.1)",
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={Logo}
              sx={{
                width: 70,
              }}
            />
          </Box>

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Copyright © 2026 | Vansh S | All Rights Reserved
          </Typography>

          {/* Social Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {siteData.socials?.map((s) => (
              <Link
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  "&:hover": { color: "primary.main" },
                }}
              >
                {s.platform}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
