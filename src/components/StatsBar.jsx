import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AnimatedBox from './AnimatedBox';

const stats = [
  { value: '30+', label: 'Projects Completed' },
  { value: '6+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '1M+', label: 'Lines of Code' },
];

export default function StatsBar() {
  return (
    <AnimatedBox animation="fadeInUp" delay={0.1}>
      <Box
        sx={{
          py: 6,
          borderTop: '1px solid rgba(148, 163, 184, 0.1)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
        }}
      >
        <Grid container spacing={2}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <AnimatedBox animation="fadeInUp" delay={0.2 + index * 0.1} duration={0.5}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: 700, mb: 0.5 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>
                    {stat.label}
                  </Typography>
                </Box>
              </AnimatedBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AnimatedBox>
  );
}
