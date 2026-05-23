import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                backgroundColor: 'rgba(43, 108, 238, 0.2)',
                borderRadius: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.main',
              }}
            >
              <CodeIcon sx={{ fontSize: 14 }} />
            </Box>
            <Typography variant="body2" fontWeight={700}>
              Alex Johnson
            </Typography>
          </Box>

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © 2024 Alex Johnson. Built with MERN Stack & Material UI.
          </Typography>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#"
              color="text.secondary"
              sx={{
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
              }}
            >
              Twitter
            </Link>
            <Link
              href="#"
              color="text.secondary"
              sx={{
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
              }}
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              color="text.secondary"
              sx={{
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
              }}
            >
              Dribbble
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
