import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Box } from "@mui/material"
import Navbar from "../src/components/Navbar"

import ThreeBackground from "../src/components/ThreeBackground"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#0a192f",
      paper: "#112240",
    },
    text: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "12px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(17, 34, 64, 0.8)",
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Box sx={{ position: "relative", minHeight: "100vh" }}> */}
        <ThreeBackground />
         <Navbar />
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer />
      {/* </Box> */}
    </ThemeProvider>
  )
}

export default App
