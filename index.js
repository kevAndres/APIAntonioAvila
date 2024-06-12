const express = require('express');
const userRoutes = require('./routes/userRoutes');
const representanteRoutes = require('./routes/representanteRoutes');
const estudianteRoutes = require('./routes/estudianteRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const atrasoRoutes = require('./routes/atrasoRoutes');
const asignaturaRoutes = require('./routes/asignaturaRoutes');
const docenteRoutes = require('./routes/docenteRoutes');
const esquelaRoutes = require('./routes/esquelaRoutes');
const asignacionDocenteMateriaRoutes = require('./routes/asignacionDocenteMateriaRoutes');
const cors = require('cors');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: ['https://aplicativo-antonio-avila.vercel.app', 'http://localhost:3000'], // Agrega aquí los orígenes permitidos
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization"
};
app.use(cors(corsOptions));

process.env.TZ = 'America/Guayaquil';

app.use(express.json({ limit: '500mb' }));
app.use('/representante', representanteRoutes);
app.use('/curso', cursoRoutes);
app.use('/user', userRoutes);
app.use('/estudiante', estudianteRoutes);
app.use('/atraso', atrasoRoutes);
app.use('/asignatura', asignaturaRoutes);
app.use('/docente', docenteRoutes);
app.use('/esquela', esquelaRoutes);
app.use('/docenteMateria', asignacionDocenteMateriaRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Algo salió mal' });
});

// Configuración del servidor para escuchar en todas las interfaces de red
const PORT = process.env.PORT || 3000;  // Vercel configurará automáticamente el puerto
const HOST = '0.0.0.0'; // Escucha en todas las interfaces de red
app.listen(PORT, HOST, () => {
  console.log(`Server running`);
  console.log('Zona horaria del servidor:', process.env.TZ);
});
