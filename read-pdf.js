const fs = require('fs');
const pdf = require('parse-pdf');

// Vamos a usar un paquete más robusto si está disponible o fallback a extraer crudo
async function readPdf() {
    try {
        const dataBuffer = fs.readFileSync('C:\\Users\\YOIDER\\OneDrive\\Escritorio\\Profile.pdf');
        
        // Carga el import dinámicamente si no existe globalmente
        const pdfParse = require('pdf-parse');
        const data = await pdfParse(dataBuffer);
        
        console.log(data.text);
    } catch (error) {
        console.error("Error leyendo PDF:", error.message);
    }
}

readPdf();
