import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnimatedBox from './AnimatedBox';

export default function CTASection({ onHireClick }) {
  return (
    <Box id="contact" sx={{ py: 10, mb: 10 }}>
      <AnimatedBox animation="fadeInUp" delay={0.2} duration={0.7}>
        <Box
          sx={{
            backgroundColor: '#0f1419',
            borderRadius: 2,
            p: { xs: 4, md: 8 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
          }}
        >
        {/* Background Blurs */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 384,
            height: 384,
            backgroundColor: 'rgba(43, 108, 238, 0.2)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            transform: 'translate(50%, -50%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 384,
            height: 384,
            backgroundColor: 'rgba(34, 211, 238, 0.1)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            transform: 'translate(-50%, 50%)',
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '800px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 900,
            }}
          >
            Ready to build something amazing?
          </Typography>

          <Typography variant="body1" color="text.secondary" fontSize="1.125rem">
            I'm currently open to freelance opportunities and full-time roles. Let's
            discuss how I can help bring your web application vision to life.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              onClick={onHireClick}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1rem',
                minWidth: { xs: '100%', md: 'auto' },
              }}
            >
              Let's Talk
            </Button>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/vansh-s-973151401/"
                sx={{
                  minWidth: 56,
                  height: 56,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(148, 163, 184, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <LinkedInIcon />
              </Button>
              <Button
                variant="outlined"
                href="/"
                sx={{
                  minWidth: 56,
                  height: 56,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(148, 163, 184, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <GitHubIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      </AnimatedBox>
    </Box>
  );
}
