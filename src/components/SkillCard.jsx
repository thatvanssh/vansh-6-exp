import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

export default function SkillCard({ skill }) {
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
          '& .skill-icon-wrapper': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1.5,
          py: 3,
        }}
      >
        <Box
          className="skill-icon-wrapper"
          sx={{
            width: 48,
            height: 48,
            borderRadius: 3,
            backgroundColor: 'rgba(43, 108, 238, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            transition: 'all 0.3s ease',
          }}
        >
          {skill.icon}
        </Box>
        <Typography variant="body2" fontWeight={700}>
          {skill.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
