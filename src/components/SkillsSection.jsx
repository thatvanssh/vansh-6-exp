import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ApiIcon from '@mui/icons-material/Api';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import StyleIcon from '@mui/icons-material/Style';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import GitHubIcon from '@mui/icons-material/GitHub';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AnimatedBox from './AnimatedBox';
import SkillCard from './SkillCard';
import siteData from '../data/siteData';

const iconMap = {
  'MongoDB': <StorageIcon />,
  'Express.js': <ApiIcon />,
  'React.js': <WebIcon />,
  'Node.js': <CloudSyncIcon />,
  'JavaScript': <CodeIcon />,
  'TypeScript': <CodeIcon />,
  'REST API': <ApiIcon />,
  'AWS': <CloudIcon />,
  'DevOps': <BuildIcon />,
  'GraphQL': <DeviceHubIcon />,
  'Tailwind CSS': <StyleIcon />,
  'Next.js': <NextPlanIcon />,
  'Git': <GitHubIcon />,
  'Docker': <WidgetsIcon />,
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
