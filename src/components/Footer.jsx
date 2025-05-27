"use client"

import { Box, Typography, Container, IconButton, Divider } from "@mui/material"
import { LinkedIn, GitHub, Twitter, Favorite } from "@mui/icons-material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const socialLinks = [
  { icon: <LinkedIn />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <GitHub />, url: "https://github.com", label: "GitHub" },
  { icon: <WhatsAppIcon />, url: "https://wa.me/1234567890", label: "WhatsApp" }, // replace number
]

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            textAlign: "center", 
            px: { xs: 2, sm: 3 },  // padding horizontal for mobile
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: "primary.main",
              cursor: "pointer",
              fontSize: { xs: '1.25rem', sm: '1.5rem' }, // smaller on mobile
            }}
            onClick={scrollToTop}
          >
            PariArul
          </Typography>

          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 2, 
              mb: 3, 
              flexWrap: "wrap",  // wrap on smaller screens
            }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
          >
            © {currentYear} PariArul
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: 0.5,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              flexWrap: 'wrap',
              textAlign: 'center'
            }}
          >
            Made with <Favorite sx={{ fontSize: 16, color: "primary.main" }} /> portfolio
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
