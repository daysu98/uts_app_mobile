import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Bagian Atas (Background Biru) */}
      <View style={styles.topSection}>
        <Text style={styles.scanText}>SCAN THIS QR CODE</Text>
        <Image
          source={require("/laragon/www/Mobile-app/TakeHome/assets/images/qr_code.png")} // Ganti dengan QR Code Anda
          style={styles.qrImage}
        />
        <Text style={styles.nameText}>YOUR NAME</Text>
        <Text style={styles.emailText}>your-email@gmail.com</Text>
      </View>

      {/* Bagian Bawah (Background Putih) */}
      <View style={styles.bottomSection}>
        <Text style={styles.tryBarcodeText}>Try BARCODE</Text>
        <Image
          source={require("/laragon/www/Mobile-app/TakeHome/assets/images/barcode.png")} // Ganti dengan Barcode Anda
          style={styles.barcodeImage}
        />
        <Text style={styles.helperText}>Can't scan the QR Code?</Text>

        {/* Bagian Try Bank Account */}
        <View style={styles.bankAccountContainer}>
          <Text style={styles.tryText}>Try </Text>
          <Text style={styles.bankAccountText}>Bank Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  topSection: {
    flex: 2.5,
    backgroundColor: "#12315f",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  scanText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  qrImage: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  nameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  emailText: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  tryBarcodeText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 0,
  },
  barcodeImage: {
    width: 200,
    height: 50,
    marginVertical: 20,
  },
  helperText: {
    color: "#555",
    fontSize: 14,
    marginTop: 10,
  },
  bankAccountContainer: {
    flexDirection: "row", 
    alignItems: "center",
    marginTop: 5,
  },
  tryText: {
    color: "#000", 
    fontSize: 14,
  },
  bankAccountText: {
    color: "#1E88E5", 
    fontSize: 14,
    textDecorationLine: "underline", 
  },
});
