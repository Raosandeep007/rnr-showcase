import * as React from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Themelayout from "~/components/theme-layout";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

const INVOICES = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Paid",
    totalAmount: "$500.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Pending",
    totalAmount: "$750.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$1,000.00",
    paymentMethod: "PayPal",
  },
];

const MIN_COLUMN_WIDTHS = [120, 120, 100, 120];

const TableExample = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const columnWidths = React.useMemo(() => {
    return MIN_COLUMN_WIDTHS.map((minWidth) => {
      const evenWidth = width / MIN_COLUMN_WIDTHS.length;
      return evenWidth > minWidth ? evenWidth : minWidth;
    });
  }, [width]);

  return (
    <Themelayout>
      <Animated.ScrollView
        scrollEventThrottle={16}
        decelerationRate="fast"
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        <Table aria-labelledby="invoice-table">
          <TableHeader>
            <TableRow>
              <TableHead className="px-0.5" style={{ width: columnWidths[0] }}>
                <Text>Invoice</Text>
              </TableHead>
              <TableHead style={{ width: columnWidths[1] }}>
                <Text>Status</Text>
              </TableHead>
              <TableHead style={{ width: columnWidths[2] }}>
                <Text>Method</Text>
              </TableHead>
              <TableHead style={{ width: columnWidths[3] }}>
                <Text className="text-center md:text-right md:pr-5">
                  Amount
                </Text>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <FlatList
              data={INVOICES}
              // estimatedItemSize={45}
              contentContainerStyle={{
                paddingBottom: insets.bottom,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: invoice, index }) => {
                return (
                  <TableRow
                    key={invoice.invoice}
                    className={cn(
                      "active:bg-secondary",
                      index % 2 && "bg-muted/40 "
                    )}
                  >
                    <TableCell style={{ width: columnWidths[0] }}>
                      <Text>{invoice.invoice}</Text>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[1] }}>
                      <Text>{invoice.paymentStatus}</Text>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[2] }}>
                      <Text>{invoice.paymentMethod}</Text>
                    </TableCell>
                    <TableCell
                      style={{ width: columnWidths[3] }}
                      className="items-end "
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="shadow-sm shadow-foreground/10 mr-3"
                        onPress={() => {
                          Alert.alert(
                            invoice.totalAmount,
                            `You pressed the price button on invoice ${invoice.invoice}.`
                          );
                        }}
                      >
                        <Text>{invoice.totalAmount}</Text>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              }}
              ListFooterComponent={() => {
                return (
                  <>
                    <TableFooter>
                      <TableRow>
                        <TableCell className="flex-1 justify-center">
                          <Text className="text-foreground">Total</Text>
                        </TableCell>
                        <TableCell className="items-end pr-8">
                          <Button
                            size="sm"
                            variant="ghost"
                            onPress={() => {
                              Alert.alert(
                                "Total Amount",
                                `You pressed the total amount price button.`
                              );
                            }}
                          >
                            <Text>$2,500.00</Text>
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                    <View className="items-center py-3 ios:pb-0">
                      <Text
                        nativeID="invoice-table"
                        className="items-center text-sm text-muted-foreground"
                      >
                        A list of your recent invoices.
                      </Text>
                    </View>
                  </>
                );
              }}
            />
          </TableBody>
        </Table>
      </Animated.ScrollView>
    </Themelayout>
  );
};

export default TableExample;
