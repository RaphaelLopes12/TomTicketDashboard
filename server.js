const express = require('express');
const path = require('path');

const app = express();

// Altere o caminho para apontar para "browser"
const DIST_FOLDER = path.join(__dirname, 'dist/tom-ticket-dashboard/browser');

// Configuração para servir os arquivos estáticos
app.use(express.static(DIST_FOLDER));

// Redirecionar todas as requisições para o `index.html`
app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_FOLDER, 'index.html'));
});

// Define a porta para o servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

