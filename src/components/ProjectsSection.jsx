import siteData from '../data/siteData';



import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AnimatedBox from './AnimatedBox';
import ProjectCard from './ProjectCard';

const projects = siteData.projects;

export default function ProjectsSection() {
  return (
    <Box id="projects" sx={{ py: 10 }}>
      <AnimatedBox animation="fadeInUp" delay={0.1}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            mb: 6,
          }}
        >
          <Box>
            <Typography variant="h2" gutterBottom fontWeight={700}>
              Featured Projects
            </Typography>
            <Typography variant="body1" color="text.secondary">
              A selection of my recent full-stack web applications
            </Typography>
          </Box>
          <Button
            color="primary"
            endIcon={<OpenInNewIcon fontSize="small" />}
            sx={{ fontWeight: 700 }}
          >
            View All
          </Button>
        </Box>
      </AnimatedBox>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
            <AnimatedBox animation="scaleIn" delay={0.2 + index * 0.15} duration={0.6}>
              <ProjectCard project={project} />
            </AnimatedBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
