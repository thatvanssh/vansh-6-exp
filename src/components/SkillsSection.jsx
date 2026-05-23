import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ApiIcon from '@mui/icons-material/Api';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AnimatedBox from './AnimatedBox';
import SkillCard from './SkillCard';
import siteData from '../data/siteData';

const iconMap = {
  MongoDB: <StorageIcon />,
  Express: <ApiIcon />,
  React: <WebIcon />,
  'Node.js': <CloudSyncIcon />,
  JavaScript: <CodeIcon />,
  'REST API': <AccountTreeIcon />,
};

const skills = siteData.skills.map((name) => ({ name, icon: iconMap[name] || <CodeIcon /> }));

export default function SkillsSection() {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: { xs: 4, md: 6 },
        my: 5,
        backgroundColor: 'rgba(43, 108, 238, 0.05)',
        borderRadius: 2,
      }}
    >
      <AnimatedBox animation="fadeInUp" delay={0.1}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" gutterBottom fontWeight={700}>
            Technical Expertise
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            I specialize in the MERN stack ecosystem and maintain expertise in building
            scalable full-stack web applications with modern technologies.
          </Typography>
        </Box>
      </AnimatedBox>

      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
            <AnimatedBox animation="fadeInUp" delay={0.2 + index * 0.1} duration={0.5}>
              <SkillCard skill={skill} />
            </AnimatedBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
