import Purchases from 'react-native-purchases';

export const initPayments = () => {
  Purchases.setDebugLogsEnabled(true);
  Purchases.setup("YOUR_REVENUECAT_API_KEY");
};

export const subscribe = async () => {
  const offerings = await Purchases.getOfferings();
  await Purchases.purchasePackage(offerings.current?.availablePackages[0]);
};