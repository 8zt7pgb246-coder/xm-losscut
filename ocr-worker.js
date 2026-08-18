/* xm-losscut OCR worker v37 — same-origin bootstrap for iPhone Safari / GitHub Pages. */
try {
  importScripts('https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js');
} catch (e) {
  self.postMessage({status:'worker_error', error:String(e && e.message || e)});
  throw e;
}
