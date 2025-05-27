"use client"

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
} from "@mui/material"
import { motion } from "framer-motion"
import { GitHub, Launch, Favorite } from "@mui/icons-material"

const projects = [
  {
    title: "Ayurvedic-Soap",
    description:
      "UI-focused Ayurvedic soap app built with React and Material UI components.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["React", "Node.js", "Express", "MongoDB,Material UI"],
    githubUrl: "https://github.com/pariarul/ayurvedic-soap",
    liveUrl: "https://ayurvedic-soap.vercel.app/",
    featured: false,
  },
  {
    title: "kicklab",
    description:
      "Full-stack app with React, Three.js, and Material UI for 3D web visuals.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    technologies: ["React", "JavaScript", "three js ", "Material UI"],
    githubUrl: "https://github.com/pariarul/kicklab",
    liveUrl: "https://kicklab.vercel.app/",
    featured: true,
  },
  
]

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "rgba(17, 34, 64, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 2, color: "primary.main" }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
          >
            Some things I've built
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={project.title}
              sx={{
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ flexGrow: 1, display: "flex" }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: 500,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    {project.featured && (
                      <Chip
                        icon={<Favorite />}
                        label="Featured"
                        color="primary"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                        }}
                      />
                    )}
                  </Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            mr: 1,
                            mb: 1,
                            borderColor: "primary.main",
                            color: "primary.main",
                          }}
                        />
                      ))}
                    </Box>
                    <Box
                      sx={{
                        mt: "auto",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "text.secondary" }}
                        aria-label={`${project.title} GitHub`}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "primary.main" }}
                        aria-label={`${project.title} Live Demo`}
                      >
                        <Launch />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                },
              }}
            >
              View More Projects
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Projects
