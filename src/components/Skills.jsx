"use client"

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from "@mui/material"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Three.js", level: 50 },
      { name: "Redux", level: 60 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Node js", level: 75 },
      { name: "Express", level: 78 },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 50 },
      { name: "Jenkins", level: 55 },
      { name: "CI/CD", level: 50 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 70 },
      { name: "VSCode", level: 75 },
      { name: "Jira", level: 50 },
      { name: "Postman", level: 60 },
    ],
  },
]

const technologies = [
  "React", "JavaScript", "HTML/CSS", "Node.js", "Express", "Java",
  "Spring Boot", "MongoDB", "MySQL", "Docker", "Git", "GitHub",
  "VSCode", "Jira", "Postman", "Material UI", "Three.js", "Redux",
  "REST APIs", "CI/CD",
]

function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" sx={{ mb: 2, color: "primary.main" }}>
            Skills & Technologies
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: "auto" }}>
            Technologies I've been working with recently
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8, marginLeft:{
          xs: 7,
          md: 0,
          sm:10
        }}}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item  key={category.title} sx={{ display: "flex"  ,}}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                style={{ flex: 1 }}
              >
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ p: 3, flexGrow: 1 , width:{
                    xs: 250,
                    md: 200
                  } }}>
                    <Typography variant="h6" sx={{ mb: 3, color: "primary.main", textAlign: "center" }}>
                      {category.title}
                    </Typography>
                    {category.skills.map((skill) => (
                      <Box key={skill.name} sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                          <Typography variant="body2">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(100, 255, 218, 0.1)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "primary.main",
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" align="center" sx={{ mb: 4, color: "primary.main" }}>
            Technologies I Work With
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Chip
                  label={tech}
                  variant="outlined"
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Skills
