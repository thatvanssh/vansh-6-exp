import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AnimatedBox from './AnimatedBox';
import siteData from '../data/siteData';

export default function HeroSection() {
  return (
    <Box id="hero" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={6}>
        {/* Left Column - Content */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Status Badge */}
            <AnimatedBox animation="fadeInDown" delay={0.2} duration={0.6}>
              <Stack width="100%" alignItems={{ xs: 'center', md: "flex-start" }}>
              <Chip
                label={siteData.hero.badge}
                icon={
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      '@keyframes pulse': {
                        '0%, 100%': {
                          opacity: 1,
                        },
                        '50%': {
                          opacity: 0.5,
                        },
                      },
                    }}
                  />
                }
                sx={{
                  width: 'fit-content',
                  backgroundColor: 'rgba(43, 108, 238, 0.1)',
                  color: 'primary.main',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                }}
              />
              </Stack>
            </AnimatedBox>

            {/* Main Heading */}
            <AnimatedBox animation="fadeInUp" delay={0.3} duration={0.7}>
              <Stack alignItems="center">
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    mb: 2,
                    textAlign: {xs: "center", md: "left"}
                  }}
                >
                  {siteData.hero.title.split(siteData.hero.highlight)[0]}
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 900,
                      color: 'primary.main',
                      textAlign: {xs: "center", md: "left"}
                    }}
                  >
                    {siteData.hero.highlight}
                  </Typography>{' '}
                  {siteData.hero.title.split(siteData.hero.highlight)[1]}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: '1.125rem', maxWidth: '600px', textAlign: {xs: "center", md: "left"} }}
                >
                  {siteData.hero.description}
                </Typography>
              </Stack>
            </AnimatedBox>

            {/* CTA Buttons */}
            <AnimatedBox animation="fadeInUp" delay={0.5} duration={0.6}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: {xs: "center", md: "flex-start"}, gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowDownwardIcon />}
                  component="a"
                  href={siteData.hero.ctas?.[0]?.href || '#projects'}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    boxShadow: '0 12px 32px rgba(43, 108, 238, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 16px 40px rgba(43, 108, 238, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {siteData.hero.ctas?.[0]?.label || 'View Projects'}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={siteData.hero.ctas?.[1]?.href || '/cv.pdf'}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    borderColor: 'rgba(148, 163, 184, 0.3)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(43, 108, 238, 0.05)',
                    },
                  }}
                >
                  {siteData.hero.ctas?.[1]?.label || 'Download CV'}
                </Button>
              </Box>
            </AnimatedBox>
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <AnimatedBox animation="fadeInRight" delay={0.4} duration={0.8}>
            <Box sx={{ position: 'relative' }}>
              {/* Background Blurs */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -40,
                  left: -40,
                  width: 128,
                  height: 128,
                  backgroundColor: 'rgba(43, 108, 238, 0.2)',
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -40,
                  right: -40,
                  width: 192,
                  height: 192,
                  backgroundColor: 'rgba(34, 211, 238, 0.2)',
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                }}
              />

              {/* Profile Image */}
              <Stack sx={{ width: "auto", justifyContent: "center", alignItems: "center" }}>
                <Box
                component="img"
                src={siteData.hero.profileImage}
                alt="Professional portrait of a MERN stack developer"
                sx={{
                  width: '80%',
                  aspectRatio: '1',
                  borderRadius: 3,
                  border: '4px solid',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
                  position: 'relative',
                  zIndex: 10,
                  objectFit: 'cover',
                  height: 'auto',
                }}
              />
              </Stack>
            </Box>
          </AnimatedBox>
        </Grid>
      </Grid>
    </Box>
  );
}
