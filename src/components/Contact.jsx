"use client"

import { Box, Typography, Container, Grid, Card, CardContent, TextField, Button, IconButton } from "@mui/material"
import { motion } from "framer-motion"
import { Email, Phone, WhatsApp, LinkedIn, GitHub } from "@mui/icons-material"
import { useState } from "react"

const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 30 }} />,
    title: "Email",
    value: "pariaarul@gmai.com",
    link: "mailto:pariaarul@gmai.com",
  },
  {
    icon: <Phone sx={{ fontSize: 30 }} />,
    title: "Phone",
    value: "+91 7548825840",
    link: "tel:+917548825840",
  },
  {
    icon: <WhatsApp sx={{ fontSize: 30 }} />,
    title: "WhatsApp",
    value: "+91 7548825840",
    link: "https://wa.me/917548825840",
  },
]

const socialLinks = [
  { icon: <LinkedIn />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <GitHub />, url: "https://github.com", label: "GitHub" },
  { icon: <WhatsApp />, url: "https://wa.me/917548825840", label: "WhatsApp" },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message sent! (This is a demo)")
  }

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" sx={{ mb: 2, color: "primary.main", fontSize: { xs: "2rem", md: "3rem" } }}>
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: "auto", fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            I'm always open to discussing new opportunities and interesting projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" sx={{ mb: 4, color: "primary.main", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                Let's Connect
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, fontSize: { xs: "0.9rem", md: "1rem" } }}>
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
                Feel free to reach out through any of the channels below.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} key={info.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        component="a"
                        href={info.link}
                        sx={{
                          textDecoration: "none",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "translateX(8px)",
                          },
                        }}
                      >
                        <CardContent sx={{ display: "flex", alignItems: "center", p: 2 }}>
                          <Box sx={{ color: "primary.main", mr: 2 }}>{info.icon}</Box>
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              {info.title}
                            </Typography>
                            <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                              {info.value}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconButton
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "primary.main",
                        border: "1px solid",
                        borderColor: "primary.main",
                        "&:hover": {
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Responsive form grid */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  px: { xs: 2, md: 0 },
                  width: "100%",
                  maxWidth: 450,
                  mx: { xs: "20px", md: 40 },
                }}
              >
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        backgroundColor: "primary.main",
                        color: "background.default",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
