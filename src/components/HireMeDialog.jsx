import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const EMAIL_RECIPIENT = 'thatvansh@gmail.com';

export default function HireMeDialog({ open, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleClose = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    onClose?.();
  };

  const handleSend = (event) => {
    event.preventDefault();

    const mailto = `mailto:${EMAIL_RECIPIENT}?subject=${encodeURIComponent(
      subject || 'Website project inquiry',
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )}`;

    window.location.href = mailto;
    handleClose();
  };

  const isSubmitDisabled = !name || !email || !subject || !message;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
      BackdropProps={{
        sx: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(15, 20, 34, 0.86)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(16px)',
          color: 'text.primary',
          minHeight: fullScreen ? '100vh' : 'auto',
          borderRadius: fullScreen ? 0 : 3,
        },
      }}
    >
      <DialogTitle sx={{ pr: 5 }}>
        Hire Me
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ backgroundColor: 'transparent' }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSend}
          sx={{ display: 'grid', gap: 2 }}
        >
          <TextField
            label="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Your Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            fullWidth
            multiline
            rows={5}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          type="submit"
          variant="contained"
          onClick={handleSend}
          disabled={isSubmitDisabled}
        >
          Send Email
        </Button>
      </DialogActions>
    </Dialog>
  );
}
