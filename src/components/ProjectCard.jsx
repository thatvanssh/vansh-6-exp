import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 32px rgba(43, 108, 238, 0.2)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(43, 108, 238, 0.2)',
            transition: 'background-color 0.3s ease',
            zIndex: 1,
            '.MuiCard-root:hover &': {
              backgroundColor: 'transparent',
            },
          }}
        />
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            aspectRatio: '16/9',
            transition: 'transform 0.5s ease',
            '.MuiCard-root:hover &': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag.label}
              size="small"
              sx={{
                fontSize: '0.625rem',
                fontWeight: 700,
                backgroundColor: tag.color,
                color: tag.textColor,
                height: 20,
              }}
            />
          ))}
        </Box>

        <Typography variant="h6" gutterBottom fontWeight={700}>
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, flexGrow: 1 }}
        >
          {project?.description?.slice(0, 70)} {project?.description?.length > 70 && "..."}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <CodeIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              component="a"
              href={project.link}
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" fontStyle="italic">
            {project.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
