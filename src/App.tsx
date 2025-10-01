import './App.css';
import { Container, Grid } from '@mui/material';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Skills } from './components/skills';
import { Project } from './components/project';

const App = () => (
  <div className="App">
    <Container maxWidth="lg" style={{ padding: '20px 0' }}>
      <Grid container spacing={2} rowSpacing={2} columnSpacing={2}>
        <Grid size={6}>
          <Hero />
        </Grid>
        <Grid size={6}>
          <Contact />
        </Grid>
        <Grid size={12}>
          <About />
        </Grid>
        <Grid size={12}>
          <Skills />
        </Grid>
        <Grid size={12}>
          <Project />
        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default App;
