import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    primary: {
      main: "#90caf9",
    },
  },
});

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      setResult("Please enter some text.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setResult(data.result || "No result returned.");
    } catch (error) {
      setResult("Error connecting to backend.");
      console.error(error);
    }
  };

  const handleReset = () => {
    setText("");
    setResult("");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1950&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: "white",
        }}
      >
        <AppBar position="static" sx={{ background: "#212121" }}>
          <Toolbar>
            <Typography
              variant="h5"
              sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
            >
              AI Generated Text Detection
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 8 }}>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              backgroundColor: "rgba(33,33,33,0.85)",
              borderRadius: "16px",
            }}
          >
            <TextField
              fullWidth
              multiline
              minRows={6}
              placeholder="Enter text to detect..."
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
              InputProps={{
                style: {
                  backgroundColor: "rgba(255,255,255,0.07)",
                  color: "#fff",
                  borderRadius: "8px",
                },
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleReset}
                sx={{
                  fontWeight: "bold",
                  borderRadius: "10px",
                  paddingX: 3,
                  paddingY: 1,
                }}
              >
                Reset
              </Button>

              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
                sx={{
                  fontWeight: "bold",
                  borderRadius: "10px",
                  paddingX: 3,
                  paddingY: 1,
                }}
              >
                Check text
              </Button>
            </Box>

            {result && (
              <Typography
                variant="h6"
                sx={{
                  mt: 4,
                  color: result === "AI-Generated" ? "#ff5252" : "#66bb6a",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {result}
              </Typography>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;


