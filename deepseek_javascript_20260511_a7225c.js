// src/components/PDF/PDFExport.jsx
import html2pdf from 'html2pdf.js'

export default async function PDFExport(element, fileName, showToast) {
  if (!element) {
    showToast('Nothing to export')
    return
  }

  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `${fileName || 'resume'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, letterRendering: true, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }

  try {
    await html2pdf().set(opt).from(element).save()
    showToast('PDF downloaded successfully! ✓')
  } catch (error) {
    console.error('PDF export failed:', error)
    showToast('PDF export failed. Please try again.', 4000)
  }
}