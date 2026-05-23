import dawaBajarAppImage from '@/assets/images/dawa_bajar.png';
import laizaAppImage from '@/assets/images/laiza_app.png';
import myHospitalAppImage from '@/assets/images/my_hospital.png';
import snaMartAppImage from '@/assets/images/sna_mart.png';



import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AnimatedBox from './AnimatedBox';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features real-time inventory updates and order tracking.',
    image: laizaAppImage,
    tags: [
      { label: 'REACT', color: 'rgba(43, 108, 238, 0.1)', textColor: '#2b6cee' },
      { label: 'NODE.JS', color: 'rgba(16, 185, 129, 0.1)', textColor: '#10b981' },
      { label: 'MONGODB', color: 'rgba(251, 146, 60, 0.1)', textColor: '#fb923c' },
    ],
    date: 'Mar 2024',
    link: 'https://github.com'
  },
  {
    title: 'Task Management System',
    description:
      'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Built with RESTful APIs and JWT authentication.',
    image: dawaBajarAppImage,
    tags: [
      { label: 'REACT', color: 'rgba(43, 108, 238, 0.1)', textColor: '#2b6cee' },
      { label: 'EXPRESS', color: 'rgba(96, 165, 250, 0.1)', textColor: '#60a5fa' },
      { label: 'MONGODB', color: 'rgba(244, 63, 94, 0.1)', textColor: '#f43f5e' },
    ],
    date: 'Dec 2023',
    link: 'https://github.com'
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content scheduling. Features real-time data updates and interactive charts.',
    image: snaMartAppImage,
    tags: [
      { label: 'REACT', color: 'rgba(43, 108, 238, 0.1)', textColor: '#2b6cee' },
      { label: 'NODE.JS', color: 'rgba(100, 116, 139, 0.1)', textColor: '#64748b' },
      { label: 'MONGODB', color: 'rgba(168, 85, 247, 0.1)', textColor: '#a855f7' },
    ],
    date: 'Sep 2023',
    link: 'https://github.com'
  },
  {
    title: 'Blog Platform',
    description:
      'A modern blog platform with rich text editor, comment system, and user profiles. Includes admin panel for content management and SEO optimization features.',
    image: myHospitalAppImage,
    tags: [
      { label: 'REACT', color: 'rgba(43, 108, 238, 0.1)', textColor: '#2b6cee' },
      { label: 'EXPRESS', color: 'rgba(168, 85, 247, 0.1)', textColor: '#a855f7' },
      { label: 'MONGODB', color: 'rgba(100, 116, 139, 0.1)', textColor: '#64748b' },
    ],
    date: 'Jun 2023',
    link: 'https://github.com'
  },
];

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
