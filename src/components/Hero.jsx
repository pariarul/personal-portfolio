"use client"

import { Box, Typography, Button, Container, Grid } from "@mui/material"
import { motion } from "framer-motion"
import { Download as DownloadIcon, Email as EmailIcon } from "@mui/icons-material"
import resume from "../../public/images/PariArul-Developer.pdf"
function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left side: Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 500 }}>
                Hi, my name is
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  background: "linear-gradient(45deg, #64ffda, #f50057)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                PariArul
              </Typography>
              <Typography variant="h2" color="text.secondary" sx={{ mb: 3 }}>
                I build things for the web.
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 600, lineHeight: 1.6 }}
              >
                I'm a full-stack developer specializing in building exceptional digital experiences. Currently
                focused on creating accessible, human-centered products.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={scrollToContact}
                  aria-label="Scroll to contact section"
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                    },
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  aria-label="Download CV"
                  href={resume}
                  download
                  sx={{
                    backgroundColor: "primary.main",
                    color: "background.default",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right side: Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/images/profile.jpg" // Replace with your image path
              alt="Profile"
              sx={{
                maxWidth: "100%",
                height: "500px",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
