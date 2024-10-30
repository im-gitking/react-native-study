import { FlatList, Text, View } from "react-native";
import ProductComponent from "../components/ProductComponent";

const Index = () => {
  const products = [
    {
      productName: "Product A",
      productImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
    {
      productName: "Product B",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
    {
      productName: "Product C",
      productImage:
        "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
    {
      productName: "Product D",
      productImage:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.productName}
        data={products}
        renderItem={({ item }) => (
          <ProductComponent
            name={item.productName}
            price={item.productPrice}
            image={item.productImage}
            description={item.productDescription}
            isFeatured={item.isFeatured}
          />
        )}
      />
    </View>
  );
};

export default Index;
