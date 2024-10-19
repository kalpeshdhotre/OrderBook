import React, { useState } from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import jsPDF from "jspdf";

const styles = StyleSheet.create({
   page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
   },
   section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
   },
});

const MyComponent = () => {
   const [formData, setFormData] = useState([]);
   const [previewPdf, setPreviewPdf] = useState(null);

   const handleFormSubmit = (e) => {
      e.preventDefault();
      const newFormData = {
         // Add form data here
         // Example:
         name: e.target.name.value,
         email: e.target.email.value,
      };
      setFormData([...formData, newFormData]);

      // Generate PDF
      const doc = new jsPDF();
      doc.text(20, 20, `Name: ${newFormData.name}`);
      doc.text(20, 50, `Email: ${newFormData.email}`);
      const pdfDataUri = doc.output("datauristring");
      setPreviewPdf(pdfDataUri);
   };

   return (
      <div>
         <form onSubmit={handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" required />
            <br />
            <label>Email:</label>
            <input type="email" name="email" required />
            <br />
            <button type="submit">Save and Generate PDF</button>
         </form>

         {previewPdf && (
            <PDFViewer style={{ width: "100%", height: "500px" }}>
               <Document>
                  <Page size="A4" style={styles.page}>
                     <View style={styles.section}>
                        <Text>Name: {formData[formData.length - 1].name}</Text>
                        <Text>Email: {formData[formData.length - 1].email}</Text>
                     </View>
                  </Page>
               </Document>
            </PDFViewer>
         )}
      </div>
   );
};

export default MyComponent;
