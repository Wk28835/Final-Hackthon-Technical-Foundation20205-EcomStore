import { PDFDocument, StandardFonts } from "pdf-lib";

export async function createLabel(orderId: string | number): Promise<Buffer> {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Add a blank page to the document
  const page = pdfDoc.addPage([400, 200]);

  // Add content to the page
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 18;
  const text = `Shipping Label for Order #${orderId}`;
  page.drawText(text, { x: 50, y: 100, size: fontSize, font });

  // Return the PDF as a buffer
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
