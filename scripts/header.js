import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [clientName, setClientName] = useState('');
  const [service, setService] = useState('');
  const [amount, setAmount] = useState('');
  const [invoice, setInvoice] = useState(null);

  const generateInvoice = () => {
    if (clientName && service && amount) {
      setInvoice({
        clientName,
        service,
        amount,
      });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Invoice Generator</Text>

      <TextInput
        style={styles.input}
        placeholder="Client Name"
        value={clientName}
        onChangeText={setClientName}
      />

      <TextInput
        style={styles.input}
        placeholder="Service Description"
        value={service}
        onChangeText={setService}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Generate Invoice" onPress={generateInvoice} />

      {invoice && (
        <View style={styles.invoice}>
          <Text style={styles.invoiceText}>Invoice</Text>
          <Text>Client: {invoice.clientName}</Text>
          <Text>Service: {invoice.service}</Text>
          <Text>Amount: ${invoice.amount}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  invoice: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
  },
  invoiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
