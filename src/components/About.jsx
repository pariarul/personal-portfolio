"use client"

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material"
import { motion } from "framer-motion"
import { Code, DesignServices, Speed } from "@mui/icons-material"
import React from "react"

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <Grid item xs={12} md={4}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: "100%",
          textAlign: "center",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ color: "primary.main", mb: 2 }}>{icon}</Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  </Grid>
)

// Features Data
const features = [
  {
    icon: <Code sx={{ fontSize: 40 }} />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
  },
  {
    icon: <DesignServices sx={{ fontSize: 40 }} />,
    title: "Modern Design",
    description: "Creating beautiful, responsive designs with attention to user experience.",
  },
  {
    icon: <Speed sx={{ fontSize: 40 }} />,
    title: "Performance",
    description: "Optimizing applications for speed and performance across all devices.",
  },
]

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "rgba(17, 34, 64, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" sx={{ mb: 2, color: "primary.main" }}>
            About Me
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
          >
            Passionate developer with a love for creating innovative solutions
          </Typography>
        </motion.div>

        {/* Bio Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: { xs: 200, md: 300 },
                  marginLeft: { xs: 10   , md: 60 },
                }}
              >
                <Avatar
                  src="../public/images/Aboutpage.jpg"
                  alt="Profile Picture"
                  sx={{
                    width: 200,
                    height: 200,
                    border: "4px solid",
                    borderColor: "primary.main",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.8, textAlign: { xs: "center", md: "left" } }}>
                Hello! I'm John, a passionate full-stack developer based in San Francisco. I enjoy creating things that
                live on the internet, whether that be websites, applications, or anything in between.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.8, textAlign: { xs: "center", md: "left" } }}
              >
                My goal is to always build products that provide pixel-perfect, performant experiences. I have
                experience working with modern technologies including React, Node.js, TypeScript, and various databases.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8, textAlign: { xs: "center", md: "left" } }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or enjoying the great outdoors.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Features */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default About
