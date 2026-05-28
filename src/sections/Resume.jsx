import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import './Resume.css'
import resumePdf from '../assets/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <section id="resume" className="section">
      <p className="section-label">06. Resume</p>
      <h2 className="section-title">My Resume</h2>
      <div className="section-divider" />

      <div className="resume-viewer-wrap">
        <Document
          file={resumePdf}
          onLoadSuccess={onLoadSuccess}
          className="resume-document"
        >
          <Page
            pageNumber={pageNumber}
            className="resume-page"
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>

        {numPages > 1 && (
          <div className="resume-pagination">
            <button
              className="page-btn"
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              disabled={pageNumber <= 1}
            >
              ← Prev
            </button>
            <span className="page-count">{pageNumber} / {numPages}</span>
            <button
              className="page-btn"
              onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
              disabled={pageNumber >= numPages}
            >
              Next →
            </button>
          </div>
        )}

        <a href={resumePdf} download="EmilioBejasaResume.pdf" className="resume-download">
          Download PDF
        </a>
      </div>
    </section>
  )
}
