// SignInWithMetaMask.js
import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

const SignInWithMetaMask = () => {
  const [address, setAddress] = useState('');

  const connectMetaMask = async () => {
    try {
      const provider = await getProvider();
      const signer = provider.getSigner();
      const connectedAddress = await signer.getAddress();
      setAddress(connectedAddress);
      Alert.alert('Success', `Connected with address: ${connectedAddress}`);
    } catch (error) {
      console.error('MetaMask connection error:', error);
      Alert.alert('Error', 'Failed to connect with MetaMask');
    }
  };

  const getProvider = async () => {
    const web3Modal = new Web3Modal();
    const provider = await web3Modal.connect();
    return new ethers.providers.Web3Provider(provider);
  };

  return (
    <View>
      <Button title="Sign In with MetaMask" onPress={connectMetaMask} />
      {address && <Text>Connected Address: {address}</Text>}
    </View>
  );
};

export default SignInWithMetaMask;
